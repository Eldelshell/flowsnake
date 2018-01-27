import _ from 'lodash';
import Torque from '../../../lib/converters/torque/Torque';
import TestCase from '../TestCase';

const tests = [{
    from: 'gf·m', to: 'kgf·m', values: [{ a: 0, b: 0 }, { a: 1000, b: 1 }]
}];

TestCase.units(Torque, tests);
