import _ from 'lodash';
import Speed from '../../../lib/converters/speed/Speed';
import TestCase from '../TestCase';

const tests = [{
    from: 'm/s', to: 'kt-us', values: [{ a: 0, b: 0 }, { a: 1, b: 1.94394 }]
},{
    from: 'kt-uk', to: 'km/h', values: [{ a: 0, b: 0 }, { a: 1, b: 1.85311 }]
}];

TestCase.units(Speed, tests);
