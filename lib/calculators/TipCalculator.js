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

        const tip = this.evaluate(`${amount} * (${percent}/100)`);
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
            return {
                tip: t,
                amount: this.evaluate(`${amount} * (${t}/100)`),
                total: this.evaluate(`${amount} + (${amount} * (${t}/100))`)
            };
        });
    }

}
