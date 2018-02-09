import _ from 'lodash';
import Calculator from './Calculator';

/**
 * Calculates the divisors of a number.
 */
export default class Divisors extends Calculator {

    static name() {
        return 'divisors';
    }

    /**
     * Calculates the divisors of a number.
     * @param  {Number|Decimal} value - the value to calculate
     * @return {Array<Integer>} the resulting divisors.
     */
    calculate(value){
        if(!_.isFinite(value) || !_.isInteger(value) || value <= 0){
            return null;
        }

        if(this.isPrime(value)){
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
