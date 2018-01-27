import _ from 'lodash';
import Volume from '../../../lib/units/volume/Volume';
import TestCase from '../TestCase';

const tests = [{
    from: 'ml', to: 'fl-oz-us', values: [{ a: 0, b: 0 }, { a: 1000, b: 33.814 }]
},{
    from: 'ml', to: 'gal-us', values: [{ a: 0, b: 0 }, { a: 1000, b: 0.264172 }]
},{
    from: 'ml', to: 'fl-oz-uk', values: [{ a: 0, b: 0 }, { a: 1000, b: 35.1951 }]
},{
    from: 'ml', to: 'gal-uk', values: [{ a: 0, b: 0 }, { a: 1000, b: 0.219969 }]
},{
    from: 'gal-uk', to: 'gal-us', values: [{ a: 0, b: 0 }, { a: 50, b: 60.05 }]
},{
    from: 'tsp-us', to: 'gal-uk', values: [{ a: 0, b: 0 }, { a: 1000, b: 1.08417 }]
},{
    from: 'gal-us', to: 'in3', values: [{ a: 0, b: 0 }, { a: 2.5, b: 577.503 }]
},{
    from: 'gal-uk', to: 'in3', values: [{ a: 0, b: 0 }, { a: 2.5, b: 693.551 }]
},{
    from: 'dl', to: 'in3', values: [{ a: 0, b: 0 }, { a: 10, b: 61.026 }]
},{
    from: 'in3', to: 'gal-us', values: [{ a: 0, b: 0 }, { a: 577.5, b: 2.49999 }]
},{
    from: 'in3', to: 'gal-uk', values: [{ a: 0, b: 0 }, { a: 693.54, b: 2.49998 }]
},{
    from: 'in3', to: 'dl', values: [{ a: 0, b: 0 }, { a: 61.0237, b: 10 }]
},{
    from: 'msk', to: 'ml', values: [{ a: 0, b: 0 }, { a: 1, b: 15 }]
},{
    from: 'tsk', to: 'ml', values: [{ a: 0, b: 0 }, { a: 1, b: 5 }, { a: 3, b: 15 }]
},{
    from: 'krm', to: 'ml', values: [{ a: 0, b: 0 }, { a: 1, b: 1 }, { a: 5, b: 5 }]
},{
    from: 'kkp', to: 'dl', values: [{ a: 0, b: 0 }, { a: 1, b: 1.5 }]
},{
    from: 'glas', to: 'dl', values: [{ a: 0, b: 0 }, { a: 1, b: 2 }]
},{
    from: 'krm', to: 'fl-oz-us', values: [{ a: 0, b: 0 }, { a: 100, b: 3.3814 }]
},{
    from: 'krm', to: 'in3', values: [{ a: 0, b: 0 }, { a: 100, b: 6.1026 }]
},{
    from: 'fl-oz-us', to: 'krm', values: [{ a: 0, b: 0 }, { a: 100, b: 2960 }]
},{
    from: 'fl-oz-uk', to: 'krm', values: [{ a: 0, b: 0 }, { a: 100, b: 2840 }]
},{
    from: 'in3', to: 'krm', values: [{ a: 0, b: 0 }, { a: 100, b: 1638.71 }]
},{ // CubicMeter tests
    from: 'l', to: 'm3', values: [{ a: 0, b: 0 }, { a: 1000, b: 1 }]
},{
    from: 'm3', to: 'l', values: [{ a: 0, b: 0 }, { a: 1, b: 1000 }]
},{
    from: 'gal-us', to: 'm3', values: [{ a: 0, b: 0 }, { a: 1000, b: 3.7888 }]
},{
    from: 'm3', to: 'gal-us', values: [{ a: 0, b: 0 }, { a: 4, b: 1056.69 }]
},{
    from: 'gal-uk', to: 'm3', values: [{ a: 0, b: 0 }, { a: 1000, b: 4.544 }]
},{
    from: 'm3', to: 'gal-uk', values: [{ a: 0, b: 0 }, { a: 4, b: 879.875 }]
},{
    from: 'ft3', to: 'm3', values: [{ a: 0, b: 0 }, { a: 1000, b: 28.3168 }]
},{
    from: 'm3', to: 'ft3', values: [{ a: 0, b: 0 }, { a: 4, b: 141.264 }]
}];

TestCase.units(Volume, tests);

it('Describe and getUnits return all units', () => {
    expect(Volume.getUnits().length === Volume.describe().length).toBeTruthy()
});
