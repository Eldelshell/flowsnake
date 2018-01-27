import Gas from '../../lib/units/Gas';
import TestCase from './TestCase';

const tests = [{
    from: 'l/100km',
    to: 'km/l',
    values: [{ a: 0, b: Infinity }, { a: 1, b: 100 }, { a: 4.4, b: 22.7273 }, { a: 50, b: 2 }]
},{
    from: 'l/100km',
    to: 'mi/l',
    values: [{ a: 0, b: Infinity }, { a: 1, b: 62.1364 }, { a: 4.4, b: 14.1219 }, { a: 50, b: 1.24273 }]
},{
    from: 'l/100km',
    to: 'mpg-us',
    values: [{ a: 0, b: Infinity }, { a: 1, b: 235.212 }, { a: 4.4, b: 53.4571 }, { a: 50, b: 4.70424 }]
},{
    from: 'l/100km',
    to: 'mpg-uk',
    values: [{ a: 0, b: Infinity }, { a: 1, b: 282.478 }, { a: 4.4, b: 64.1996 }, { a: 50, b: 5.64953 }]
},{
    from: 'km/l',
    to: 'l/100km',
    values: [{ a: 0, b: Infinity }, { a: 1, b: 100 }, { a: 4.4, b: 22.7273 }, { a: 50, b: 2 }, { a: 200, b: 0.5 }]
},{
    from: 'km/l',
    to: 'mi/l',
    values: [{ a: 0, b: 0 }, { a: 1, b: 0.62 }, { a: 4.4, b: 2.728 }, { a: 50, b: 31 }, { a: 200, b: 124 }]
},{
    from: 'km/l',
    to: 'mpg-us',
    values: [{ a: 0, b: 0 }, { a: 1, b: 2.35 }, { a: 4.4, b: 10.34 }, { a: 50, b: 117.5 }, { a: 200, b: 470 }]
},{
    from: 'km/l',
    to: 'mpg-uk',
    values: [{ a: 0, b: 0 }, { a: 1, b: 2.82 }, { a: 4.4, b: 12.408 }, { a: 50, b: 141 }, { a: 200, b: 564 }]
},{
    from: 'mi/l',
    to: 'l/100km',
    values: [{ a: 0, b: Infinity }, { a: 1, b: 62.1364 }, { a: 4.4, b: 14.1219 }, { a: 50, b: 1.24273 }]
},{
    from: 'mi/l',
    to: 'km/l',
    values: [{ a: 0, b: 0 }, { a: 1, b: 1.60 }, { a: 4.4, b: 7.04 }, { a: 50, b: 80 }]
},{
    from: 'mi/l',
    to: 'mpg-us',
    values: [{ a: 0, b: 0 }, { a: 1, b: 3.78 }, { a: 4.4, b: 16.632 }, { a: 50, b: 189 }]
},{
    from: 'mi/l',
    to: 'mpg-uk',
    values: [{ a: 0, b: 0 }, { a: 1, b: 4.54 }, { a: 4.4, b: 19.976 }, { a: 50, b: 227 }]
},{
    from: 'mpg-us',
    to: 'l/100km',
    values: [{ a: 0, b: Infinity }, { a: 1, b: 235.212 }, { a: 4.4, b: 53.4571 }, { a: 50, b: 4.70424 }]
},{
    from: 'mpg-us',
    to: 'km/l',
    values: [{ a: 0, b: 0 }, { a: 1, b: 0.4251 }, { a: 4.4, b: 1.87044 }, { a: 50, b: 21.255 }]
},{
    from: 'mpg-us',
    to: 'mi/l',
    values: [{ a: 0, b: 0 }, { a: 1, b: 0.2642 }, { a: 4.4, b: 1.16248 }, { a: 50, b: 13.21 }]
},{
    from: 'mpg-us',
    to: 'mpg-uk',
    values: [{ a: 0, b: 0 }, { a: 1, b: 1.201 }, { a: 4.4, b: 5.2844 }, { a: 50, b: 60.05 }]
},{
    from: 'mpg-uk',
    to: 'l/100km',
    values: [{ a: 0, b: Infinity }, { a: 1, b: 282.478 }, { a: 4.4, b: 64.1996 }, { a: 50, b: 5.64953 }]
},{
    from: 'mpg-uk',
    to: 'km/l',
    values: [{ a: 0, b: 0 }, { a: 1, b: 0.354 }, { a: 4.4, b: 1.5576 }, { a: 50, b: 17.7 }]
},{
    from: 'mpg-uk',
    to: 'mi/l',
    values: [{ a: 0, b: 0 }, { a: 1, b: 0.22 }, { a: 4.4, b: 0.968 }, { a: 50, b: 11 }]
},{
    from: 'mpg-uk',
    to: 'mpg-us',
    values: [{ a: 0, b: 0 }, { a: 1, b: 0.832 }, { a: 4.4, b: 3.6608 }, { a: 50, b: 41.6 }]
}];

TestCase.units(Gas, tests);
