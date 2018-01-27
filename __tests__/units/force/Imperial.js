import _ from 'lodash';
import Force from '../../../lib/units/force/Force';
import TestCase from '../TestCase';

const tests = [{
    from: 'lbf', to: 'ozf', values: [{ a: 0, b: 0 }, { a: 1, b: 16 }]
},{
    from: 'lbf', to: 'pdl', values: [{ a: 0, b: 0 }, { a: 1, b: 32.174 }]
}];

TestCase.units(Force, tests);
