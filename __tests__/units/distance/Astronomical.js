import _ from 'lodash';
import Distance from '../../../lib/units/distance/Distance';
import TestCase from '../TestCase';

const tests = [{
    from: 'AU', to: 'pc', values: [{ a: 0, b: 0 }, { a: 100000, b: 0.48 }]
},{
    from: 'AU', to: 'ly', values: [{ a: 0, b: 0 }, { a: 100000, b: 1.58 }]
},{
    from: 'ly', to: 'AU', values: [{ a: 0, b: 0 }, { a: 1, b: 63241.0771 }]
},{
    from: 'ly', to: 'pc', values: [{ a: 0, b: 0 }, { a: 100, b: 30.66 }]
},{
    from: 'pc', to: 'ly', values: [{ a: 0, b: 0 }, { a: 5, b: 16.31 }]
},{
    from: 'pc', to: 'AU', values: [{ a: 0, b: 0 }, { a: 0.05, b: 10313.24111 }]
}];

TestCase.units(Distance, tests);
