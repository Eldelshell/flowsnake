import _ from 'lodash';
import Volume from '../../lib/converters/volume/Volume';
import VolumeMetric from '../../lib/converters/volume/Metric';
import TestCase from '../TestCase';

const tests = [{
    from: 'ml', to: 'l', values: [{ a: 0, b: 0 }, { a: 1000, b: 1 }]
},{
    from: 'l', to: 'ml', values: [{ a: 0, b: 0 }, { a: 1, b: 1000 }]
},{
    from: 'cm3', to: 'l', values: [{ a: 0, b: 0 }, { a: 1, b: 0.001 }, { a: 4.9, b: 0.0049 }]
},{
    from: VolumeMetric.Liter, to: VolumeMetric.Mililiter, values: [{ a: 0, b: 0 }, { a: 1, b: 1000 }]
}];

TestCase.units(Volume, tests);
