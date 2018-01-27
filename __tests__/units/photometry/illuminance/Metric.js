import _ from 'lodash';
import Illuminance from '../../../../lib/units/photometry/illuminance/Illuminance';
import TestCase from '../../TestCase';

const tests = [{
    from: 'lx', to: 'ph', values: [{ a: 0, b: 0 }, { a: 10000, b: 1 }]
},{
    from: 'lx', to: 'nx', values: [{ a: 0, b: 0 }, { a: 1, b: 1000 }]
},{
    from: 'lx', to: 'mc', values: [{ a: 0, b: 0 }, { a: 1, b: 1 }]
},{
    from: 'lx', to: 'lm/m2', values: [{ a: 0, b: 0 }, { a: 1, b: 1 }]
},{
    from: 'lx', to: 'W/cm2', values: [{ a: 0, b: 0 }, { a: 50000000, b: 7.32064 }]
}];

TestCase.units(Illuminance, tests);
