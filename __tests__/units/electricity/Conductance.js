import _ from 'lodash';
import Conductance from '../../../lib/units/electricity/Conductance';
import TestCase from '../TestCase';

const tests = [{
    from: 'S', to: 'kS', values: [{ a: 1, b: 0.001 }]
},{
    from: 'S', to: 'mS', values: [{ a: 1, b: 1000 }]
},{
    from: 'S', to: 'µS', values: [{ a: 1, b: 1000000 }]
},{
    from: 'MS', to: 'abS', values: [{ a: 1, b: 0.001 }]
},{
    from: 'S', to: 'statS', values: [{ a: 0.00001, b: 8990380.29 }]
},{
    from: 'A/V', to: 'S', values: [{ a: 1, b: 1 }]
}];

TestCase.units(Conductance, tests);
