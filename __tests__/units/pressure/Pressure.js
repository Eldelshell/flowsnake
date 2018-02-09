import _ from 'lodash';
import Pressure from '../../../lib/units/pressure/Pressure';
import TestCase from '../TestCase';

const tests = [{
    from: 'bar', to: 'psi', values: [{ a: 0, b: 0 }, { a: 55, b: 797.70724429 }]
},{
    from: 'psf', to: 'bar', values: [{ a: 0, b: 0 }, { a: 5643.45, b: 2.7 }]
},{
    from: 'mmHg', to: 'inHg', values: [{ a: 0, b: 0 }, { a: 378.54, b: 14.9 }]
},{
    from: 'inHg', to: 'atm', values: [{ a: 0, b: 0 }, { a: 1000, b: 33.42 }]
}];

TestCase.units(Pressure, tests);
