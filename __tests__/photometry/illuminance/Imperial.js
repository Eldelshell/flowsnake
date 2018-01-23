import _ from 'lodash';
import Decimal from 'decimal.js';
import Illuminance from '../../../lib/converters/photometry/illuminance/Illuminance';
import TestCase from '../../TestCase';

const tests = [{
    from: 'fc', to: 'lm/ft2', values: [{ a: 0, b: 0 }, { a: 1, b: 1 }]
}];

TestCase.units(Illuminance, tests);
