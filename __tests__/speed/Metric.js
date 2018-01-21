import _ from 'lodash';
import Speed from '../../lib/converters/speed/Speed';
import TestCase from '../TestCase';

const tests = [{
    from: 'm/s', to: 'km/h', values: [{ a: 0, b: 0 }, { a: 1, b: 3.6 }]
}];

TestCase.units(Speed, tests);
