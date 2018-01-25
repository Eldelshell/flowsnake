import Units from './Units';
import Convert from './Convert';
import Calculator from './Calculator';

const Flowsnake = {
    unit: (value) => new Units(value),
    convert: (value) => new Convert(value),
    calculate: (calculator) => new Calculator(calculator)
};

module.exports = Flowsnake;
