import _ from 'lodash';
import Volume from '../../../lib/units/volume/Volume';
// import CubicMeter from '../../../lib/units/volume/CubicMeter';
import TestCase from '../TestCase';

const tests = [{
    from: 'cm3', to: 'm3', values: [{ a: 0, b: 0 }, { a: 1000, b: 0.001 }, { a: 4.9, b: 0.0000049 }]
// },{
//     from: CubicMeter.CubicMeter, to: CubicMeter.CubicCentimeter, values: [{ a: 0, b: 0 }, { a: 1, b: 1000000 }]
}];

TestCase.units(Volume, tests);
