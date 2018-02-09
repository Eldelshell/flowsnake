import _ from 'lodash';
import Potential from '../../../lib/units/electricity/Potential';
import TestCase from '../TestCase';

const tests = [{
    from: 'V', to: 'kV', values: [{ a: 1, b: 0.001 }]
},{
    from: 'V', to: 'mV', values: [{ a: 1, b: 1000 }]
},{
    from: 'V', to: 'µV', values: [{ a: 1, b: 1000000 }]
},{
    from: 'uV', to: 'abV', values: [{ a: 1, b: 100 }]
},{
    from: 'kV', to: 'statV', values: [{ a: 1, b: 3.34 }]
}];

TestCase.units(Potential, tests);
