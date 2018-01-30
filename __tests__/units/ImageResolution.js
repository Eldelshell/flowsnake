import ImageResolution from '../../lib/units/ImageResolution';
import TestCase from './TestCase';

const tests = [{
    from: 'dpi', to: 'dpcm', values: [{ a: 300, b: 118.11 }]
},{
    from: 'dpcm', to: 'ppi', values: [{ a: 28, b: 71.12 }]
}];

TestCase.units(ImageResolution, tests);
