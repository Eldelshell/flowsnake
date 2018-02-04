import Polygon from './Polygon';

/**
 * A Parallelogram object
 * @type {Parallelogram}
 * @class
 * @property {Object<BigDecimal>} sides - the sides of the Parallelogram.
 * @property {Object<BigDecimal>} angles - the angles of the Parallelogram.
 * @property {BigDecimal} height - the height of the Parallelogram.
 * @property {BigDecimal} perimeter - the perimeter of the Parallelogram.
 * @property {BigDecimal} area - the area of the Parallelogram.
 */
export default class Parallelogram extends Polygon {

    /**
     * The Parallelogram constructor.
     * @constructor
     * @param {Number} a - the a side length.
     * @param {Number} b - the b side length.
     * @param {Number} angle - an angle.
     */
    constructor({a, b, angle}){
        if(!a || a <= 0){
            throw new Error('Invalid side a value');
        }

        if(!b || b <= 0){
            throw new Error('Invalid side b value');
        }

        if(!angle || angle <= 0 || angle >= 180){
            throw new Error('Invalid angle value');
        }

        const sides = {
            a: a,
            b: b,
            c: b,
            d: a
        };

        const angles = {
            a: angle,
            b: angle - 180,
            d: angle - 180,
            c: angle
        };

        super({vertices: 4, sides: sides, angles: angles});
    }

    /**
     * For the given values, returns a solved Parallelogram
     * @param {Number} a - the a side length.
     * @param {Number} b - the b side length.
     * @param {Number} angle - an angle.
     * @return {Parallelogram} - the solved Parallelogram
     */
    static of(a, b, angle) {
        const i = new Parallelogram({a: a, b: b, angle: angle});
        return i.solve();
    }

    /**
     * Solves the Parallelogram
     * @return {Parallelogram} the solved Parallelogram.
     */
    solve() {
        if(this.solved){
            return this;
        }

        this.height = this.sideOf(90, this.sides.c, this.angles.c);
        this.perimeter = this.sides.a.plus(this.sides.b).mul(2);
        this.area = this.sides.a.times(this.height);

        this.solved = true;
        return this;
    }

}
