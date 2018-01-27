import _ from 'lodash';
import Transfer from '../../../lib/converters/data/transfer/Transfer';
import TestCase from '../../TestCase';

const tests = [{
    from: 'MB/s', to: 'b/s', values: [{ a: 0, b: 0 }, { a: 2.6, b: 2600000 }]
},{
    from: 'MB/s', to: 'kB/s', values: [{ a: 0, b: 0 }, { a: 2.6, b: 2600 }]
},{
    from: 'MB/s', to: 'GB/s', values: [{ a: 0, b: 0 }, { a: 2.6, b: 0.0026 }]
}];

TestCase.units(Transfer, tests);
