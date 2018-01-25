import DownloadTime from './calculators/DownloadTime';
import TipCalculator from './calculators/TipCalculator';

const calculators = [
    DownloadTime,
    TipCalculator
];

const Calculator = function(calculator) {
    const calc = calculators.find((c) => c.name() === calculator);
    if(!calc) {
        throw new Error(`Invalid calculator name ${calculator}`);
    }
    this.calculator = new calc();
};

Calculator.prototype.of = function(values) {
    if(!this.calculator){
        throw new Error('No calculator set. Can\'t calculate.');
    }

    // returns a Unit.
    return this.calculator.calculate(values);
};

export default Calculator;
