import Calculator from './Calculator';
import Time from '../units/Time';

/**
 * Calculates the monthly, total and payments for a fixed rate loan.
 */
export default class LoanCalculator extends Calculator {

    static name() {
        return 'loan';
    }

    constructor() {
        super(10);
    }

    /**
    * @typedef {Object} LoanCalculatorResult
    * @property {BigDecimal} month - amount to pay monthly.
    * @property {BigDecimal} total - the total to pay for the loan.
    * @property {BigDecimal} interests - the total interests paid for the loan.
    * @property {Number} payments - number of monthly payments in total.
    * @property {Unit<Energy>} consumption - the total kWh consumed.
    */

    /**
     * Calculates the monthly, total and payments for a fixed rate loan.
     * @param  {Number} amount - loan amount
     * @param  {Number} interest - interest rate
     * @param  {Unit} time - time frame to use
     * @return {LoanCalculatorResult} the results object.
     */
    calculate({amount, time, interest}){
        this.validate(time, 'Time');

        const rate = interest / 1200;
        const months = time.to(Time.getUnit('month'));
        const mp = this.evaluate(`${amount} * ${rate} / (1 - ((1/(1 + ${rate})^${months})))`);
        return {
            month: mp.toDP(2),
            total: mp.times(months).toDP(2),
            interests: mp.times(months).minus(amount).toDP(2),
            payments: months.toNumber ? months.toNumber() : months
        };
    }

}
