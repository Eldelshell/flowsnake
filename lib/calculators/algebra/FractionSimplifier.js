import Calculator from '../Calculator';
import GCDLCMCalculator from './GCDLCMCalculator';

/**
 * Simplifies a fraction
 */
export default class FractionSimplifier extends Calculator {

    static name() {
        return 'fraction-simplifier';
    }

    /**
    * @typedef {Object} FractionSimplifierResult
    * @property {Number} numerator - Greatest common divisor.
    * @property {Number} denominator - Least common multiple.
    */

    /**
     * Simplifies a fraction
     * @param  {Number} numerator - positive number bigger than 0
     * @param  {Number} denominator - positive number bigger than 0
     * @return {GCDLCMCalculatorResult} the results.
     */
    calculate({numerator, denominator}){
        if(!numerator || !denominator || numerator < 0 || denominator < 0){
            throw new Error('Invalid arguments');
        }

        const gcdCalc = new GCDLCMCalculator();
        const gcd = gcdCalc.gcd(numerator, denominator);

        return {
            numerator: numerator / gcd,
            denominator: denominator / gcd
        };
    }
}
