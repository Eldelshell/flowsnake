import _ from 'lodash';
import Decimal from 'decimal.js';

/**
 * Abstract class from which all polygons (circle, triangle, square) inherit.
 * @type {Polygon}
 * @class
 * @property {Integer} vertices - the number of vertices of the polygon.
 * @property {Object<BigDecimal>} sides - the sides of the polygon.
 * @property {Object<BigDecimal>} angles - the angles of the polygon.
 * @property {Object<BigDecimal>} heights - the heights of the polygon calculated based on sides/angles
 * @property {BigDecimal} perimiter - the perimeter of the polygon.
 * @property {BigDecimal} area - the area of the polygon.
 */
export default class Polygon {

    /**
     * Constructor
     * @constructor
     * @param {Integer} vertices - the number of vertices of the polygon.
     * @param {Object<BigDecimal>} [sides] - the sides of the polygon.
     * @param {Object<BigDecimal>} [angles] - the angles of the polygon.
     */
    constructor(vertices, sides, angles){
        this.vertices = vertices;

        this.sides = {};
        if(_.isObject(sides)){
            Object.keys(sides).forEach((k) => {
                this.sides[k] = new Decimal(sides[k]);
            });
        }

        this.angles = {};
        if(_.isObject(angles)){
            Object.keys(angles).forEach((k) => {
                this.angles[k] = new Decimal(angles[k]);
            });
        }

        this.area = null;

        this.perimeter = null;

        /**
         * Indicates this polygon has been already solved
         * @type {Boolean}
         */
        this.solved = false;
    }

    /**
     * Generates a hash code for this Polygon.
     * @return {Number} what we expect to be a unique hash code.
     */
    hashCode() {
        let res = 1;
        res = 37 * res + this.vertices;
        res = 37 * res + this.area ? this.area.toNumber() : 0;
        res = 37 * res + this.perimeter ? this.perimeter.toNumber() : 0;
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

}
