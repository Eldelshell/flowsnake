import _ from 'lodash';
import Decimal from 'decimal.js';
import Mass from '../../lib/converters/mass/Mass';
import TestCase from '../TestCase';

const tests = [{
    from: 'lb', to: 'oz', values: [{ a: 0, b: 0 }, { a: 1, b: 16 }]
},{
    from: 'lb', to: 't', values: [{ a: 0, b: 0 }, { a: 10000, b: 5 }]
},{
    from: 't', to: 'stone', values: [{ a: 0, b: 0 }, { a: 1, b: 160 }]
}];

TestCase.units(Mass, tests);
