import _ from 'lodash';
import Luminance from '../../../../lib/converters/photometry/luminance/Luminance';
import TestCase from '../../TestCase';

const tests = [{
    from: 'cd/m2', to: 'nt', values: [{ a: 0, b: 0 }, { a: 550.67, b: 550.67 }]
},{
    from: 'cd/m2', to: 'sb', values: [{ a: 0, b: 0 }, { a: 550.67, b: 0.055067 }]
},{
    from: 'cd/m2', to: 'L', values: [{ a: 0, b: 0 }, { a: 550.67, b: 0.172998 }]
},{
    from: 'cd/m2', to: 'lm/m2/sr', values: [{ a: 0, b: 0 }, { a: 550.67, b: 550.67 }]
}];

TestCase.units(Luminance, tests);
