import mathjs from 'mathjs';



/**
 * Base Calculator object.
 */
export default class Calculator {

    constructor(precision){
        this.math = mathjs.create({number: 'BigNumber', precision: precision || 6});
    }

    /**
     * Uses math.js to evaluate the given expression.
     * @param  {String} exp - expression to evaluate.
     * @return {BigDecimal|String} the result if the expression is correct or the expression string if it fails.
     */
    evaluate(exp){
        try {
            return this.math.eval(exp);
        } catch (e) {
            // console.error(`Failed to evaluate ${exp}`, e);
            return exp;
        }
    }

}
