import _ from 'lodash';
import AparentPower from '../../lib/converters/electricity/AparentPower';
import TestCase from '../TestCase';

const tests = [{
    from: 'VA', to: 'kVA', values: [{ a: 1, b: 0.001 }]
},{
    from: 'VA', to: 'mVA', values: [{ a: 1, b: 1000 }]
},{
    from: 'VA', to: 'MVA', values: [{ a: 100, b: 0.0001 }]
},{
    from: 'VA', to: 'GVA', values: [{ a: 100000, b: 0.0001 }]
}];

TestCase.units(AparentPower, tests);
