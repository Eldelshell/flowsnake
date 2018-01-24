import _ from 'lodash';
import Data from '../../lib/converters/data/Data';
import TestCase from '../TestCase';

const tests = [{
    from: 'bibit', to: 'Ki', values: [{ a: 0, b: 0 }, { a: 1024, b: 1 }]
},{
    from: 'Mi', to: 'Ki', values: [{ a: 0, b: 0 }, { a: 1, b: 1024 }]
}];

TestCase.units(Data, tests);
