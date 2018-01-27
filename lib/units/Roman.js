/**
 * Converts from/to arabic/roman numbers
 * License goes to this post:
 * http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
 */

import Unit from './Unit';
import System from './System';
import Descriptor from './Descriptor';

const TYPE = 'Roman';

const SYSTEM = new System('Roman');

const ROMANS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

const toRoman = (value) => {
    if(value <= 0 || value > 3999){
        throw new Error('Invalid roman number');
    }

    const init = { str: '', value: value };
    const res = Object.keys(ROMANS).reduce((previous, symbol) => {
        previous.str += symbol.repeat(previous.value / ROMANS[symbol]);
        previous.value %= ROMANS[symbol];
        return previous;
    }, init);
    return res.str;
};

const toArab = (roman) => {
    const arr = roman.toUpperCase().split('');
    let num = 0;
    let val = 0;
    while (arr.length) {
        val = ROMANS[arr.shift()];
        num += val * (val < ROMANS[arr[0]] ? -1:1);
    }
    return num;
};

const Romans = {
    Arabic: new Unit({
        id: 'arabic',
        name: 'Arabic',
        type: TYPE,
        system: SYSTEM,
        converters: {
            Roman: toRoman
        }
    }),
    Roman: new Unit({
        id: 'roman',
        name: 'Roman',
        type: TYPE,
        system: SYSTEM,
        converters: {
            Arabic: toArab
        }
    })
};

const Roman = new Descriptor([Romans]);
export default Roman;
