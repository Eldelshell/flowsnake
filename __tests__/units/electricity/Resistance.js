import _ from 'lodash';
import Resistance from '../../../lib/units/electricity/Resistance';
import TestCase from '../TestCase';

const tests = [{
    from: 'Ω', to: 'kΩ', values: [{ a: 1, b: 0.001 }]
},{
    from: 'Ω', to: 'mΩ', values: [{ a: 1, b: 1000 }]
},{
    from: 'Ω', to: 'µΩ', values: [{ a: 1, b: 1000000 }]
},{
    from: 'uΩ', to: 'abΩ', values: [{ a: 1, b: 1000 }]
},{
    from: 'TΩ', to: 'statΩ', values: [{ a: 1, b: 1.11 }]
}];

TestCase.units(Resistance, tests);
