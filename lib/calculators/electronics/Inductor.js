import _ from 'lodash';
import Decimal from 'decimal.js';
import Calculator from '../Calculator';
import Inductance from '../../units/electricity/Inductance';

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
    gold:   0.1,
    silver: 0.01
};

const TOLERANCES = {
    black:  1,
    gold:   5,
    silver: 10
};

/**
 * Calculates the values or the colors of a inductor
 */
export default class Inductor extends Calculator {

    static name() {
        return 'inductor';
    }

    /**
     * Object we calculate when given the colors of a inductor.
     * @type {InductorResult}
     * @property {Inductance} inductance - the inductance in Henry.
     * @property {Number} tolerance - the tolerance in percent.
     * @property {Inductance} range.min - the lower tolerance range in Henry.
     * @property {Inductance} range.max - the higher tolerance range in Henry.
     */

    /**
     * Calculates the inductance or the colors of a inductor.
     * @param  {Array<String>|Object} value - the values to convert.
     * @return {Array<String>|InductorResult} - an array with the color codes or a InductorResult.
     */
    calculate(value){
        if(_.isArray(value)){
            return this._colorsToValue(value);
        }else{
            return this._valuesToColors(value);
        }
    }

    /**
     * Solves the inductor with the given band colors.
     * @param  {Array<String>} colors - the colors.
     * @return {InductorResult} the result of solving this inductor.
     */
    _colorsToValue(colors){
        if(colors.length !== 4){
            throw new Error(`Invalid number of colors ${colors.length}`);
        }

        const tolerance = this._getTolenranceByColor(colors[3]);
        let res = (DIGITS[colors[0]] * 10) + (DIGITS[colors[1]] * 1);
        res *= MULTIPLIERS[colors[2]];

        const rangePercent = Decimal.mul(tolerance, res).div(100);

        return {
            inductance: Inductance.of(res, 'µH'),
            tolerance: tolerance,
            range: {
                min: Inductance.of(Decimal.sub(res, rangePercent), 'µH'),
                max: Inductance.of(Decimal.add(res, rangePercent), 'µH')
            }
        };
    }

    /**
     * For the given values, obtain the colors.
     * @param  {Inductance} inductance - the inductance.
     * @param  {Number} [tolerance] - the tolerance. If not given we'll use either 10 or 0.005
     * @return {Array<String>} the array of colors.
     */
    _valuesToColors({inductance, tolerance}){
        const h = Inductance.of(0, 'µH');
        const r = inductance.to(h);
        const colors = [];
        const res = r.toDP(0).toString();
        for(let i = 0; i < 2; i++) {
            const digit = Number.parseInt(res.charAt(i));
            colors.push(this._getColorByValue(DIGITS, digit));
        }

        const multiplier = Decimal.log10(r).floor().sub(1).toNumber();
        colors.push(this._getColorByValue(MULTIPLIERS, 1*(10**multiplier)));

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

}
