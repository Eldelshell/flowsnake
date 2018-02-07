import DownloadTime from './calculators/DownloadTime';
import TipCalculator from './calculators/TipCalculator';
import PrimeFactorization from './calculators/PrimeFactorization';
import Divisors from './calculators/Divisors';
import TaxCalculator from './calculators/TaxCalculator';
import BMICalculator from './calculators/BMICalculator';
import BFPCalculator from './calculators/BFPCalculator';
import OhmsLaw from './calculators/OhmsLaw';
import ElectricityCost from './calculators/ElectricityCost';
import LoanCalculator from './calculators/LoanCalculator';
import LeaseCalculator from './calculators/LeaseCalculator';
import DisplayResolution from './calculators/DisplayResolution';
import GCDLCMCalculator from './calculators/algebra/GCDLCMCalculator';
import FractionSimplifier from './calculators/algebra/FractionSimplifier';
import Combinations from './calculators/algebra/Combinations';
import Proportion from './calculators/algebra/Proportion';
import Resistor from './calculators/electronics/Resistor';

const calculators = [
    DownloadTime,
    TipCalculator,
    PrimeFactorization,
    TaxCalculator,
    BMICalculator,
    BFPCalculator,
    OhmsLaw,
    ElectricityCost,
    LoanCalculator,
    GCDLCMCalculator,
    FractionSimplifier,
    Combinations,
    Proportion,
    LeaseCalculator,
    DisplayResolution,
    Divisors,
    Resistor
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
