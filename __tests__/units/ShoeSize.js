import ShoeSize from '../../lib/converters/shoes/ShoeSize';
import TestCase from './TestCase';

const tests = [{
    from: 'eu-adult', to: 'us-adult-male', values: [{ a: 35, b: '3½' }]
},{
    from: 'eu-adult', to: 'us-adult-male', values: [{ a: '48½', b: 14 }]
},{
    from: 'eu-adult', to: 'uk-adult-male', values: [{ a: 35, b: 3 }]
},{
    from: 'eu-adult', to: 'uk-adult-male', values: [{ a: '48½', b: '13½' }]
},{
    from: 'eu-adult', to: 'jp-adult-male', values: [{ a: '48½', b: '31½' }]
},{
    from: 'eu-adult', to: 'mx-adult', values: [{ a: '48½', b: '12½' }]
},{
    from: 'eu-adult', to: 'cm', values: [{ a: '48½', b: 29.2 }]
},{
    from: 'eu-adult', to: 'in', values: [{ a: '48½', b: '11½' }]
}];

TestCase.units(ShoeSize, tests, true);
