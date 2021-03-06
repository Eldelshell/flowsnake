import Power from '../../lib/units/Power';
import TestCase from './TestCase';

const tests = [{
    from: 'W', to: 'kW', values: [{ a: 10000, b: 10 }]
},{
    from: 'W', to: 'MW', values: [{ a: 10000, b: 0.01 }]
},{
    from: 'W', to: 'HP', values: [{ a: 10000, b: 13.6 }]
},{
    from: 'W', to: 'btu/h', values: [{ a: 10000, b: 34121 }]
},{
    from: 'W', to: 'cal/h', values: [{ a: 10000, b: 11.63 }]
},{
    from: 'W', to: 'J/s', values: [{ a: 10000, b: 10000 }]
},{
    from: 'mW', to: 'W', values: [{ a: 1, b: 0.001 }]
},{
    from: 'mW', to: 'erg/s', values: [{ a: 1, b: 10000 }]
},{
    from: 'W', to: 'dBm', values: [{ a: 10, b: 40  }]
},{
    from: 'dBm', to: 'W', values: [{ a: 80, b: 100000 }]
},{
    from: 'dBm', to: 'kW', values: [{ a: 80, b: 100 }]
}];

TestCase.units(Power, tests);
