import Calculator from './Calculator';
import BMICalculator from './BMICalculator';

/**
 * Calculates Body Fat Percentage Index
 */
export default class BFPCalculator extends Calculator {

    static name() {
        return 'BFP';
    }

    constructor() {
        super(4);
    }

    /**
     * Calculates BPF
     * @param  {Unit} height - height
     * @param  {Unit} weight - weight
     * @param  {Number} age - age
     * @param  {String} sex - male or female
     * @return {BigDecimal} the BMI.
     */
    calculate({height, weight, age, sex}){
        const bmiCalc = new BMICalculator();
        const bmi = bmiCalc.calculate({height, weight});
        const s = sex === 'female' ? 0 : 1;
        return this.evaluate(`(1.20 * ${bmi}) + (0.23 * ${age}) - (10.8 * ${s}) - 5.4`);
    }

}
