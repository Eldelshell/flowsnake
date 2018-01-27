import Energy from '../../lib/units/Energy';
import TestCase from './TestCase';

const tests = [{
    from: 'J', to: 'kJ', values: [{ a: 1000, b: 1 }]
},{
    from: 'J', to: 'MJ', values: [{ a: 1000, b: 0.001 }]
},{
    from: 'J', to: 'Wh', values: [{ a: 1000, b: 0.277778 }]
},{
    from: 'J', to: 'mWh', values: [{ a: 1, b: 0.277778 }]
},{
    from: 'J', to: 'kWh', values: [{ a: 1000000, b: 0.277778 }]
},{
    from: 'J', to: 'MWh', values: [{ a: 1000000000, b: 0.277778 }]
},{
    from: 'J', to: 'GWh', values: [{ a: 1000000000000, b: 0.277778 }]
},{
    from: 'J', to: 'btu', values: [{ a: 1000, b: 0.947817 }]
},{
    from: 'J', to: 'cal', values: [{ a: 1000, b: 238.846 }]
},{
    from: 'J', to: 'kgfm', values: [{ a: 50, b: 5.09861 }]
},{
    from: 'J', to: 'GeV', values: [{ a: 0.00001, b: 6241510000 }]
}];

TestCase.units(Energy, tests);
