import _ from 'lodash';
import Storage from '../../../lib/converters/storage/Storage';
import TestCase from '../TestCase';

const tests = [{
    from: 'kB', to: 'byte', values: [{ a: 0, b: 0 }, { a: 1, b: 1000 }]
},{
    from: 'MB', to: 'byte', values: [{ a: 0, b: 0 }, { a: 1, b: 1000000 }]
},{
    from: 'MB', to: 'kB', values: [{ a: 0, b: 0 }, { a: 1, b: 1000 }]
}];

TestCase.units(Storage, tests);
