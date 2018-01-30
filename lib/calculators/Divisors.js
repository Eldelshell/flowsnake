import _ from 'lodash';
import Calculator from './Calculator';

/**
 * Calculates the divisors of a number.
 */
export default class Divisors extends Calculator {

    static name() {
        return 'divisors';
    }

    constructor() {
        super();
    }

    /**
     * Calculates the divisors of a number.
     * @param  {Number|BigDecimal} value - the value to calculate
     * @return {Array<Integer>} the resulting divisors.
     */
    calculate(value){
        if(!_.isFinite(value) || !this.math.isInteger(value) || value <= 0){
            return null;
        }

        if(this.math.isPrime(value)){
            return [1, value];
        }

        const divisors = [];

        for(let i = 1; i < value; i++) {
            if((value % i) !== 0){
                continue;
            }
            divisors.push(i);
        }
        divisors.push(value);
        return divisors;
    }
}
