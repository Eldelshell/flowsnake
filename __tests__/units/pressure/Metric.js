import _ from 'lodash';
import Pressure from '../../../lib/units/pressure/Pressure';
import TestCase from '../TestCase';

const tests = [{
    from: 'kPa', to: 'Pa', values: [{ a: 0, b: 0 }, { a: 1, b: 1000 }]
},{
    from: 'Pa', to: 'MPa', values: [{ a: 0, b: 0 }, { a: 1000, b: 0.001 }]
},{
    from: 'Pa', to: 'bar', values: [{ a: 0, b: 0 }, { a: 1000, b: 0.01 }]
},{
    from: 'Pa', to: 'torr', values: [{ a: 0, b: 0 }, { a: 10000, b: 75.01 }]
},{
    from: 'Pa', to: 'mmHg', values: [{ a: 0, b: 0 }, { a: 10000, b: 75.01 }]
},{
    from: 'Pa', to: 'kg/m2', values: [{ a: 0, b: 0 }, { a: 1000, b: 101.97 }]
},{
    from: 'N/m2', to: 'Pa', values: [{ a: 0, b: 0 }, { a: 1000, b: 1000 }]
},{
    from: 'Pa', to: 'atm', values: [{ a: 0, b: 0 }, { a: 1000, b: 0.01 }]
}];

TestCase.units(Pressure, tests);
