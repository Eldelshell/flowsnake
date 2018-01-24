import _ from 'lodash';
import Transfer from '../../../lib/converters/data/transfer/Transfer';
import TestCase from '../../TestCase';

const tests = [{
    from: 'MB/s', to: 'Mbps', values: [{ a: 0, b: 0 }, { a: 2.6, b: 20.8 }]
},{
    from: 'Mbps', to: 'MB/s', values: [{ a: 0, b: 0 }, { a: 5.4, b: 0.675 }]
}];

TestCase.units(Transfer, tests);
