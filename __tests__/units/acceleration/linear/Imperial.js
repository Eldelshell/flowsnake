import _ from 'lodash';
import LinearAcceleration from '../../../lib/converters/acceleration/linear/LinearAcceleration';
import TestCase from '../../TestCase';

const tests = [{
    from: 'ft/s2', to: 'mi/s2', values: [{ a: 0, b: 0 }, { a: 2500.6, b: 0.473598 }]
},{
    from: 'ft/s2', to: 'in/s2', values: [{ a: 0, b: 0 }, { a: 2500.6, b: 30007.2 }]
},{
    from: 'ft/s2', to: 'yd/s2', values: [{ a: 0, b: 0 }, { a: 2500.6, b: 833.533 }]
}];

TestCase.units(LinearAcceleration, tests);
