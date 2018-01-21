import _ from 'lodash';
import Temperature from '../../lib/converters/temperature/Temperature';
import TestCase from '../TestCase';

const tests = [{
    from: 'C', to: 'K', values: [{ a: 100, b: 373.15 },{ a: 0, b: 273.15 },{ a: -100, b: 173.15 }]
},{
    from: 'K', to: 'C', values: [{ a: 373.15, b: 100 },{ a: 273.15, b: 0 },{ a: 173.15, b: -100 }]
}];

TestCase.units(Temperature, tests);
