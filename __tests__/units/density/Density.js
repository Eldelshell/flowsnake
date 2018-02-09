import _ from 'lodash';
import Density from '../../../lib/units/density/Density';
import TestCase from '../TestCase';

const tests = [{
    // Liter <-> Metric
    from: 'g/m3', to: 'g/l', values: [{ a: 1000, b: 1 }]
},{
    from: 'g/l', to: 'g/m3', values: [{ a: 1, b: 1000 }]
},{ // Metric <-> Pound
    from: 'kg/m3', to: 'lb/gal', values: [{ a: 1000, b: 8.35 }]
},{
    from: 'lb/gal', to: 'g/m3', values: [{ a: 1, b: 119826.43 }]
},{ // Liter <-> Pound
    from: 'g/l', to: 'lb/gal', values: [{ a: 1000, b: 8.35 }]
},{
    from: 'lb/gal', to: 'g/l', values: [{ a: 1, b: 119.83 }]
},{ // Metric <-> Ounce
    from: 'g/m3', to: 'oz/gal', values: [{ a: 1000, b: 0.13 }]
},{
    from: 'oz/gal', to: 'g/m3', values: [{ a: 1, b: 7489.15 }]
},{ // Liter <-> Ounce
    from: 'g/l', to: 'oz/gal', values: [{ a: 1000, b: 133.53 }]
},{
    from: 'oz/gal', to: 'g/l', values: [{ a: 1, b: 7.49 }]
},{ // Pound <-> Ounce
    from: 'lb/gal', to: 'oz/gal', values: [{ a: 1, b: 16 }]
},{
    from: 'oz/gal', to: 'lb/gal', values: [{ a: 1, b: 0.0625 }]
}];

TestCase.units(Density, tests);
