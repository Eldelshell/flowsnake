import _ from 'lodash';
import Temperature from '../../../lib/units/temperature/Temperature';
import TestCase from '../TestCase';

const tests = [{
    from: '°F', to: '°R', values: [{ a: 100, b: 559.67 },{ a: 0, b: 459.67 },{ a: -100, b: 359.67 }]
},{
    from: '°R', to: '°F', values: [{ a: 100, b: -359.67 },{ a: 0, b: -459.67 },{ a: -100, b: -559.67 }]
}];

TestCase.units(Temperature, tests);
