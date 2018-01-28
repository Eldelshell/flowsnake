import _ from 'lodash';
import Capacitance from '../../../lib/units/electricity/Capacitance';
import TestCase from '../TestCase';

const tests = [{
    from: 'F', to: 'kF', values: [{ a: 1, b: 0.001 }]
},{
    from: 'F', to: 'mF', values: [{ a: 1, b: 1000 }]
},{
    from: 'F', to: 'µF', values: [{ a: 1, b: 1000000 }]
},{
    from: 'kF', to: 'abF', values: [{ a: 1000, b: 0.001 }]
},{
    from: 'TF', to: 'statF', values: [{ a: 1, b: 1.11264 }]
}];

TestCase.units(Capacitance, tests);
