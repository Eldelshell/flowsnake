import _ from 'lodash';
import Acceleration from '../../lib/converters/acceleration/Acceleration';
import TestCase from '../TestCase';

const tests = [{
    from: 'km/s2', to: 'mi/s2', values: [{ a: 0, b: 0 }, { a: 2.7, b: 1.67768 }]
},{
    from: 'mi/s2', to: 'km/s2', values: [{ a: 0, b: 0 }, { a: 2.7, b: 4.34528 }]
}];

TestCase.units(Acceleration, tests);
