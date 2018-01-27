import _ from 'lodash';
import Current from '../../lib/converters/electricity/Current';
import TestCase from '../TestCase';

const tests = [{
    from: 'A', to: 'kA', values: [{ a: 1, b: 0.001 }]
},{
    from: 'A', to: 'mA', values: [{ a: 1, b: 1000 }]
},{
    from: 'A', to: 'µA', values: [{ a: 1, b: 1000000 }]
},{
    from: 'A', to: 'abA', values: [{ a: 1, b: 0.1 }]
},{
    from: 'A', to: 'Bi', values: [{ a: 1, b: 0.1 }]
},{
    from: 'A', to: 'statA', values: [{ a: 0.00001, b: 29979.2 }]
}];

TestCase.units(Current, tests);
