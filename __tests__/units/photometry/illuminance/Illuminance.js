import _ from 'lodash';
import Illuminance from '../../../lib/converters/photometry/illuminance/Illuminance';
import TestCase from '../../TestCase';

const tests = [{
    from: 'fc', to: 'lx', values: [{ a: 0, b: 0 }, { a: 1, b: 10.7639 }]
},{
    from: 'lx', to: 'fc', values: [{ a: 0, b: 0 }, { a: 1, b: 0.092903 }]
}];

TestCase.units(Illuminance, tests);
