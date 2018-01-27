import _ from 'lodash';
import Pressure from '../../lib/converters/pressure/Pressure';
import TestCase from '../TestCase';

const tests = [{
    from: 'kPa', to: 'Pa', values: [{ a: 0, b: 0 }, { a: 1, b: 1000 }]
},{
    from: 'Pa', to: 'MPa', values: [{ a: 0, b: 0 }, { a: 1000, b: 0.001 }]
},{
    from: 'Pa', to: 'bar', values: [{ a: 0, b: 0 }, { a: 1000, b: 0.01 }]
},{
    from: 'Pa', to: 'torr', values: [{ a: 0, b: 0 }, { a: 10000, b: 75.0062 }]
},{
    from: 'Pa', to: 'mmHg', values: [{ a: 0, b: 0 }, { a: 10000, b: 75.0064 }]
},{
    from: 'Pa', to: 'kg/m2', values: [{ a: 0, b: 0 }, { a: 1000, b: 101.971 }]
},{
    from: 'N/m2', to: 'Pa', values: [{ a: 0, b: 0 }, { a: 1000, b: 1000 }]
},{
    from: 'Pa', to: 'atm', values: [{ a: 0, b: 0 }, { a: 1000, b: 0.00986923 }]
}];

TestCase.units(Pressure, tests);
