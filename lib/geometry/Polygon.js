/**
 * Abstract class from which all polygons (circle, triangle, square) inherit.
 * @type {Polygon}
 */
export default class Polygon {

    constructor(nsides){
        /**
         * Indicates number of sides of the polygon.
         * @type {Integer}
         */
        this.nsides = nsides;

        /**
         * The area of the polygon
         * @type {Number}
         */
        this.area = null;

        /**
         * The perimeter of the polygon
         * @type {Number}
         */
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
        res = 37 * res + this.nsides;
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
