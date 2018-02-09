import AngularVelocity from '../../../../lib/units/velocity/angular/AngularVelocity';
import TestCase from '../../TestCase';

const tests = [
    { from: 'rad/s', to: 'rev/m', values: [{ a: 2.01, b: 19.19 }] },
    { from: 'rev/h', to: 'rad/s', values: [{ a: 298, b: 0.52 }] },
    { from: 'rad/s', to: 'deg/m', values: [{ a: 2.01, b: 6909.17 }] },
    { from: 'deg/h', to: 'rad/s', values: [{ a: 298000, b: 1.44 }] },
    { from: 'rev/s', to: 'deg/m', values: [{ a: 2.01, b: 43416 }] },
    { from: 'deg/h', to: 'rev/s', values: [{ a: 29800, b: 0.02 }] }
];

TestCase.units(AngularVelocity, tests);
