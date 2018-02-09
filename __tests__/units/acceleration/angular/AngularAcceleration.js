import AngularAcceleration from '../../../../lib/units/acceleration/angular/AngularAcceleration';
import TestCase from '../../TestCase';

const tests = [{
    from: 'rad/s2', to: 'r/s2', values: [{ a: 0, b: 0 }, { a: 20.76, b: 3.3 }]
},{
    from: 'rad/s2', to: 'r/min2', values: [{ a: 0, b: 0 }, { a: 20.76, b: 11894.6 }]
},{
    from: 'rad/s2', to: 'rad/min2', values: [{ a: 0, b: 0 }, { a: 20.76, b: 74736 }]
}];

TestCase.units(AngularAcceleration, tests);
