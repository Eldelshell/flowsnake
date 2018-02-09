import Decimal from 'decimal.js';
import Unit from '../units/Unit';

/**
 * Base Calculator object.
 */
export default class Calculator {

    /**
     * Validates that the value is of the given type
     * @param  {Unit} value - a unit
     * @param  {String} expected - the expected type.
     * @throws {Error} if the value is not valid.
     * @returns {undefined}
     */
    validate(value, expected){
        if(!value){
            return;
        }

        if(!(value instanceof Unit)){
            throw new Error('Invalid argument. A Unit is expected.');
        }

        if(value.type !== expected){
            throw new Error(`Invalid unit type ${expected} for value ${value.type}`);
        }
    }

    /**
     * Test whether a value is prime: has no divisors other than itself and one.
     * @param  {Number|Decimal} n - the number to check.
     * @return {Boolean} true if n is prime.
     */
    isPrime(n) {
        if(n && n.isDecimal && n.isDecimal()){
            n = n.toDP(0).toNumber();
        }

        if (n < 2){
            return false;
        }

        if (n === 2){
            return true;
        }

        if (n % 2 === 0){
            return false;
        }

        for (let i = 3; i * i <= n; i += 2){
            if (n % i === 0){
                return false;
            }
        }

        return true;
    }

    /**
     * Factorial of a number
     * @param  {Decimal} n - the number
     * @return {Decimal} the factorial of n
     */
    factorial(n) {
        if (n.isZero()) {
            return new Decimal(1); // 0! => 1
        }

        let res = n;
        let value = n.toNumber() - 1;
        while (value > 1) {
            res = res.times(value);
            value--;
        }

        return res;
    }

}
