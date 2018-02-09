import _ from 'lodash';
import Decimal from 'decimal.js';
import Calculator from '../Calculator';
import Resistance from '../../units/electricity/Resistance';

const E6 = [1, 10, 15, 22, 33, 47, 68];

const E12 = [1, 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82];

const E24 = [1, 10, 11, 12, 13, 14, 16, 18, 20, 22, 24, 27, 30, 33, 36, 39, 43, 47, 51, 56, 62, 68, 75, 82, 91];

const E48 = [
    1, 10, 11, 12, 13, 14, 16, 18, 20, 22, 24, 27, 30, 33, 36, 39, 43, 47, 51, 56, 62, 68, 75, 82, 91, 100, 105, 110,
    115, 121, 127, 133, 140, 147, 154, 162, 169, 178, 187, 196, 205, 215, 226, 237, 249, 261, 274, 287, 301, 316, 332,
    348, 365, 383, 402, 422, 442, 464, 487, 511, 536, 562, 590, 619, 649, 681, 715, 750, 787, 825, 866, 909, 953
];

const E96 = [
    1, 10, 100, 102, 105, 107, 110, 113, 115, 118, 121, 124, 127, 130, 133, 137, 140, 143, 147, 150, 154, 158, 162,
    165, 169, 174, 178, 182, 187, 191, 196, 200, 205, 210, 215, 221, 226, 232, 237, 243, 249, 255, 261, 267, 274, 280,
    287, 294, 301, 309, 316, 324, 332, 340, 348, 357, 365, 374, 383, 392, 402, 412, 422, 432, 442, 453, 464, 475, 487,
    499, 511, 523, 536, 549, 562, 576, 590, 604, 619, 634, 649, 665, 681, 698, 715, 732, 750, 768, 787, 806, 825, 845,
    866, 887, 909, 931, 953, 976
];

const E192 = [
    1, 10, 100, 101, 102, 104, 105, 106, 107, 109, 110, 111, 113, 114, 115, 117, 118, 120, 121, 123, 124, 126, 127,
    129, 130, 132, 133, 135, 137, 138, 140, 142, 143, 145, 147, 149, 150, 152, 154, 156, 158, 160, 162, 164, 165, 167,
    169, 172, 174, 176, 178, 180, 182, 184, 187, 189, 191, 193, 196, 198, 200, 203, 205, 208, 210, 213, 215, 218, 221,
    223, 226, 229, 232, 234, 237, 240, 243, 246, 249, 252, 255, 258, 261, 264, 267, 271, 274, 277, 280, 284, 287, 291,
    294, 298, 301, 305, 309, 312, 316, 320, 324, 328, 332, 336, 340, 344, 348, 352, 357, 361, 365, 370, 374, 379, 383,
    388, 392, 397, 402, 407, 412, 417, 422, 427, 432, 437, 442, 448, 453, 459, 464, 470, 475, 481, 487, 493, 499, 505,
    511, 517, 523, 530, 536, 542, 549, 556, 562, 569, 576, 583, 590, 597, 604, 612, 619, 626, 634, 642, 649, 657, 665,
    673, 681, 690, 698, 706, 715, 723, 732, 741, 750, 759, 768, 777, 787, 796, 806, 816, 825, 835, 845, 856, 866, 876,
    887, 898, 909, 920, 931, 942, 953, 965, 976, 988
];

const DIGITS = {
    black:  0,
    brown:  1,
    red:    2,
    orange: 3,
    yellow: 4,
    green:  5,
    blue:   6,
    violet: 7,
    grey:   8,
    white:  9
};

const MULTIPLIERS = {
    black:  1,
    brown:  10,
    red:    100,
    orange: 1000,
    yellow: 10000,
    green:  100000,
    blue:   1000000,
    violet: 10000000,
    grey:   100000000,
    white:  1000000000,
    gold:   0.1,
    silver: 0.01
};

const TOLERANCES = {
    black:  1,
    brown:  2,
    green:  0.5,
    blue:   0.25,
    violet: 0.1,
    grey:   0.05,
    gold:   5,
    silver: 10
};

const TCR = {
    black:  100,
    brown:  50,
    red:    15,
    orange: 25,
    blue:   10,
    violet: 5
};

/**
 * Calculates the values or the colors of a resistor
 */
export default class Resistor extends Calculator {

    static name() {
        return 'resistor';
    }

    /**
     * Object we calculate when given the colors of a resistor.
     * @type {ResistorResult}
     * @property {Resistance} resistance - the resistance in Ohms.
     * @property {Number} tolerance - the tolerance in percent.
     * @property {Number} decade - the e-serie or decade if found.
     * @property {Number} tcr - the temperature coeficient for 6 bands resistors.
     * @property {Resistance} range.min - the lower tolerance range in Ohms.
     * @property {Resistance} range.max - the higher tolerance range in Ohms.
     */

    /**
     * Calculates the resistance or the colors of a resistor.
     * @param  {Array<String>|Object} value - the values to convert.
     * @return {Array<String>|ResistorResult} - an array with the color codes or a ResistorResult.
     */
    calculate(value){
        if(_.isArray(value)){
            return this._colorsToValue(value);
        }else{
            return this._valuesToColors(value);
        }
    }

    /**
     * Solves the resistor with the given band colors.
     * @param  {Array<String>} colors - the colors.
     * @return {ResistorResult} the result of solving this resistor.
     */
    _colorsToValue(colors){
        let tolerance = 20;

        if(colors.length < 3 || colors.length > 6){
            throw new Error(`Invalid number of colors ${colors.length}`);
        }

        if(colors.length === 4){
            tolerance = this._getTolenranceByColor(colors[3]);
        }else if(colors.length >= 5){
            tolerance = this._getTolenranceByColor(colors[4]);
        }

        let res = null;

        if(colors.length === 3 || colors.length === 4){
            res = (DIGITS[colors[0]] * 10) + (DIGITS[colors[1]] * 1);
            res *= MULTIPLIERS[colors[2]];
        }else if(colors.length >= 5){
            res = (DIGITS[colors[0]] * 100) + (DIGITS[colors[1]] * 10);
            res += DIGITS[colors[2]];
            res *= MULTIPLIERS[colors[3]];
        }

        let tcr = null;

        if(colors.length === 6){
            tcr = TCR[colors[5]];
        }

        const rangePercent = Decimal.mul(tolerance, res).div(100);

        return {
            resistance: Resistance.of(res, 'Ω'),
            tolerance: tolerance,
            decade: this._getSerie(res, colors.length, tolerance),
            tcr: tcr, // ppm/K
            range: {
                min: Resistance.of(Decimal.sub(res, rangePercent), 'Ω'),
                max: Resistance.of(Decimal.add(res, rangePercent), 'Ω')
            }
        };
    }

    /**
     * For the given values, obtain the colors.
     * @param  {Resistance} resistance - the resistance.
     * @param  {Number} bands - number between 3 and 6
     * @param  {Number} [tolerance] - the tolerance. If not given we'll use either 10 or 0.005
     * @return {Array<String>} the array of colors.
     */
    _valuesToColors({resistance, bands, tolerance}){
        const ohm = Resistance.of(0, 'Ω');
        const r = resistance.to(ohm);
        const multiplier = (bands === 3)
            ? Decimal.log10(r).floor().sub(1).toNumber()
            : Decimal.log10(r).floor().sub(bands - 3).toNumber();

        const colors = [];
        const res = r.toDP(0).toString();
        const limit = bands === 3 ? 2 : bands - 2;
        for(let i = 0; i < limit; i++) {
            const digit = Number.parseInt(res.charAt(i));
            colors.push(this._getColorByValue(DIGITS, digit));
        }

        colors.push(this._getColorByValue(MULTIPLIERS, 1*(10**multiplier)));

        if(bands === 3){
            return colors;
        }

        if(!tolerance){
            // No tolerance? Return either 0.005 or 10
            colors.push(this._getColorByValue(TOLERANCES, r > 100 ? 10 : 0.005));
        }else{
            colors.push(this._getColorByValue(TOLERANCES, tolerance));
        }

        return colors;
    }

    /**
     * Obtains the tolerance for the given color.
     * @param  {String} color - the tolerance color.
     * @return {Number} the tolerance
     */
    _getTolenranceByColor(color){
        for (const k in TOLERANCES) {
            if (!TOLERANCES.hasOwnProperty(k)) {
                continue;
            }

            if(TOLERANCES[color]){
                return TOLERANCES[color];
            }
        }
        throw new Error(`Invalid tolerance color ${color}`);
    }

    /**
     * Obtains the color for the given value on the given collection of colors.
     * @param  {Object} collection - any of the defined color collections.
     * @param  {Number} value - the value
     * @return {String} a color.
     */
    _getColorByValue(collection, value){
        for (const k in collection) {
            if (!collection.hasOwnProperty(k)) {
                continue;
            }

            if(collection[k] === value){
                return k;
            }
        }
        throw new Error(`No color for ${value}`);
    }

    /**
     * Gets the E-serie of a resistor.
     * @param  {Number} resistance - the resistance.
     * @param  {Number} bands - number of color bands.
     * @param  {Number} tolerance - the tolerance.
     * @return {Number} the E-serie or null.
     */
    _getSerie(resistance, bands, tolerance){
        if (bands === 3 && E6.includes(resistance)) {
            return 6;
        }

        if ((tolerance === 10) && bands === 4 && E12.includes(resistance)) {
            return 12;
        }

        if ((tolerance === 5 || tolerance === 2 || tolerance === 1) && bands === 4 && E24.includes(resistance)) {
            return 24;
        }

        if (tolerance === 2 && bands >= 5 && E48.includes(resistance)) {
            return 48;
        }

        if (tolerance === 1 && bands >= 5 && E96.includes(resistance)) {
            return 96;
        }

        if ((tolerance === 0.5 || tolerance === 0.25 || tolerance === 0.1) && bands >= 5 && E192.includes(resistance)) {
            return 192;
        }

        return null;
    }

}
