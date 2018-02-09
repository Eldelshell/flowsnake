import Decimal from 'decimal.js';
import Calculator from '../Calculator';

/**
 * Calculates combinations and permutations
 */
export default class Combinations extends Calculator {

    static name() {
        return 'combinations';
    }

    /**
     * Calculates combinations and permutations
     * @param  {Number} n - combinations
     * @param  {Number} r - range
     * @param  {Boolean} order - combination or permutation
     * @param  {Boolean} repeat - n can repeat
     * @return {Decimal} the results.
     */
    calculate({n, r, order, repeat}){
        if(!n || !r || n < 0 || r < 0){
            throw new Error('Invalid arguments');
        }

        return order ? this._permutation(n, r, repeat) : this._combination(n, r, repeat);
    }

    _combination(n, r, repeat) {
        n = new Decimal(n);
        r = new Decimal(r);
        if(repeat){
            // (n + r - 1)! / r! (n-1)!
            const fn1 = this.factorial(n.plus(r).sub(1));
            const fn2 = this.factorial(r);
            const fn3 = this.factorial(n.sub(1));
            return fn1.div(Decimal.mul(fn2, fn3));

        }else{
            // n! / r! * (n-r)!
            const fn1 = this.factorial(n);
            const fn2 = this.factorial(r);
            const fn3 = this.factorial(Decimal.sub(n, r));
            return fn1.div(Decimal.mul(fn2, fn3));
        }
    }

    _permutation(n, r, repeat) {
        n = new Decimal(n);
        r = new Decimal(r);

        if(repeat){
            // n^r
            return n.pow(r);
        }else{
            // n! / (n-r)!
            const fn1 = this.factorial(n);
            const fn2 = this.factorial(Decimal.sub(n, r));
            return Decimal.div(fn1, fn2);
        }
    }
}
