import _ from 'lodash';
import Force from '../../../lib/converters/force/Force';
import TestCase from '../TestCase';

const tests = [{
    from: 'gf', to: 'kgf', values: [{ a: 0, b: 0 }, { a: 1000, b: 1 }]
},{
    from: 'gf', to: 'pond', values: [{ a: 0, b: 0 }, { a: 1000, b: 1000 }]
}];

TestCase.units(Force, tests);
