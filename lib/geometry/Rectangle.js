import Polygon from './Polygon';

/**
 * A Rectangle object
 * @type {Rectangle}
 * @class
 * @property {Object<BigDecimal>} sides - the sides of the rectangle.
 * @property {Object<BigDecimal>} angles - the angles of the rectangle.
 * @property {BigDecimal} perimiter - the perimeter of the rectangle.
 * @property {BigDecimal} area - the area of the rectangle.
 * @property {BigDecimal} diagonal - the diagonal of the rectangle.
 */
export default class Rectangle extends Polygon {

    /**
     * The Rectangle constructor.
     * @constructor
     * @param {Number} width - the width.
     * @param {Number} height - the height.
     */
    constructor({width, height}){
        if(!width || width <= 0){
            throw new Error('Invalid width value');
        }

        if(!height || height <= 0){
            throw new Error('Invalid height value');
        }

        const sides = {
            a: width,
            b: height,
            c: height,
            d: width
        };

        const angles = {
            a: 90,
            b: 90,
            c: 90,
            d: 90
        };

        super(4, sides, angles);
    }

    /**
     * For the given values, returns a solved Rectangle
     * @param {Number} width - the width.
     * @param {Number} height - the height.
     * @return {Rectangle} - the solved Rectangle
     */
    static of(width, height) {
        const i = new Rectangle({width: width, height: height});
        return i.solve();
    }

    /**
     * Solves the Rectangle
     * @return {Rectangle} the solved Rectangle.
     */
    solve() {
        if(this.solved){
            return this;
        }

        this.perimeter = this.sides.a.plus(this.sides.b).mul(2);
        this.area = this.sides.a.times(this.sides.b);
        this.diagonal = this.sides.a.pow(2).plus(this.sides.b.pow(2)).sqrt(2);

        this.solved = true;
        return this;
    }

}
