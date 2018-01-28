import Calculator from '../Calculator';

/**
 * Calculates combinations and permutations
 */
export default class Combinations extends Calculator {

    static name() {
        return 'combinations';
    }

    constructor() {
        super(10);
    }

    /**
     * Calculates combinations and permutations
     * @param  {Number} n - combinations
     * @param  {Number} r - range
     * @param  {Boolean} order - combination or permutation
     * @param  {Boolean} repeat - n can repeat
     * @return {BigDecimal} the results.
     */
    calculate({n, r, order, repeat}){
        if(!n || !r || n < 0 || r < 0){
            throw new Error('Invalid arguments');
        }

        return order ? this._permutation(n, r, repeat) : this._combination(n, r, repeat);
    }

    _combination(n, r, repeat) {
        if(repeat){
            // (n + r - 1)! / r! (n-1)!
            return this.evaluate(`(${n} + ${r} - 1)! / (${r}! * (${n}-1)!)`);
        }else{
            // n! / r! * (n-r)!
            return this.evaluate(`${n}! / (${r}! * (${n}-${r})!)`);
        }
    }

    _permutation(n, r, repeat) {
        if(repeat){
            // n^r
            return this.evaluate(`${n}^${r}`);
        }else{
            // n! / (n-r)!
            return this.evaluate(`${n}! / (${n}-${r})!`);
        }
    }
}
