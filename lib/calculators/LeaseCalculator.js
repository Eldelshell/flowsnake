import Decimal from 'decimal.js';
import Calculator from './Calculator';
import Time from '../units/Time';

/**
 * Calculates the monthly, total and payments for a fixed rate loan.
 */
export default class LeaseCalculator extends Calculator {

    static name() {
        return 'lease';
    }

    constructor() {
        super(10);
    }

    /**
     * Calculates the lease payments following this formula from:
     * https://www.reddit.com/r/personalfinance/comments/7tkzpw/in_order_to_get_the_lowest_lease_price_possible/
     * Payment = ((Capitalized Cost - Residual Value) / Months) + ((Capitalized Cost + Residual Value) * Money Factor)
     * @param  {Number} cost - Capitalized Cost: financed amount. i.e. 40500
     * @param  {Number} msrp - MSRP: Manufacturer Sugested Retail Price. Can be the same as cost.
     * @param  {Number} depreciation - the percent of depreciation at end of the lease. i.e. 65%
     * @param  {Unit} time - Lease duration in months.
     * @param  {Number} charge - the charge rate, new lending car rate or rent charge.
     * @return {Decimal} the results object.
     */
    calculate({cost, msrp, depreciation, time, charge}){
        this.validate(time, 'Time');

        // const rate = charge / 2400;
        // const months = time.to(Time.getUnit('month'));
        // const residual = msrp * (depreciation / 100);
        // return this.evaluate(`((${cost} - ${residual}) / ${months}) + ((${cost} + ${residual}) * ${rate})`);

        const rate = Decimal.div(charge, 2400);
        const months = time.to(Time.getUnit('month'));
        const residual = Decimal.mul(msrp, (depreciation / 100));
        const cr = Decimal.sub(cost, residual).div(months);
        const dep = Decimal.add(cost, residual).mul(rate);
        // return this.evaluate(`((${cost} - ${residual}) / ${months}) + ((${cost} + ${residual}) * ${rate})`);
        return cr.add(dep);
    }

}
