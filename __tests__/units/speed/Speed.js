import _ from 'lodash';
import Speed from '../../../lib/units/speed/Speed';
import TestCase from '../TestCase';

const tests = [{
    from: 'm/s', to: 'kt-us', values: [{ a: 0, b: 0 }, { a: 1, b: 1.94 }]
},{
    from: 'kt-uk', to: 'km/h', values: [{ a: 0, b: 0 }, { a: 1, b: 1.85310895 }]
}];

TestCase.units(Speed, tests);
