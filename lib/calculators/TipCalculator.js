import Decimal from 'decimal.js';
import Calculator from './Calculator';

const tips = [5, 10, 12, 14, 15, 18, 20, 25, 30, 50];

/**
 * Calculates tips for single or shared bills.
 */
export default class TipCalculator extends Calculator {

    static name() {
        return 'tip';
    }

    constructor() {
        super(6);
    }

    /**
     * Calculates tips for single or shared bills.
     * @param  {Number} amount - bill amount
     * @param  {Number} percent - tip percent
     * @param  {Number} pax - number of persons
     * @return {Object} the results object.
     */
    calculate({amount, percent, pax}){
        if(!percent){
            return this._calculateTips(amount);
        }

        percent = Decimal.div(percent, 100);

        // const tip = this.evaluate(`${amount} * (${percent}/100)`);
        const tip = Decimal.mul(amount, percent);
        return {
            total: {
                tip: tip,
                amount: tip.plus(amount)
            },
            pax: {
                tip: tip.dividedBy(pax),
                amount: tip.plus(amount).dividedBy(pax)
            }
        };
    }

    _calculateTips(amount){
        return tips.map((t) => {
            const a = Decimal.mul(amount, Decimal.div(t, 100));
            return {
                tip: t,
                amount: a, //this.evaluate(`${amount} * (${t}/100)`),
                total: Decimal.add(amount, a) //this.evaluate(`${amount} + (${amount} * (${t}/100))`)
            };
        });
    }

}
