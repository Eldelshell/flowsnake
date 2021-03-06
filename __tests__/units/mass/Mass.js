import _ from 'lodash';
import Mass from '../../../lib/units/mass/Mass';
import TestCase from '../TestCase';

const tests = [{
    from: 'lb', to: 'kg', values: [{ a: 0, b: 0 }, { a: 1, b: 0.453592 }]
},{
    from: 'kg', to: 't', values: [{ a: 0, b: 0 }, { a: 1000, b: 1.1 }]
}];

TestCase.units(Mass, tests);
