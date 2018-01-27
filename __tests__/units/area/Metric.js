import _ from 'lodash';
import Area from '../../../lib/units/area/Area';
import TestCase from '../TestCase';

const tests = [{
    from: 'm2', to: 'km2', values: [{ a: 0, b: 0 }, { a: 1000, b: 0.001 }]
},{
    from: 'km2', to: 'm2', values: [{ a: 0, b: 0 }, { a: 1, b: 1000000 }]
},{
    from: 'ha', to: 'km2', values: [{ a: 0, b: 0 }, { a: 1, b: 0.01 }]
},{
    from: 'ha', to: 'a', values: [{ a: 0, b: 0 }, { a: 1, b: 100 }]
}];

TestCase.units(Area, tests);
