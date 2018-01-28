import Calculator from '../Calculator';

/**
 * Calculates GCD and LCM
 */
export default class GCDLCMCalculator extends Calculator {

    static name() {
        return 'gcd-lcm';
    }

    constructor() {
        super(6);
    }

    /**
     * Calculates GCD
     * @param  {Integer} a - positive number bigger than 0
     * @param  {Integer} b - positive number bigger than 0
     * @return {Integer} the GCD
     */
    gcd(a, b) {
        return !b ? a : this.gcd(b, a % b);
    }

    /**
     * Calculates LCM
     * @param  {Integer} a - positive number bigger than 0
     * @param  {Integer} b - positive number bigger than 0
     * @return {Integer} the LCM
     */
    lcm(a, b) {
        return (a * b) / this.gcd(a, b);
    }

    /**
    * @typedef {Object} GCDLCMCalculatorResult
    * @property {Number} gcd - Greatest common divisor.
    * @property {Number} lcm - Least common multiple.
    */

    /**
     * Calculates GCD and LCM
     * @param  {Number} min - positive number bigger than 0
     * @param  {Number} max - positive number bigger than 0
     * @return {GCDLCMCalculatorResult} the results.
     */
    calculate({min, max}){
        if(!min || !max || min < 0 || max < 0){
            throw new Error('Invalid arguments');
        }

        return {
            gcd: this.gcd(min, max),
            lcm: this.lcm(min, max)
        }
    }
}
