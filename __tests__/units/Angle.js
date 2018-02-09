import Angle from '../../lib/units/Angle';
import TestCase from './TestCase';

const tests = [{
    from: 'deg', to: 'rad', values: [{ a: 0, b: 0 }, { a: 180, b: 3.14 }]
},{
    from: 'deg', to: 'grad', values: [{ a: 0, b: 0 }, { a: 180, b: 200 }]
},{
    from: 'rad', to: 'deg', values: [{ a: 0, b: 0 }, { a: 180, b: 10313.24 }]
}];

TestCase.units(Angle, tests);
