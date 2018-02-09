import _ from 'lodash';
import Luminance from '../../../../lib/units/photometry/luminance/Luminance';
import TestCase from '../../TestCase';

const tests = [{
    from: 'cd/ft2', to: 'cd/m2', values: [{ a: 0, b: 0 }, { a: 1, b: 10.76391 }]
},{
    from: 'cd/m2', to: 'cd/ft2', values: [{ a: 0, b: 0 }, { a: 1, b: 0.09 }]
},{
    from: 'L', to: 'fL', values: [{ a: 0, b: 0 }, { a: 1, b: 929.03 }]
}];

TestCase.units(Luminance, tests);
