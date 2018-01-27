import _ from 'lodash';
import Torque from '../../../lib/units/torque/Torque';
import TestCase from '../TestCase';

const tests = [{
    from: 'N·m', to: 'kN·m', values: [{ a: 0, b: 0 }, { a: 1000, b: 1 }]
},{
    from: 'N·m', to: 'dyn·m', values: [{ a: 0, b: 0 }, { a: 1, b: 100000 }]
}];

TestCase.units(Torque, tests);
