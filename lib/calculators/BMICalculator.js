import Calculator from './Calculator';
import Distance from '../units/distance/Distance';
import Mass from '../units/mass/Mass';

/**
 * Calculates Body Mass Index
 */
export default class BMICalculator extends Calculator {

    static name() {
        return 'BMI';
    }

    constructor() {
        super(4);
        this.mt = Distance.getUnit('m');
        this.kg = Mass.getUnit('kg');
    }

    /**
     * Calculates BMI
     * @param  {Unit} height - height
     * @param  {Unit} weight - weight
     * @return {BigDecimal} the BMI.
     */
    calculate({height, weight}){
        this.validate(height, 'Distance');
        this.validate(weight, 'Mass');
        const h = height.to(this.mt);
        const w = weight.to(this.kg);
        return this.evaluate(`${w} / (${h}^2)`);
    }

}
