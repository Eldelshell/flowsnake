import PixelDensity from '../../lib/units/PixelDensity';
import TestCase from './TestCase';

const tests = [{
    from: 'mdpi', to: 'xxxhdpi', values: [{ a: 15, b: 60 }]
},{
    from: 'xhdpi', to: 'xxxhdpi', values: [{ a: 30, b: 60 }]
},{
    from: 'mdpi', to: 'ldpi', values: [{ a: 48, b: 36 }]
}];

TestCase.units(PixelDensity, tests, true);
