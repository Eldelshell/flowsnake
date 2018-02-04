import Decimal from 'decimal.js';
import Calculator from '../Calculator';

/**
 * Calculates proportions
 */
export default class Proportion extends Calculator {

    static name() {
        return 'proportion';
    }

    constructor() {
        super(10);
    }

    /**
     * Calculates proportions
     * @param  {Number} a - an Integer
     * @param  {Number} b - an Integer
     * @param  {Number} c - an Integer
     * @param  {Boolean} inverse - inversely proportional
     * @return {Decimal} the results.
     */
    calculate({a, b, c, inverse}){
        if(!a || !b || !c || a < 0 || b < 0 || c < 0){
            throw new Error('Invalid arguments');
        }

        // (ab) / c : (cb) / a
        return inverse ? Decimal.mul(a, b).div(c) : Decimal.mul(c, b).div(a);
    }

}
