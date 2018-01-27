import _ from 'lodash';
import Force from '../../../lib/converters/force/Force';
import TestCase from '../TestCase';

const tests = [{
    from: 'kN', to: 'pdl', values: [{ a: 0, b: 0 }, { a: 2.5, b: 18082.6 }]
},{
    from: 'kN', to: 'kgf', values: [{ a: 0, b: 0 }, { a: 2.5, b: 254.925 }]
},{
    from: 'lbf', to: 'dyn', values: [{ a: 0, b: 0 }, { a: 0.001, b: 444.82 }]
},{
    from: 'lbf', to: 'kgf', values: [{ a: 0, b: 0 }, { a: 1, b: 0.4536 }]
},{
    from: 'kgf', to: 'J/m', values: [{ a: 0, b: 0 }, { a: 1, b: 9.80681 }]
},{
    from: 'kgf', to: 'lbf', values: [{ a: 0, b: 0 }, { a: 1, b: 2.20459 }]
}];

TestCase.units(Force, tests);
