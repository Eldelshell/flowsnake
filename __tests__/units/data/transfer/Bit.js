import _ from 'lodash';
import Transfer from '../../../lib/converters/data/transfer/Transfer';
import TestCase from '../../TestCase';

const tests = [{
    from: 'Mbps', to: 'bps', values: [{ a: 0, b: 0 }, { a: 1.5, b: 1500000 }]
},{
    from: 'Mbps', to: 'kbps', values: [{ a: 0, b: 0 }, { a: 1.5, b: 1500 }]
},{
    from: 'Mbps', to: 'Gbps', values: [{ a: 0, b: 0 }, { a: 1.5, b: 0.0015 }]
}];

TestCase.units(Transfer, tests);
