import _ from 'lodash';
import Mass from '../../lib/converters/mass/Mass';
import TestCase from '../TestCase';

const tests = [{
    from: 'g', to: 'kg', values: [{ a: 0, b: 0 }, { a: 1000, b: 1 }]
},{
    from: 'g', to: 'mg', values: [{ a: 0, b: 0 }, { a: 1, b: 1000 }]
},{
    from: 'g', to: 'mcg', values: [{ a: 0, b: 0 }, { a: 1, b: 1000000 }]
},{
    from: 'g', to: 'mt', values: [{ a: 0, b: 0 }, { a: 1000000, b: 1 }]
}];

TestCase.units(Mass, tests);
