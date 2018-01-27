import _ from 'lodash';
import Volume from '../../../lib/converters/volume/Volume';
import VolumeImperialUK from '../../../lib/converters/volume/ImperialUK';
import TestCase from '../TestCase';

const tests = [{
    from: 'fl-oz-uk', to: 'gal-uk', values: [{ a: 0, b: 0 }, { a: 1000, b: 6.25 }]
},{
    from: 'gal-uk', to: 'fl-oz-uk', values: [{ a: 0, b: 0 }, { a: 1, b: 160 }]
},{
    from: VolumeImperialUK.FluidOunce, to: VolumeImperialUK.Gallon, values: [{ a: 0, b: 0 }, { a: 1000, b: 6.25 }]
},{
    from: VolumeImperialUK.Gallon, to: VolumeImperialUK.FluidOunce, values: [{ a: 0, b: 0 }, { a: 1, b: 160 }]
}];

TestCase.units(Volume, tests);
