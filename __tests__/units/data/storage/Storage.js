import _ from 'lodash';
import Storage from '../../../../lib/units/data/storage/Storage';
import TestCase from '../../TestCase';

const tests = [{
    from: 'bit', to: 'byte', values: [{ a: 0, b: 0 }, { a: 1, b: 0.125 }]
},{
    from: 'Mi', to: 'bit', values: [{ a: 0, b: 0 }, { a: 1, b: 1024 }]
},{
    from: 'MiB', to: 'byte', values: [{ a: 0, b: 0 }, { a: 1, b: 1024 }]
},{
    from: 'Gb', to: 'GB', values: [{ a: 0, b: 0 }, { a: 1, b: 0.125 }]
},{
    from: 'bit', to: 'Mi', values: [{ a: 0, b: 0 }, { a: 1024, b: 1 }]
},{
    from: 'byte', to: 'MiB', values: [{ a: 0, b: 0 }, { a: 1024, b: 1 }]
},{
    from: 'Mi', to: 'byte', values: [{ a: 0, b: 0 }, { a: 1, b: 131073 }]
},{
    from: 'byte', to: 'Mi', values: [{ a: 0, b: 0 }, { a: 131073, b: 1 }]
},{
    from: 'KiB', to: 'bit', values: [{ a: 0, b: 0 }, { a: 1, b: 8192 }]
},{
    from: 'bit', to: 'KiB', values: [{ a: 0, b: 0 }, { a: 1000000, b: 122.07 }]
}];

TestCase.units(Storage, tests);
