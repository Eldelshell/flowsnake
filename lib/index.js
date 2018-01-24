import Convert from './Convert';
import Calculator from './Calculator';

const Flowsnake = {
    convert: (value) => new Convert(value),
    unit: (value) => new Convert(value),
    calculate: (calculator) => new Calculator(calculator)
};

module.exports = Flowsnake;
