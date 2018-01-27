import AngularVelocity from '../../../../lib/units/velocity/angular/AngularVelocity';
import TestCase from '../../TestCase';

const tests = [
    { from: 'rev/s', to: 'rev/m', values: [{ a: 0, b: 0 }, { a: 2.01, b: 120.6 }] },
    { from: 'rev/m', to: 'rev/s', values: [{ a: 0, b: 0 }, { a: 2.01, b: 0.0335 }] },
    { from: 'rev/s', to: 'rev/h', values: [{ a: 0, b: 0 }, { a: 2.01, b: 7236 }] },
    { from: 'rev/s', to: 'rev/d', values: [{ a: 0, b: 0 }, { a: 2.01, b: 173664 }] }
];

TestCase.units(AngularVelocity, tests);
