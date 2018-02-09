import Decimal from 'decimal.js';
import Units from './Units';
import Convert from './Convert';
import Calculator from './Calculator';
import Geometry from './Geometry';

Decimal.set({precision: 10});

const Flowsnake = {
    unit: (value) => new Units(value),
    convert: (value) => new Convert(value),
    calculate: (calculator) => new Calculator(calculator),
    geometry: (value) => new Geometry(value)
};

module.exports = Flowsnake;
