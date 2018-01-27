import _ from 'lodash';
import Storage from '../../../../lib/units/data/storage/Storage';
import TestCase from '../../TestCase';

const tests = [{
    from: 'i', to: 'Ki', values: [{ a: 0, b: 0 }, { a: 1024, b: 1 }]
},{
    from: 'Mi', to: 'Ki', values: [{ a: 0, b: 0 }, { a: 1, b: 1024 }]
}];

TestCase.units(Storage, tests);
