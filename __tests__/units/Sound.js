import Sound from '../../lib/units/Sound';
import TestCase from './TestCase';

const tests = [{
    from: 'dB', to: 'Np', values: [{ a: 0, b: 0 }, { a: 23, b: 2.65 }]
},{
    from: 'Np', to: 'dB', values: [{ a: 0, b: 0 }, { a: 23, b: 199.78 }]
}];

TestCase.units(Sound, tests);
