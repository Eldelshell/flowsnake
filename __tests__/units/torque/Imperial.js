import _ from 'lodash';
import Torque from '../../../lib/units/torque/Torque';
import TestCase from '../TestCase';

const tests = [{
    from: 'lbf·ft', to: 'ozf·ft', values: [{ a: 0, b: 0 }, { a: 1, b: 16 }]
},{
    from: 'lbf·ft', to: 'pdl·ft', values: [{ a: 0, b: 0 }, { a: 1, b: 32.17 }]
}];

TestCase.units(Torque, tests);
