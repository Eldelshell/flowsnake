import _ from 'lodash';
import Inductance from '../../../lib/units/electricity/Inductance';
import TestCase from '../TestCase';

const tests = [{
    from: 'H', to: 'kH', values: [{ a: 1, b: 0.001 }]
},{
    from: 'H', to: 'mH', values: [{ a: 1, b: 1000 }]
},{
    from: 'H', to: 'µH', values: [{ a: 1, b: 1000000 }]
},{
    from: 'MH', to: 'abH', values: [{ a: 1, b: 0.001 }]
},{
    from: 'H', to: 'statH', values: [{ a: 0.00001, b: 8990380.29 }]
},{
    from: 'Wb/A', to: 'H', values: [{ a: 1, b: 1 }]
}];

TestCase.units(Inductance, tests);
