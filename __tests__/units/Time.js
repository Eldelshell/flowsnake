import Time from '../../lib/units/Time';
import TestCase from './TestCase';

const tests = [{
    from: 's', to: 'min', values: [{ a: 0, b: 0 }, { a: 60, b: 1 }]
},{
    from: 'week', to: 'd', values: [{ a: 0, b: 0 }, { a: 1, b: 7 }]
},{
    from: 'year', to: 'min', values: [{ a: 0, b: 0 }, { a: 1, b: 525960 }]
}];

TestCase.units(Time, tests);
