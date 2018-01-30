import _ from 'lodash';
import Calculator from './Calculator';

// A cache of prime numbers so we don't have to calculate all primes everytime.
const CACHE = new Set();

// Power characters
const POWERS = ['', '', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];

// To sort integers array
const sortFn = (a,b) => a > b ? 1 : a < b ? -1 : 0;

/**
 * Calculates the prime factors of a number.
 */
export default class PrimeFactorization extends Calculator {

    static name() {
        return 'prime-factors';
    }

    constructor() {
        super();
    }

    /**
     * Calculates the prime factors of a number.
     * @param  {Number|BigDecimal} value - the value to calculate
     * @return {String} the resulting prime factors.
     */
    calculate(value){
        if(!_.isFinite(value) || !this.math.isInteger(value) || value <= 0){
            return null;
        }

        if(this.math.isPrime(value)){
            return value.toString();
        }

        const primes = [];
        let i = 2;

        // Start checking with the primes CACHE.
        for (const prime of CACHE){
            // Set the i value for the while loop in case we have to continue down.
            i = prime;
            while(!this.math.isPrime(value)){
                const tmp = value / prime;
                if(!this.math.isInteger(tmp)){
                    break;
                }

                primes.push(i);
                value = tmp;
            }
        }

        while(!this.math.isPrime(value) && i < 10000){
            if(!this.math.isPrime(i)){
                i++;
                continue;
            }

            CACHE.add(i);

            const tmp = value / i;

            if(!this.math.isInteger(tmp)){
                i++;
                continue;
            }

            primes.push(i);
            value = tmp;
            i++;
        }

        // Add the last prime we got
        primes.push(value);

        const sorted = primes.sort(sortFn);
        const res = this.toPower(sorted);
        return res.join('×');
    }

    /**
     * Converts a list of numbers to their power
     * @param  {Array<Integer>} numbers - list of numbers
     * @return {Array<String>} the numbers with powers
     */
    toPower(numbers) {
        const powers = {};
        for(let i = 0; i < numbers.length; i++){
            const number = numbers[i];
            if(!powers[number]){
                powers[number] = 1;
            }else{
                powers[number] += 1;
            }
        }

        return Object.keys(powers).reduce((prev, number) => {
            const power = !_.isUndefined(POWERS[powers[number]]) ? POWERS[powers[number]] : `^${powers[number]}`;
            prev.push(`${number}${power}`);
            return prev;
        }, []);

    }

}
