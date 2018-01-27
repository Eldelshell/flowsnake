import _ from 'lodash';
import Speed from '../../../lib/converters/speed/Speed';
import TestCase from '../TestCase';

const tests = [{
    from: 'm/h', to: 'kt-us', values: [{ a: 0, b: 0 }, { a: 1, b: 0.868977 }]
},{
    from: 'm/h', to: 'kt-uk', values: [{ a: 0, b: 0 }, { a: 1, b: 0.868432 }]
},{
    from: 'm/h', to: 'ft/s', values: [{ a: 0, b: 0 }, { a: 1, b: 1.46667 }]
}];

TestCase.units(Speed, tests);
