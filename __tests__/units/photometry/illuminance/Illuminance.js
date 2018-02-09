import _ from 'lodash';
import Illuminance from '../../../../lib/units/photometry/illuminance/Illuminance';
import TestCase from '../../TestCase';

const tests = [{
    from: 'fc', to: 'lx', values: [{ a: 0, b: 0 }, { a: 1, b: 10.76391 }]
},{
    from: 'lx', to: 'fc', values: [{ a: 0, b: 0 }, { a: 1, b: 0.09 }]
}];

TestCase.units(Illuminance, tests);
