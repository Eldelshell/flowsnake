import _ from 'lodash';
import Distance from '../../../lib/units/distance/Distance';
import TestCase from '../TestCase';

const tests = [{
    from: 'mile', to: 'km', values: [{ a: 0, b: 0 }, { a: 1, b: 1.609344 }]
},{
    from: 'km', to: 'yd', values: [{ a: 0, b: 0 }, { a: 1, b: 1093.6 }]
},{
    from: 'AU', to: 'km', values: [{ a: 0, b: 0 }, { a: 1, b: 1.496 * (10**8) }]
},{
    from: 'AU', to: 'mile', values: [{ a: 0, b: 0 }, { a: 1, b: 92956439.39 }]
},{
    from: 'Gm', to: 'AU', values: [{ a: 0, b: 0 }, { a: 10, b: 0.066846 }]
},{
    from: 'mile', to: 'AU', values: [{ a: 0, b: 0 }, { a: 10000000, b: 0.10758 }]
}];

TestCase.units(Distance, tests);
