import Calculator from './Calculator';
import Unit from '../converters/Unit';
import Distance from '../converters/distance/Distance';
import Mass from '../converters/mass/Mass';

/**
 * Calculates Body Mass Index
 */
export default class BMICalculator extends Calculator {

    static name() {
        return 'BMI';
    }

    constructor() {
        super(4);
        this.mt = Distance.getUnitById('m');
        this.kg = Mass.getUnitById('kg');
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