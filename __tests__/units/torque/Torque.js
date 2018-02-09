import _ from 'lodash';
import Torque from '../../../lib/units/torque/Torque';
import TestCase from '../TestCase';

const tests = [{
    from: 'kN·m', to: 'pdl·ft', values: [{ a: 0, b: 0 }, { a: 2.5, b: 59326.6 }]
},{
    from: 'kN·m', to: 'kgf·m', values: [{ a: 0, b: 0 }, { a: 2.5, b: 254.925 }]
},{
    from: 'lbf·ft', to: 'dyn·m', values: [{ a: 0, b: 0 }, { a: 0.001, b: 135.58 }]
},{
    from: 'lbf·ft', to: 'kgf·m', values: [{ a: 0, b: 0 }, { a: 1, b: 0.138255 }]
},{
    from: 'kgf·m', to: 'kN·m', values: [{ a: 0, b: 0 }, { a: 1, b: 0.01 }]
},{
    from: 'kgf·m', to: 'lbf·ft', values: [{ a: 0, b: 0 }, { a: 1, b: 7.23 }]
}];

TestCase.units(Torque, tests);
