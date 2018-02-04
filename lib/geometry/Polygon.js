import _ from 'lodash';
import Decimal from 'decimal.js';
import Angle from '../units/Angle';

/**
 * Abstract class from which all polygons (circle, triangle, square) inherit.
 * @type {Polygon}
 * @class
 * @property {Integer} vertices - the number of vertices of the polygon.
 * @property {Object<BigDecimal>} sides - the sides of the polygon.
 * @property {Object<BigDecimal>} angles - the angles of the polygon.
 * @property {Object<BigDecimal>} heights - the heights of the polygon.
 * @property {Object<BigDecimal>} diagonals - the diagonals of the polygon.
 * @property {BigDecimal} perimeter - the perimeter of the polygon.
 * @property {BigDecimal} area - the area of the polygon.
 */
export default class Polygon {

    /**
     * Constructor
     * @constructor
     * @param {Integer} vertices - the number of vertices of the polygon.
     * @param {Object<BigDecimal>} [sides] - the sides of the polygon.
     * @param {Object<BigDecimal>} [angles] - the angles of the polygon.
     * @param {Object<BigDecimal>} [diagonals] - the diagonals of the polygon.
     * @param {BigDecimal} [height] - the height of the polygon.
     * @param {BigDecimal} [perimeter] - the perimeter of the polygon.
     * @param {BigDecimal} [area] - the area of the polygon.
     */
    constructor({vertices, sides, angles, height, diagonals, perimeter, area}){
        /**
         * Indicates this polygon has been already solved
         * @type {Boolean}
         */
        this.solved = false;

        if(!vertices || vertices < 3){
            throw new Error('Invalid arguments. A number of vertices greater than 3 is required.');
        }

        this.vertices = vertices;

        this.sides = this._mapDecimals(sides);
        this.angles = this._mapDecimals(angles);
        this.diagonals = this._mapDecimals(diagonals);

        this.height = _.isFinite(height) ? new Decimal(height) : null;
        this.area = _.isFinite(area) ? new Decimal(area) : null;
        this.perimeter = _.isFinite(perimeter) ? new Decimal(perimeter) : null;
    }

    _mapDecimals(arg) {
        const res = {};
        if(_.isObject(arg)){
            Object.keys(arg).forEach((k) => {
                res[k] = new Decimal(arg[k]);
            });
        }
        return res;
    }

    /**
     * Generates a hash code for this Polygon.
     * @return {Number} what we expect to be a unique hash code.
     */
    hashCode() {
        const red = (a,b) => a.add(b);
        let res = 1;
        res = 37 * res + this.vertices;
        res = 37 * res + this.area ? this.area.toNumber() : 0;
        res = 37 * res + this.perimeter ? this.perimeter.toNumber() : 0;
        res = 37 * res + _.values(this.angles).reduce(red).toNumber();
        res = 37 * res + _.values(this.sides).reduce(red).toNumber();
        return res;
    }

    /**
     * Checks if two Polygon objects have the same values.
     * @param  {Polygon} other - object to check against.
     * @return {Boolean}  true if both objects are the same.
     */
    equals(other){
        if(!(other instanceof Polygon)){
            // Can't compare if not a Polygon
            return false;
        }

        if(!this.solved || !other.solved){
            // Can't compare if the Polygon hasn't been solved.
            return false;
        }

        return this.hashCode() === other.hashCode();
    }

    /**
     * Obtain an array with all the sides.
     * @return {Array<BigDecimal>} the sides. Order is not to be guaranteed.
     */
    getSides() {
        return Object.values(this.sides);
    }

    /**
     * Obtain an array with all the angles.
     * @return {Array<BigDecimal>} the angles. Order is not to be guaranteed.
     */
    getAngles() {
        return Object.values(this.angles);
    }

    /**
     * Uses the Law of Sines to calculate the length of a side.
     * @param  {BigDecimal} knownAngle - angle in degress of a side we know its length
     * @param  {BigDecimal} knownSide  - length of a side we know its angle
     * @param  {BigDecimal} unknownAngle - angle in degress of a side we don't know its length
     * @return {BigDecimal} - length of the side.
     */
    sideOf(knownAngle, knownSide, unknownAngle){
        const rad = Angle.getUnit('Radian');
        const sinOfunknownAngle = Angle.of(unknownAngle, 'deg').to(rad).sin();
        const sinOfknownAngle = Angle.of(knownAngle, 'deg').to(rad).sin();
        return knownSide.mul(sinOfunknownAngle).div(sinOfknownAngle);
    }

    /**
     * Uses the Law of Sines to calculate an angle.
     * @param  {BigDecimal} knownAngle - angle in degress of a side we know its length
     * @param  {BigDecimal} knownSide  - length of a side we know its angle
     * @param  {BigDecimal} unknownSide - length of a side we don't know its angle
     * @return {BigDecimal} the angle in degress.
     */
    angleOf(knownAngle, knownSide, unknownSide){
        const rad = Angle.getUnit('Radian');
        const deg = Angle.getUnit('Degree');
        const sinOf = Angle.of(knownAngle, 'deg').to(rad).sin();
        const t = unknownSide.mul(sinOf).div(knownSide);
        return Angle.of(t.asin(), 'rad').to(deg);
    }

    /**
     * Calculates the number of equal sides
     * @return {Integer} number of equal sides
     */
    numberOfEqualSides() {
        const sides = this.getSides();

        // If we don't have all the sides, we have none.
        if(sides.length !== this.vertices){
            return 0;
        }

        let eq = 1;
        sides.reduce((c, p) => {
            if(p.eq(c)){
                eq++;
            }
            return c;
        });
        return eq === 1 ? 0 : eq;
    }

    /**
     * Calculates the number of equal angles
     * @return {Integer} number of equal angles
     */
    numberOfEqualAngles() {
        const angles = this.getAngles();

        // If we don't have all the angles, we have none.
        if(angles.length !== this.vertices){
            return 0;
        }

        let eq = 1;
        angles.reduce((c, p) => {
            if(p.eq(c)){
                eq++;
            }
            return c;
        });
        return eq === 1 ? 0 : eq;
    }

}
