import AngularVelocity from '../../../../lib/units/velocity/angular/AngularVelocity';
import TestCase from '../../TestCase';

const tests = [
    { from: 'rad/s', to: 'rev/m', values: [{ a: 2.01, b: 19.1941 }] },
    { from: 'rev/h', to: 'rad/s', values: [{ a: 298, b: 0.520109 }] },
    { from: 'rad/s', to: 'deg/m', values: [{ a: 2.01, b: 6909.18 }] },
    { from: 'deg/h', to: 'rad/s', values: [{ a: 298, b: 0.00144489 }] },
    { from: 'rev/s', to: 'deg/m', values: [{ a: 2.01, b: 43416 }] },
    { from: 'deg/h', to: 'rev/s', values: [{ a: 29800, b: 0.0229938 }] }
];

TestCase.units(AngularVelocity, tests);
