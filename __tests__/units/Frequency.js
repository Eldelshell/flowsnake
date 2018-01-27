import Frequency from '../../lib/units/Frequency';
import TestCase from './TestCase';

const tests = [{
    from: 'Hz', to: 'kHz', values: [{ a: 1, b: 0.001 }]
},{
    from: 'Hz', to: 'MHz', values: [{ a: 1000, b: 0.001 }]
},{
    from: 'Hz', to: 'GHz', values: [{ a: 1000000, b: 0.001 }]
},{
    from: 'Hz', to: 'THz', values: [{ a: 1000000000, b: 0.001 }]
},{
    from: 'Hz', to: 'mHz', values: [{ a: 1, b: 1000 }]
},{
    from: 'Hz', to: 'rpm', values: [{ a: 1, b: 60 }]
},{
    from: 'Hz', to: 'rad/s', values: [{ a: 1, b: 6.28319 }]
},{
    from: 'Hz', to: 'deg/s', values: [{ a: 1, b: 360 }]
},{
    from: 'Hz', to: 'rad/m', values: [{ a: 1, b: 376.991 }]
},{
    from: 'Hz', to: 'deg/m', values: [{ a: 1, b: 21600 }]
}];

TestCase.units(Frequency, tests, true);
