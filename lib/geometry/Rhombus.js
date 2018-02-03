import Decimal from 'decimal.js';
import Polygon from './Polygon';
import Angle from '../units/Angle';

/**
 * A Rhombus object
 * @type {Rhombus}
 * @class
 * @property {Object<BigDecimal>} sides - the sides of the Rhombus.
 * @property {Object<BigDecimal>} angles - the angles of the Rhombus.
 * @property {Object<BigDecimal>} diagonals - the angles of the Rhombus.
 * @property {BigDecimal} height - the height of the Rhombus.
 * @property {BigDecimal} perimiter - the perimeter of the Rhombus.
 * @property {BigDecimal} area - the area of the Rhombus.
 */
export default class Rhombus extends Polygon {

    /**
     * The Rhombus constructor.
     * @constructor
     * @param {Number} side - the sides length.
     * @param {Number} angle - an angle.
     */
    constructor({side, angle}){
        if(!side || side <= 0){
            throw new Error('Invalid side a value');
        }

        if(!angle || angle <= 0 || angle >= 180){
            throw new Error('Invalid angle value');
        }

        const sides = {
            a: side,
            b: side,
            c: side,
            d: side
        };

        const angles = {
            a: angle,
            b: angle - 180,
            d: angle - 180,
            c: angle
        };

        super(4, sides, angles);
    }

    /**
     * For the given values, returns a solved Rhombus
     * @param {Number} side - the a sides length.
     * @param {Number} angle - an angle.
     * @return {Rhombus} - the solved Rhombus
     */
    static of(side, angle) {
        const i = new Rhombus({side: side, angle: angle});
        return i.solve();
    }

    /**
     * Solves the Rhombus
     * @return {Rhombus} the solved Rhombus.
     */
    solve() {
        if(this.solved){
            return this;
        }

        this.height = this.sideOf(90, this.sides.c, this.angles.c);
        this.perimeter = this.sides.a.plus(this.sides.b).mul(2);
        this.area = this.sides.a.times(this.height);

        this.diagonals = {};
        const rad = Angle.getUnit('Radian');
        const cosA = Angle.of(this.angles.a, 'deg').to(rad).cos();
        this.diagonals.a = Decimal.sub(2, cosA.mul(2)).sqrt().mul(this.sides.a);
        this.diagonals.b = Decimal.add(2, cosA.mul(2)).sqrt().mul(this.sides.a);

        this.solved = true;
        return this;
    }

}
