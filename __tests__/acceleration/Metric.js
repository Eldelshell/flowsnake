import _ from 'lodash';
import Acceleration from '../../lib/converters/acceleration/Acceleration';
import TestCase from '../TestCase';

const tests = [{
    from: 'm/s2', to: 'km/s2', values: [{ a: 0, b: 0 }, { a: 2500.6, b: 2.5006 }]
},{
    from: 'm/s2', to: 'g', values: [{ a: 0, b: 0 }, { a: 2500.6, b: 254.992 }]
},{
    from: 'm/s2', to: 'Gal', values: [{ a: 0, b: 0 }, { a: 2500.6, b: 250060 }]
}];

TestCase.units(Acceleration, tests);
