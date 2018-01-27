import _ from 'lodash';
import Decimal from 'decimal.js';
import Luminance from '../../../../lib/units/photometry/luminance/Luminance';
import TestCase from '../../TestCase';

const tests = [{
    from: 'cd/ft2', to: 'fL', values: [{ a: 0, b: 0 }, { a: 550.67, b: 1729.98 }]
},{
    from: 'cd/ft2', to: 'lm/ft2/sr', values: [{ a: 0, b: 0 }, { a: 550.67, b: 550.67 }]
}];

TestCase.units(Luminance, tests);
