import _ from 'lodash';
import Density from '../../../lib/units/density/Density';
import TestCase from '../TestCase';

const tests = [{
    from: 'oz/in3', to: 'oz/ft3', values: [{ a: 1, b: 1728 }]
},{
    from: 'oz/in3', to: 'oz/gal', values: [{ a: 1, b: 231 }]
}];

TestCase.units(Density, tests);
