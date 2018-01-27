import _ from 'lodash';
import Decimal from 'decimal.js';
import Pressure from '../../../lib/converters/pressure/Pressure';
import TestCase from '../TestCase';

const tests = [{
    from: 'ksi', to: 'psi', values: [{ a: 0, b: 0 }, { a: 1, b: 1000 }]
},{
    from: 'psi', to: 'psf', values: [{ a: 0, b: 0 }, { a: 1, b: 144 }]
},{
    from: 'psi', to: 'inHg', values: [{ a: 0, b: 0 }, { a: 1000, b: 2036.03 }]
}];

TestCase.units(Pressure, tests);
