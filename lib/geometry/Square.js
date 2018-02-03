import Rectangle from './Rectangle';

/**
 * A Square object
 * @type {Square}
 * @class
 * @property {Object<BigDecimal>} sides - the sides of the Square.
 * @property {Object<BigDecimal>} angles - the angles of the Square.
 * @property {BigDecimal} perimiter - the perimeter of the Square.
 * @property {BigDecimal} area - the area of the Square.
 * @property {BigDecimal} diagonal - the diagonal of the Square.
 */
export default class Square extends Rectangle {

    /**
     * The Square constructor.
     * @constructor
     * @param {Number} side - the side length.
     */
    constructor({side}){
        if(!side || side <= 0){
            throw new Error('Invalid side value');
        }
        super({width: side, height: side});
    }

    /**
     * For the given values, returns a solved Square
     * @param  {Number} side - the length of a side.
     * @return {Square} - the solved Square
     */
    static of(side) {
        const i = new Square({side: side});
        return i.solve();
    }

}
