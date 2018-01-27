import AngularVelocity from '../../../../lib/units/velocity/angular/AngularVelocity';
import TestCase from '../../TestCase';

const tests = [
    { from: 'rad/s', to: 'rad/m', values: [{ a: 0, b: 0 }, { a: 2.01, b: 120.6 }] },
    { from: 'rad/m', to: 'rad/s', values: [{ a: 0, b: 0 }, { a: 2.01, b: 0.0335 }] },
    { from: 'rad/s', to: 'rad/h', values: [{ a: 0, b: 0 }, { a: 2.01, b: 7236 }] },
    { from: 'rad/s', to: 'rad/d', values: [{ a: 0, b: 0 }, { a: 2.01, b: 173664 }] }
];

TestCase.units(AngularVelocity, tests);
