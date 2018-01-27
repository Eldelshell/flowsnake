import _ from 'lodash';
import Temperature from '../../../lib/units/temperature/Temperature';
import TestCase from '../TestCase';

const tests = [{
    from: '°C',
    to: '°F',
    values: [{ a: 100, b: 212 }, { a: 0, b: 32 }, { a: -100, b: -148 }]
},{
    from: '°C',
    to: 'K',
    values: [{ a: 100, b: 373.15 },{ a: 0, b: 273.15 },{ a: -100, b: 173.15 }]
},{
    from: '°C',
    to: '°R',
    values: [{ a: 100, b: 671.67 },{ a: 0, b: 491.67 },{ a: -100, b: 311.67 }]
},{
    from: '°F',
    to: '°C',
    values: [{ a: 210, b: 98.8889 }, { a: 32, b: 0 }, { a: -148, b: -100 }]
},{
    from: '°F',
    to: 'K',
    values: [{ a: 100, b: 310.928 },{ a: 0, b: 255.372 },{ a: -100, b: 199.817 }]
},{
    from: '°F',
    to: '°R',
    values: [{ a: 100, b: 559.67 },{ a: 0, b: 459.67 },{ a: -100, b: 359.67 }]
},{
    from: 'K',
    to: '°C',
    values: [{ a: 373.15, b: 100 },{ a: 273.15, b: 0 },{ a: 173.15, b: -100 }]
},{
    from: 'K',
    to: '°F',
    values: [{ a: 100, b: -279.67 },{ a: 0, b: -459.67 },{ a: -100, b: -639.67 }]
},{
    from: 'K',
    to: '°R',
    values: [{ a: 100, b: 180 },{ a: 0, b: 0 },{ a: -100, b: -180 }]
},{
    from: '°R',
    to: '°C',
    values: [{ a: 100, b: -217.594 },{ a: 0, b: -273.15 },{ a: -100, b: -328.706 }]
},{
    from: '°R',
    to: '°F',
    values: [{ a: 100, b: -359.67 },{ a: 0, b: -459.67 },{ a: -100, b: -559.67 }]
},{
    from: '°R',
    to: 'K',
    values: [{ a: 100, b: 55.556 },{ a: 0, b: 0 },{ a: -100, b: -55.556 }]
}];

TestCase.units(Temperature, tests);
