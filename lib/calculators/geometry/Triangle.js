import Calculator from '../Calculator';
import Triangle from '../geometry/Triangle';

/**
 * Calculates a triangle properties
 */
export default class TriangleCalculator extends Calculator {

    static name() {
        return 'triangle';
    }

    /**
     * Calculates a triangle properties
     * @param  {Object} opts - the object with values.
     * @param  {Object} [opts.angles] - the object with the angles.
     * @param  {Object} [opts.sides] - the object with the sides.
     * @return {Triangle} the results.
     */
    calculate(opts){
        const t = new Triangle(opts);
        return t.solve();
    }

}
