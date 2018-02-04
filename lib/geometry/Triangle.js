import _ from 'lodash';
import Decimal from 'decimal.js';
import Polygon from './Polygon';
import Angle from '../units/Angle';

/**
 * A Triangle object
 * Each side has an id either a, b or c.
 * Each side has an angle with the same id. This angle is the oposition angle.
 * Each side has a height, which is the perpendicular line from the side.
 * @type {Triangle}
 * @class
 * @property {Object<BigDecimal>} sides - the sides of the triangle.
 * @property {Object<BigDecimal>} angles - the angles of the triangle.
 * @property {Object<BigDecimal>} heights - the heights of the triangle calculated based on sides/angles
 * @property {BigDecimal} perimeter - the perimeter of the triangle.
 * @property {BigDecimal} area - the area of the triangle.
 * @property {String} type - the type of triangle: equilateral, isosceles and scalene.
 */
export default class Triangle extends Polygon {

    /**
     * The Triangle constructor.
     * @constructor
     * @param {Object} values - the values.
     */
    constructor(values){
        values.vertices = 3;
        super(values);

        this.heights = this._mapDecimals(values.heights);
    }

    /**
     * For the given values, returns a solved Triangle
     * @param  {Object} values the values of the triangle.
     * @return {Triangle} - the solved triangle
     */
    static of(values) {
        const t = new Triangle(values);
        return t.solve();
    }

    /**
     * "AAA" is when we know all three angles of a triangle, but no sides.
     * AAA triangles are impossible to solve further since there is nothing to show us size
     * @return {Boolean} if this triangle is AAA
     */
    isAAA() {
        return Object.keys(this.angles).length >= 2 && Object.keys(this.sides).length === 0;
    }

    /**
     * "SSS" is when we know three sides of the triangle, and want to find the missing angles.
     * @return {Boolean} if this triangle is SSS
     */
    isSSS() {
        return Object.keys(this.angles).length === 0 && Object.keys(this.sides).length >= 2;
    }

    /**
     * "AAS" is when we know two angles and one side which is not between the angles.
     * @return {Boolean} if this triangle is AAS
     */
    isAAS() {
        if(!(Object.keys(this.angles).length === 2 && Object.keys(this.sides).length === 1)){
            return false;
        }

        if(this.angles.a && this.angles.c && (this.sides.c || this.sides.a)){
            return true;
        }

        if(this.angles.a && this.angles.b && (this.sides.a || this.sides.b)){
            return true;
        }

        if(this.angles.c && this.angles.b && (this.sides.c || this.sides.b)){
            return true;
        }

        return false;
    }

    /**
     * "ASA" is when we know two angles and a side between the angles.
     * @return {Boolean} if this triangle is ASA
     */
    isASA() {
        if(!(Object.keys(this.angles).length === 2 && Object.keys(this.sides).length === 1)){
            return false;
        }

        if(this.angles.a && this.angles.c && this.sides.b){
            return true;
        }

        if(this.angles.a && this.angles.b && this.sides.c){
            return true;
        }

        if(this.angles.c && this.angles.b && this.sides.a){
            return true;
        }

        return false;
    }

    /**
     * "SAS" is when we know two sides and the angle between them.
     * @return {Boolean} if this triangle is SAS
     */
    isSAS() {
        if(!(Object.keys(this.sides).length === 2 && Object.keys(this.angles).length === 1)){
            return false;
        }

        if(this.sides.a && this.sides.c && this.angles.b){
            return true;
        }

        if(this.sides.a && this.sides.b && this.angles.c){
            return true;
        }

        if(this.sides.c && this.sides.b && this.angles.a){
            return true;
        }
    }

    /**
     * "SSA" is when we know two sides and an angle that is not the angle between the sides.
     * @return {Boolean} if this triangle is SSA
     */
    isSSA() {
        if(!(Object.keys(this.sides).length === 2 && Object.keys(this.angles).length === 1)){
            return false;
        }

        if(this.sides.b && this.sides.c && (this.angles.b || this.angles.c)){
            return true;
        }

        if(this.sides.a && this.sides.b && (this.angles.b || this.angles.a)){
            return true;
        }

        if(this.sides.a && this.sides.c && (this.angles.c || this.angles.a)){
            return true;
        }

        return false;
    }

    /**
     * "HB" is when we know a side and its height. We can only calculate the area.
     * @return {Boolean} if this triangle is HB
     */
    isHB() {
        return ['a', 'b', 'c'].map((k) => this.sides[k] && this.heights[k] ? true : false).reduce((p, c) => p || c);
    }

    solveAAA() {
        const _180 = new Decimal(180);
        if(this.angles.a && this.angles.b){
            this.angles.c = _180.minus(this.angles.a.plus(this.angles.b));
        }else if(this.angles.a && this.angles.c){
            this.angles.b = _180.minus(this.angles.a.plus(this.angles.c));
        }else if(this.angles.c && this.angles.b){
            this.angles.a = _180.minus(this.angles.c.plus(this.angles.b));
        }
        return this;
    }

    solveSSS() {
        const {a,b,c} = this.sides;
        const deg = Angle.getUnit('Degree');

        // cos(aa) = (b2 + c2 − a2) / 2bc
        const cosA = b.pow(2).plus(c.pow(2)).minus(a.pow(2)).div(Decimal.mul(2, b.mul(c)));
        this.angles.a = Angle.of(cosA.acos(), 'rad').to(deg);

        // cos(ab) = (c2 + a2 − b2)/2ca
        const cosB = c.pow(2).plus(a.pow(2)).minus(b.pow(2)).div(Decimal.mul(2, c.mul(a)));
        this.angles.b = Angle.of(cosB.acos(), 'rad').to(deg);

        this.solveAAA();

        return this;
    }

    solveAAS() {
        this.solveAAA();

        if(!this.sides.a && this.sides.c){
            this.sides.a = this.sideOf(this.angles.c, this.sides.c, this.angles.a);
            return this.solveAAS();
        }else if(!this.sides.a && this.sides.b){
            this.sides.a = this.sideOf(this.angles.b, this.sides.b, this.angles.a);
            return this.solveAAS();
        }else if(!this.sides.b && this.sides.a){
            this.sides.b = this.sideOf(this.angles.a, this.sides.a, this.angles.b);
            return this.solveAAS();
        }else if(!this.sides.b && this.sides.c){
            this.sides.b = this.sideOf(this.angles.c, this.sides.c, this.angles.b);
            return this.solveAAS();
        }else if(!this.sides.c && this.sides.b){
            this.sides.c = this.sideOf(this.angles.b, this.sides.b, this.angles.c);
            return this.solveAAS();
        }else if(!this.sides.c && this.sides.a){
            this.sides.c = this.sideOf(this.angles.a, this.sides.a, this.angles.c);
            return this.solveAAS();
        }

        return this;
    }

    solveSAS() {
        const rad = Angle.getUnit('Radian');
        const {a, b, c} = this.sides;
        // Use law of cosines for sides a2 = b2 + c2 − 2bc cos(aA)
        if(this.sides.b && this.sides.c){
            const aA = Angle.of(this.angles.a, 'deg').to(rad).cos();
            const cosA = Decimal.mul(2, b.mul(c)).mul(aA);
            this.sides.a = b.pow(2).plus(c.pow(2)).minus(cosA).sqrt();
        }else if(this.sides.b && this.sides.a){
            const aC = Angle.of(this.angles.c, 'deg').to(rad).cos();
            const cosC = Decimal.mul(2, b.mul(a)).mul(aC);
            this.sides.c = b.pow(2).plus(a.pow(2)).minus(cosC).sqrt();
        }else if(this.sides.a && this.sides.c){
            const aB = Angle.of(this.angles.b, 'deg').to(rad).cos();
            const cosB = Decimal.mul(2, c.mul(a)).mul(aB);
            this.sides.b = c.pow(2).plus(a.pow(2)).minus(cosB).sqrt();
        }

        // Now we have to find the smallest angle which is the one of the smallest side's key.
        let smallestSide = null;
        for (const k in this.sides) {
            if (!this.sides.hasOwnProperty(k)) {
                continue;
            }

            if(!smallestSide){
                smallestSide = k;
                continue;
            }

            const side = this.sides[k];
            if(this.sides[smallestSide].gt(side) && this.angles[smallestSide]){
                smallestSide = k;
            }
        }

        const side = this.sides[smallestSide];
        let angle = null;

        // Now we use Law of sines to obtain the angle of the smallest side with the angle we know.
        if(this.angles.a){
            const aA = Angle.of(this.angles.a, 'deg').to(rad).sin();
            angle = side.mul(aA).div(this.sides.a);
        }else if(this.angles.b){
            const aB = Angle.of(this.angles.b, 'deg').to(rad).sin();
            angle = side.mul(aB).div(this.sides.b);
        }else if(this.angles.c){
            const aC = Angle.of(this.angles.c, 'deg').to(rad).sin();
            angle = side.mul(aC).div(this.sides.c);
        }

        // We need to convert to Degree from Radians
        const deg = Angle.getUnit('Degree');
        this.angles[smallestSide] = Angle.of(angle.asin(), 'rad').to(deg);

        // Finally, calculate the missing angle.
        this.solveAAA();

        return this;
    }

    solveSSA() {
        let side, angle;

        // First we need to know which angle/side pair we know.
        if(this.sides.a && this.angles.a){
            side = this.sides.a;
            angle = this.angles.a;
        }else if(this.sides.b && this.angles.b){
            side = this.sides.b;
            angle = this.angles.b;
        }else if(this.sides.c && this.angles.c){
            side = this.sides.c;
            angle = this.angles.c;
        }

        // Using this side/angle pair and one of the sides, we can calculate this side's angle
        if(this.sides.a && !this.angles.a){
            this.angles.a = this.angleOf(angle, side, this.sides.a);
        }else if(this.sides.b && !this.angles.b){
            this.angles.b = this.angleOf(angle, side, this.sides.b);
        }else if(this.sides.c && !this.angles.c){
            this.angles.c = this.angleOf(angle, side, this.sides.c);
        }
        // We are only missing one angle, so calculate it.
        this.solveAAA();

        // Now we have all angles and two sides, so we use Law of sines to find the last side we're missing.
        if(!this.sides.a){
            this.sides.a = this.sideOf(this.angles.b, this.sides.b, this.angles.a);
        }else if(!this.sides.b){
            this.sides.b = this.sideOf(this.angles.c, this.sides.c, this.angles.b);
        }else if(!this.sides.c){
            this.sides.c = this.sideOf(this.angles.b, this.sides.b, this.angles.c);
        }

        return this;
    }

    solveHB() {
        if(this.sides.a && this.heights.a){
            this.area = this.sides.a.mul(this.heights.a).div(2);
        }else if(this.sides.b && this.heights.b){
            this.area = this.sides.b.mul(this.heights.b).div(2);
        }if(this.sides.c && this.heights.c){
            this.area = this.sides.c.mul(this.heights.c).div(2);
        }
        return this;
    }

    /**
     * Obtains the type of triangle.
     * @return {String} the triangle type.
     */
    getType() {
        if(this.type){
            return this.type;
        }

        const angles = this.getAngles();
        if(angles.find((a) => a.gt(90))){
            this.type = 'obtuse-';
        }else if(angles.find((a) => a.eq(90))){
            this.type = 'right-';
        }else{
            this.type = 'acute-';
        }

        const eqS = this.numberOfEqualSides();
        const eqA = this.numberOfEqualAngles();

        this.type  += eqA === 3 ? 'equilateral' // Separate as to make this work with AAA triangles.
                    : eqS === 3 ? 'equilateral'
                    : eqS === 2 ? 'isosceles'
                    : 'scalene';

        return this.type;
    }

    /**
     * Calculates the height the triangle for the given side.
     * @param  {String} id - id of the side we want to obtain its height.
     * @return {BigDecimal} - height of the side.
     */
    heightOf(id){
        const rad = Angle.getUnit('Radian');
        switch (id) {
            case 'a': return Angle.of(this.angles.c, 'deg').to(rad).sin().mul(this.sides.b);
            case 'b': return Angle.of(this.angles.a, 'deg').to(rad).sin().mul(this.sides.b);
            case 'c': return Angle.of(this.angles.b, 'deg').to(rad).sin().mul(this.sides.a);
        }
    }

    /**
     * Solves the triangle with the sides & angles we have.
     * @return {Triangle} the solved Triangle.
     */
    solve() {
        if(this.solved){
            return this;
        }

        if(this.isAAA()){
            this.getType();
            // Since we cannot know anything else of this triangles, we return.
            return this.solveAAA();
        }else if(this.isHB()){
            // Since we cannot know anything else of this triangles, we return.
            return this.solveHB();
        }else if(this.isSSS()){
            this.solveSSS();
        }else if(this.isAAS() || this.isASA()){
            this.solveAAS();
        }else if(this.isSAS()){
            this.solveSAS();
        }else if(this.isSSA()){
            this.solveSSA();
        }else{
            throw new Error(`Invalid triangle with values: ${JSON.stringify(this)}`);
        }

        // Now that the triangle is solved and we know all its angles and sides, we can calculate other stuff.
        this.perimeter = _.values(this.sides).reduce((a,b) => a.plus(b));

        // Calculate the heights, which in the case of a Triangle, there are many.
        ['a', 'b', 'c'].forEach((k) => this.heights[k] = this.heightOf(k));

        // Now we use Heron's Formula to calculate the area.
        this.area = this.heights.a.mul(this.sides.a).div(2);

        this.getType();

        this.solved = true;
        return this;
    }
}
