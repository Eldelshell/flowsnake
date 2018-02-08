import _ from 'lodash';
import Density from '../../../lib/units/density/Density';
import TestCase from '../TestCase';

const tests = [{
    from: 'kg/l', to: 'g/l', values: [{ a: 1, b: 1000 }]
},{
    from: 'kg/l', to: 'mg/l', values: [{ a: 1, b: 1000000 }]
}];

TestCase.units(Density, tests);
