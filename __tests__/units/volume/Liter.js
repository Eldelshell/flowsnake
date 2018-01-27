import _ from 'lodash';
import Volume from '../../../lib/units/volume/Volume';
import Liter from '../../../lib/units/volume/Liter';
import TestCase from '../TestCase';

const tests = [{
    from: 'ml', to: 'l', values: [{ a: 0, b: 0 }, { a: 1000, b: 1 }]
},{
    from: 'l', to: 'ml', values: [{ a: 0, b: 0 }, { a: 1, b: 1000 }]
},{
    from: Liter.Liter, to: Liter.Milliliter, values: [{ a: 0, b: 0 }, { a: 1, b: 1000 }]
}];

TestCase.units(Volume, tests);
