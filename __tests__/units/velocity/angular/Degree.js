import AngularVelocity from '../../../../lib/units/velocity/angular/AngularVelocity';
import TestCase from '../../TestCase';

const tests = [
    { from: 'deg/s', to: 'deg/m', values: [{ a: 0, b: 0 }, { a: 2.01, b: 120.6 }] },
    { from: 'deg/m', to: 'deg/s', values: [{ a: 0, b: 0 }, { a: 2.01, b: 0.0335 }] },
    { from: 'deg/s', to: 'deg/h', values: [{ a: 0, b: 0 }, { a: 2.01, b: 7236 }] },
    { from: 'deg/s', to: 'deg/d', values: [{ a: 0, b: 0 }, { a: 2.01, b: 173664 }] }
];

TestCase.units(AngularVelocity, tests);
