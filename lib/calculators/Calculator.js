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

        if(!value.type){
            throw new Error('Invalid argument. A Unit is expected.');
        }

        if(value.type !== expected){
            throw new Error(`Invalid unit type ${expected} for value ${value.type}`);
        }
    }

}
