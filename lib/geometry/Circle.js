import _ from 'lodash';
import Decimal from 'decimal.js';
import Angle from '../units/Angle';

const rad = Angle.of(0, 'rad');
const PI = Decimal.acos(-1);

/**
 * Describes a Circle class
 * @type {Circle}
 * @class
 * @property {Decimal} radius - the radius of the circle.
 * @property {Decimal} diameter - the diameter of the circle.
 * @property {Decimal} circumference - the circumference of the circle.
 * @property {Decimal} area - the area of the circle.
 */
export default class Circle {

    /**
     * Constructor
     * @constructor
     * @param {Number} [radius] - the radius of the circle.
     * @param {Number} [diameter] - the diameter of the circle.
     * @param {Number} [circumference] - the circumference of the circle.
     * @param {Number} [area] - the area of the circle.
     */
    constructor({radius, diameter, circumference, area}){
        /**
         * Indicates this circle has been already solved
         * @type {Boolean}
         */
        this.solved = false;

        this.radius = _.isFinite(radius) ? new Decimal(radius) : null;
        this.diameter = _.isFinite(diameter) ? new Decimal(diameter) : null;
        this.area = _.isFinite(area) ? new Decimal(area) : null;
        this.circumference = _.isFinite(circumference) ? new Decimal(circumference) : null;
    }

    /**
     * For the given values, returns a solved Circle.
     * @param {Object} values - the values of the circle.
     * @param {Number} [values.radius] - the radius of the circle.
     * @param {Number} [values.diameter] - the diameter of the circle.
     * @param {Number} [values.circumference] - the circumference of the circle.
     * @param {Number} [values.area] - the area of the circle.
     * @return {Circle} - the solved Circle
     */
    static of(values) {
        const i = new Circle(values);
        return i.solve();
    }

    /**
     * Sector of a circle
     * @type {Sector}
     * @property {Decimal} area - the diameter of the sector.
     * @property {Decimal} perimeter - the perimeter of the sector.
     * @property {Decimal} arc - the arc length of the sector.
     */

    /**
     * The area, perimeter and arc length of a sector of the given angle on the current circle
     * @param  {Angle|Number} angle - the angle. If a number, we asume it's in degrees.
     * @return {Sector} a sector
     */
    sector(angle) {
        if(!this.solved){
            throw new Error('Can\'t calculate the arc length if the circle is not solved.');
        }

        angle = this.toRad(angle);

        const arc = angle.mul(this.radius);

        return {
            area: angle.div(2).mul(this.radius.pow(2)),
            perimeter: this.radius.mul(2).add(arc),
            arc: arc
        };
    }

    /**
     * Segment of a circle.
     * @type {Segment}
     * @property {Decimal} chord - the diameter of the segment.
     * @property {Decimal} height - the diameter of the segment.
     * @property {Decimal} area - the diameter of the segment.
     * @property {Decimal} perimeter - the perimeter of the segment.
     * @property {Decimal} arc - the arc length of the segment.
     */

    /**
     * Obtains the segment of a circle for the given angle or chord.
     * @param  {Angle|Number} [angle] - the angle. If a number, we asume it's in degrees.
     * @param  {Number|Decimal} [chord] - the chord.
     * @return {Segment} the segment of the current circle.
     */
    segment({angle, chord}){
        if(!this.solved){
            throw new Error('Can\'t calculate the arc length if the circle is not solved.');
        }

        if(angle){
            angle = this.toRad(angle);
            chord = this.radius.mul(2).mul(angle.div(2).sin());
        }else if(chord){
            // 2*(asin(L/2r)) = angle
            chord = new Decimal(chord);
            angle = chord.div(this.radius.mul(2)).asin().mul(180).div(PI).mul(2).mul(PI).div(180);
        }else{
            throw new Error('Invalid values. An angle or the chord are required.');
        }

        const height = Decimal.sub(1, angle.div(2).cos()).mul(this.radius);

        return {
            chord: chord,
            height: height,
            arc: angle.mul(this.radius),
            area: angle.sub(angle.sin()).div(2).mul(this.radius.pow(2)),
            perimeter: angle.mul(this.radius).add(chord)
        };
    }

    /**
     * Converts an angle to its radian representation
     * @param  {Angle|Number|Decimal} angle - the angle. If a number, we asume it's in degrees.
     * @return {Decimal} the angle in radians.
     */
    toRad(angle) {
        if(_.isFinite(angle) || Decimal.isDecimal(angle)){
            return Angle.of(angle, 'deg').to(rad);
        }else if(angle.value){
            return angle.to(rad);
        }else{
            throw new Error('Invalid angle provided');
        }
    }

    /**
     * Generates a hash code for this Circle.
     * @return {Number} what we expect to be a unique hash code.
     */
    hashCode() {
        let res = 1;
        res = 37 * res + this.radius ? this.radius.toNumber() : 0;
        return res;
    }

    /**
     * Checks if two Circle objects have the same values.
     * @param  {Circle} other - object to check against.
     * @return {Boolean}  true if both objects are the same.
     */
    equals(other){
        if(!(other instanceof Circle)){
            // Can't compare if not a Circle
            return false;
        }

        if(!this.solved || !other.solved){
            // Can't compare if the Circle hasn't been solved.
            return false;
        }

        return this.hashCode() === other.hashCode();
    }

    /**
     * Solves a circle.
     * To solve a circle we only need at least one of the values.
     * The importance of the values is: radius, diameter, area, circumference.
     * So, for example, if you provide a diameter and a circumference, the circle will be solved with the diameter.
     * @return {Circle} the solved circle.
     */
    solve() {
        if(this.solved){
            return this;
        }

        if(this.radius){
            this.diameter = this.radius.mul(2);
            this.area = this.radius.pow(2).mul(PI);
            this.circumference = this.diameter.mul(PI);
        }else if(this.diameter){
            this.radius = this.diameter.div(2);
            this.area = this.radius.pow(2).mul(PI);
            this.circumference = this.diameter.mul(PI);
        }else if(this.area){
            this.radius = this.area.div(PI).sqrt();
            this.diameter = this.radius.mul(2);
            this.circumference = this.diameter.mul(PI);
        }else if(this.circumference){
            this.radius = this.circumference.div(PI).div(2);
            this.diameter = this.radius.mul(2);
            this.area = this.radius.pow(2).mul(PI);
        }else{
            throw new Error('Can\'t solve a circle wihout any values');
        }

        this.solved = true;
        return this;
    }

}
