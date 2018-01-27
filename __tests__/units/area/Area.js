import _ from 'lodash';
import Area from '../../../lib/converters/area/Area';
import TestCase from '../TestCase';

const tests = [{
    from: 'km2', to: 'ac', values: [{ a: 0, b: 0 }, { a: 1, b: 247.105 }]
},{
    from: 'ac', to: 'km2', values: [{ a: 0, b: 0 }, { a: 1, b: 0.00404686 }]
}];

TestCase.units(Area, tests);
