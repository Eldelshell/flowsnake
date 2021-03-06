import _ from 'lodash';
import Charge from '../../../lib/units/electricity/Charge';
import TestCase from '../TestCase';

const tests = [{
    from: 'C', to: 'kC', values: [{ a: 1, b: 0.001 }]
},{
    from: 'C', to: 'mC', values: [{ a: 1, b: 1000 }]
},{
    from: 'C', to: 'µC', values: [{ a: 1, b: 1000000 }]
},{
    from: 'C', to: 'abC', values: [{ a: 1, b: 0.1 }]
},{
    from: 'C', to: 'statC', values: [{ a: 0.00001, b: 29979.25 }]
},{
    from: 'A·m', to: 'C', values: [{ a: 1, b: 60 }]
},{
    from: 'mAh', to: 'C', values: [{ a: 1, b: 3.6 }]
}];

TestCase.units(Charge, tests);
