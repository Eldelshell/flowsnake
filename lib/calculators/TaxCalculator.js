import Calculator from './Calculator';

/**
 * Calculates TAX/VAT of a product
 */
export default class TaxCalculator extends Calculator {

    static name() {
        return 'tax';
    }

    constructor() {
        super(6);
    }

    /**
     * Calculates TAX/VAT of a product
     * @param  {Number} amount - bill amount
     * @param  {Number} percent - tip percent
     * @param  {String} [method] - add or extract vat from amount. Defaults to add.
     * @return {Object} the results object.
     */
    calculate({amount, percent, method}){
        let total = 0;
        let tax = 0;
        if(method === 'extract'){
            total = this.evaluate(`${amount} / ((${percent}/100) + 1)`);
            tax = this.evaluate(`${total} * (${percent}/100)`);
        }else{
            tax = this.evaluate(`${amount} * (${percent}/100)`);
            total = this.evaluate(`${amount} + ${tax}`);
        }

        return {
            total: total,
            tax: tax
        };
    }

}