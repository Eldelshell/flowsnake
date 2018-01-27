import _ from 'lodash';
import Storage from '../../../../lib/units/data/storage/Storage';
import TestCase from '../../TestCase';

const tests = [{
    from: 'KB', to: 'byte', values: [{ a: 0, b: 0 }, { a: 1, b: 1000 }]
},{
    from: 'MB', to: 'byte', values: [{ a: 0, b: 0 }, { a: 1, b: 1000000 }]
},{
    from: 'MB', to: 'KB', values: [{ a: 0, b: 0 }, { a: 1, b: 1000 }]
}];

TestCase.units(Storage, tests);
