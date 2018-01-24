import _ from 'lodash';
import Storage from '../../../lib/converters/data/storage/Storage';
import TestCase from '../../TestCase';

const tests = [{
    from: 'bit', to: 'Kb', values: [{ a: 0, b: 0 }, { a: 1000, b: 1 }]
},{
    from: 'Mb', to: 'Kb', values: [{ a: 0, b: 0 }, { a: 1, b: 1000 }]
}];

TestCase.units(Storage, tests);
