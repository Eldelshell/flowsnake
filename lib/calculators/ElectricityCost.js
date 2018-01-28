import Calculator from './Calculator';
import Power from '../units/Power';
import Energy from '../units/Energy';
import Time from '../units/Time';

/**
 * Calculates the total consumption and electricity cost of an appliance during a time frame
 */
export default class ElectricityCost extends Calculator {

    static name() {
        return 'electricity-cost';
    }

    constructor() {
        super(6);
    }

    /**
    * @typedef {Object} ElectricityCostResult
    * @property {Number} cost - the total electricity cost.
    * @property {Unit<Energy>} consumption - the total kWh consumed.
    */

    /**
     * Calculates the total consumption and electricity cost of an appliance during a time frame
     * @param  {Unit} price - price per kWh
     * @param  {Unit} power - power consumption
     * @param  {Unit} time - time frame to use
     * @return {ElectricityCostResult} the results object.
     */
    calculate({price, time, power}){
        this.validate(power, 'Power');
        this.validate(time, 'Time');

        // First we convert to kW because price is usually set with this unit.
        const kW = power.to(Power.getUnit('kW'));

        // Convert the time to hours because again, the price is on kWh
        const hours = time.to(Time.getUnit('h'));

        // Calculate how many kWh are consumed during the time frame
        const consumption = Energy.of(kW * hours, 'kWh');

        // calculate the price per hours
        const cost = consumption.value * price;

        return {
            consumption: consumption,
            cost: cost
        };
    }

}
