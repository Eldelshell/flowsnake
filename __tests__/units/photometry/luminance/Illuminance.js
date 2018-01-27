import _ from 'lodash';
import Luminance from '../../../../lib/converters/photometry/luminance/Luminance';
import TestCase from '../../TestCase';

const tests = [{
    from: 'cd/ft2', to: 'cd/m2', values: [{ a: 0, b: 0 }, { a: 1, b: 10.7639 }]
},{
    from: 'cd/m2', to: 'cd/ft2', values: [{ a: 0, b: 0 }, { a: 1, b: 0.092903 }]
},{
    from: 'L', to: 'fL', values: [{ a: 0, b: 0 }, { a: 1, b: 929.034 }]
}];

TestCase.units(Luminance, tests);
