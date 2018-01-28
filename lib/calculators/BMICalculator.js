import Calculator from './Calculator';
import Unit from '../units/Unit';
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
        if(!height || !weight){
            throw new Error('Invalid values. Provide a height and weight');
        }

        if(!(height instanceof Unit) || !(weight instanceof Unit)){
            throw new Error('Invalid values. Provide a height and weight as Units');
        }

        const h = height.to(this.mt);
        const w = weight.to(this.kg);
        return this.evaluate(`${w} / (${h}^2)`);
    }

}
