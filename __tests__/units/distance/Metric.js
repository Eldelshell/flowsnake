import _ from 'lodash';
import Distance from '../../../lib/converters/distance/Distance';
import TestCase from '../TestCase';

const tests = [{
    from: 'm', to: 'km', values: [{ a: 0, b: 0 }, { a: 1000, b: 1 }]
},{
    from: 'km', to: 'm', values: [{ a: 0, b: 0 }, { a: 1, b: 1000 }]
},{
    from: 'km', to: 'mm', values: [{ a: 0, b: 0 }, { a: 1, b: 1000000 }]
},{
    from: 'km', to: 'cm', values: [{ a: 0, b: 0 }, { a: 1, b: 100000 }]
},{
    from: 'km', to: 'nmi', values: [{ a: 0, b: 0 }, { a: 1, b: 0.53995 }]
},{
    from: 'nmi', to: 'km', values: [{ a: 0, b: 0 }, { a: 1, b: 1.852 }]
}];

TestCase.units(Distance, tests);
