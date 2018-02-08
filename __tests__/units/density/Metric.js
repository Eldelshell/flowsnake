import _ from 'lodash';
import Density from '../../../lib/units/density/Density';
import TestCase from '../TestCase';

const tests = [{
    from: 'kg/m3', to: 'g/m3', values: [{ a: 1, b: 1000 }]
},{
    from: 'kg/m3', to: 'mg/m3', values: [{ a: 1, b: 1000000 }]
}];

TestCase.units(Density, tests);
