import _ from 'lodash';
import Area from '../../../lib/units/area/Area';
import TestCase from '../TestCase';

const tests = [{
    from: 'km2', to: 'ac', values: [{ a: 0, b: 0 }, { a: 1, b: 247.11 }]
},{
    from: 'ac', to: 'km2', values: [{ a: 0, b: 0 }, { a: 10000, b: 40.47 }]
}];

TestCase.units(Area, tests);
