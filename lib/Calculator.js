import DownloadTime from './calculators/DownloadTime';

const Calculator = function(calculator) {
    if(calculator === DownloadTime.name()) {
        this.calculator = new DownloadTime();
    }else{
        throw new Error(`Invalid calculator name ${calculator}`);
    }

};

Calculator.prototype.of = function(values) {
    if(!this.calculator){
        throw new Error('No calculator set. Can\'t calculate.');
    }

    // returns a Unit.
    return this.calculator.calculate(values);
};

export default Calculator;
