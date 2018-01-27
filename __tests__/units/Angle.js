import Angle from '../lib/converters/Angle';
import TestCase from './TestCase';

const tests = [{
    from: 'deg', to: 'rad', values: [{ a: 0, b: 0 }, { a: 180, b: 3.14159 }]
},{
    from: 'deg', to: 'grad', values: [{ a: 0, b: 0 }, { a: 180, b: 200 }]
},{
    from: 'rad', to: 'deg', values: [{ a: 0, b: 0 }, { a: 180, b: 10313.2 }]
}];

TestCase.units(Angle, tests);
