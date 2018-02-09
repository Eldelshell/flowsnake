import Decimal from 'decimal.js';
import Calculator from './Calculator';
import BMICalculator from './BMICalculator';

/**
 * Calculates Body Fat Percentage Index
 */
export default class BFPCalculator extends Calculator {

    static name() {
        return 'BFP';
    }

    /**
     * Calculates BPF
     * @param  {Unit} height - height
     * @param  {Unit} weight - weight
     * @param  {Number} age - age
     * @param  {String} sex - male or female
     * @return {Decimal} the BMI.
     */
    calculate({height, weight, age, sex}){
        const bmiCalc = new BMICalculator();
        const bmi = bmiCalc.calculate({height, weight});
        const s = sex === 'female' ? 0 : 1;
        // (1.20 * ${bmi}) + (0.23 * ${age}) - (10.8 * ${s}) - 5.4
        return Decimal.mul(1.20, bmi).plus(Decimal.mul(0.23, age)).minus(Decimal.mul(10.8, s)).minus(5.4);
    }

}
