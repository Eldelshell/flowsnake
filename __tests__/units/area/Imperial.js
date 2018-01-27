import _ from 'lodash';
import Area from '../../../lib/converters/area/Area';
import TestCase from '../TestCase';

const tests = [{
    from: 'ft2', to: 'mile2', values: [{ a: 0, b: 0 }, { a: 50000, b: 0.0017935 }]
},{
    from: 'ft2', to: 'in2', values: [{ a: 0, b: 0 }, { a: 50000, b: 7200000 }]
},{
    from: 'ft2', to: 'yd2', values: [{ a: 0, b: 0 }, { a: 50000, b: 5555.56 }]
},{
    from: 'ft2', to: 'ac', values: [{ a: 0, b: 0 }, { a: 50000, b: 1.14784 }]
}];

TestCase.units(Area, tests);
