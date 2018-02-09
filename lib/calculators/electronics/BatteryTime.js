import _ from 'lodash';
import Calculator from '../Calculator';
import Time from '../../units/Time';
import Charge from '../../units/electricity/Charge';
import Current from '../../units/electricity/Current';

const MilliAmpereHour = Charge.of(0, 'mAh');
const Ampere = Current.of(0, 'mA');
const Hour = Time.of(0, 'h');
const DEFAUL_CONSUMPTION_RATE = 0.7;

/**
 * Calculates battery life time, the capacity or the consumption.
 * We use the base formula time(h) = (capacity(mAh)/consumption(mA)) * consumptionRate(cr)
 */
export default class BatteryTime extends Calculator {

    static name() {
        return 'battery-time';
    }

    /**
     * The battery time calculator results.
     * @type {BatteryTimeResult}
     * @param  {Unit<Charge>} capacity - the battery charge in mAh.
     * @param  {Unit<Current>} consumption - the consumption in mA.
     * @param  {Unit<Time>} time - the time in hours.
     */

    /**
     * Calculates the battery time, the capacity or the consumption for the given values.
     * We require at least a pair of them.
     * @param  {Unit<Charge>} [capacity] - the battery charge
     * @param  {Unit<Current>} [consumption] - the consumption
     * @param  {Unit<Time>} [time] - the time.
     * @param  {Unit<Time>} [cr] - the consumption rate. Defaults to 0.7
     * @return {BatteryTimeResult} the results.
     * @throws {Error} if at least two of capacity, consumption or time isn't given
     */
    calculate({capacity, consumption, time, cr}){
        cr = _.isFinite(cr) ? cr : DEFAUL_CONSUMPTION_RATE;

        if(capacity && consumption){
            return this._solveTime(capacity, consumption, cr);
        }else if(time && consumption){
            return this._solveCapacity(consumption, time, cr);
        }else if(capacity && time){
            return this._solveConsumption(capacity, time, cr);
        }
        throw new Error('Invalid arguments. At least two of the three values is required.');
    }

    _solveCapacity(consumption, time, cr){
        this.validate(consumption, 'Current');
        this.validate(time, 'Time');

        const mA = consumption.to(Ampere);
        const h = time.to(Hour);
        const mAh = h.div(cr).mul(mA);

        return {
            capacity: Charge.of(mAh, 'mAh'),
            consumption: Current.of(mA, 'mA'),
            time: Time.of(h, 'h')
        };
    }

    _solveConsumption(capacity, time, cr){
        this.validate(capacity, 'Charge');
        this.validate(time, 'Time');

        const mAh = capacity.to(MilliAmpereHour);
        const h = time.to(Hour);
        const mA = mAh.div(h.div(cr));

        return {
            capacity: Charge.of(mAh, 'mAh'),
            consumption: Current.of(mA, 'mA'),
            time: Time.of(h, 'h')
        };
    }

    _solveTime(capacity, consumption, cr){
        this.validate(capacity, 'Charge');
        this.validate(consumption, 'Current');

        const mAh = capacity.to(MilliAmpereHour);
        const mA = consumption.to(Ampere);
        const h = mAh.div(mA).mul(cr);

        return {
            capacity: Charge.of(mAh, 'mAh'),
            consumption: Current.of(mA, 'mA'),
            time: Time.of(h, 'h')
        };
    }

}
