import _ from 'lodash';
import Volume from '../../../lib/units/volume/Volume';
import TestCase from '../TestCase';

const tests = [{
    from: 'yd3', to: 'in3', values: [{ a: 0, b: 0 }, { a: 5.9, b: 275270.4 }]
},{
    from: 'yd3', to: 'ft3', values: [{ a: 0, b: 0 }, { a: 5.9, b: 159.3 }]
},{
    from: 'in3', to: 'yd3', values: [{ a: 0, b: 0 }, { a: 5000.9, b: 0.11 }]
},{
    from: 'in3', to: 'ft3', values: [{ a: 0, b: 0 }, { a: 5000.9, b: 2.89 }]
}];

TestCase.units(Volume, tests);
