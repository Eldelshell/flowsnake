import _ from 'lodash';
import Density from '../../../lib/units/density/Density';
import TestCase from '../TestCase';

const tests = [{
    from: 'lb/in3', to: 'lb/ft3', values: [{ a: 1, b: 1728 }]
},{
    from: 'lb/in3', to: 'lb/gal', values: [{ a: 1, b: 231 }]
}];

TestCase.units(Density, tests);
