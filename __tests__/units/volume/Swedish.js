import _ from 'lodash';
import Volume from '../../../lib/units/volume/Volume';
import TestCase from '../TestCase';

const tests = [{
    from: 'msk', to: 'tsk', values: [{ a: 0, b: 0 }, { a: 1, b: 3 }]
},{
    from: 'tsk', to: 'krm', values: [{ a: 0, b: 0 }, { a: 1, b: 5 }]
},{
    from: 'krm', to: 'kkp', values: [{ a: 0, b: 0 }, { a: 1000, b: 6.67 }]
},{
    from: 'krm', to: 'glas', values: [{ a: 0, b: 0 }, { a: 1000, b: 5 }]
},{
    from: 'krm', to: 'kanna', values: [{ a: 0, b: 0 }, { a: 1000, b: 0.38 }]
},{
    from: 'tsk', to: 'kanna', values: [{ a: 0, b: 0 }, { a: 1000, b: 1.91 }]
}];

TestCase.units(Volume, tests);
