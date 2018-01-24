import _ from 'lodash';
import Data from '../../lib/converters/data/Data';
import TestCase from '../TestCase';

const tests = [{
    from: 'kB', to: 'byte', values: [{ a: 0, b: 0 }, { a: 1, b: 1000 }]
},{
    from: 'MB', to: 'byte', values: [{ a: 0, b: 0 }, { a: 1, b: 1000000 }]
},{
    from: 'MB', to: 'kB', values: [{ a: 0, b: 0 }, { a: 1, b: 1000 }]
}];

TestCase.units(Data, tests);
