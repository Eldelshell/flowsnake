import _ from 'lodash';
import Force from '../../../lib/converters/force/Force';
import TestCase from '../TestCase';

const tests = [{
    from: 'N', to: 'kN', values: [{ a: 0, b: 0 }, { a: 1000, b: 1 }]
},{
    from: 'N', to: 'dyn', values: [{ a: 0, b: 0 }, { a: 1, b: 100000 }]
},{
    from: 'N', to: 'J/m', values: [{ a: 0, b: 0 }, { a: 1000, b: 1000 }]
}];

TestCase.units(Force, tests);
