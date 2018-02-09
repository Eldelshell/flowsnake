import _ from 'lodash';
import Decimal from 'decimal.js';
import Distance from '../../../lib/units/distance/Distance';
import TestCase from '../TestCase';

const tests = [{
    from: 'ft', to: 'mile', values: [{ a: 0, b: 0 }, { a: 550.65, b: 0.1 }]
},{
    from: 'ft', to: 'in', values: [{ a: 0, b: 0 }, { a: 550.65, b: 6607.8 }]
},{
    from: 'ft', to: 'yd', values: [{ a: 0, b: 0 }, { a: 550.65, b: 183.55 }]
}];

TestCase.units(Distance, tests);
