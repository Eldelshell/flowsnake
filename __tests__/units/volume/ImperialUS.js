import _ from 'lodash';
import Volume from '../../../lib/converters/volume/Volume';
import VolumeImperialUS from '../../../lib/converters/volume/ImperialUS';
import TestCase from '../TestCase';

const tests = [{
    from: 'fl-oz-us', to: 'gal-us', values: [{ a: 0, b: 0 }, { a: 1000, b: 7.8125 }]
},{
    from: 'fl-oz-us', to: 'tsp-us', values: [{ a: 0, b: 0 }, { a: 1000, b: 6000 }]
},{
    from: 'gal-us', to: 'fl-oz-us', values: [{ a: 0, b: 0 }, { a: 1, b: 128 }]
},{
    from: VolumeImperialUS.FluidOunce, to: VolumeImperialUS.Gallon, values: [{ a: 0, b: 0 }, { a: 1000, b: 7.8125 }]
},{
    from: VolumeImperialUS.Gallon, to: VolumeImperialUS.FluidOunce, values: [{ a: 0, b: 0 }, { a: 1, b: 128 }]
}];

TestCase.units(Volume, tests);
