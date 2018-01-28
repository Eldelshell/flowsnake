import Calculator from './Calculator';
import Resistance from '../units/electricity/Resistance'; // Ohm
import Potential from '../units/electricity/Potential'; // V
import Current from '../units/electricity/Current'; // A
import Power from '../units/Power'; // W

/**
 * Ohm's Law calculator
 */
export default class OhmsLaw extends Calculator {

    static name() {
        return 'ohms-law';
    }

    constructor() {
        super(6);
    }

    /**
     * Calculates current (A), resistance(Ω), voltage (V) and power (W)
     * @param  {Unit} current - current through the conductor
     * @param  {Unit} voltage - voltage measured across the conductor
     * @param  {Unit} resistance - resistance of the conductor
     * @return {Object} the results object.
     */
    calculate({current, resistance, voltage}){
        this.validate(voltage, 'Potential');
        this.validate(resistance, 'Resistance');
        this.validate(current, 'Current');

        if(voltage && resistance) {
            const c = voltage.value / resistance.value;
            const p = voltage.value * c;
            return {
                current: Current.of(c, 'A'),
                resistance: resistance,
                voltage: voltage,
                power: Power.of(p, 'W')
            };
        }

        if(current && resistance) {
            const v = current.value * resistance.value;
            const p = v * current.value;
            return {
                current: current,
                resistance: resistance,
                voltage: Potential.of(v, 'V'),
                power: Power.of(p, 'W')
            };
        }

        if(current && voltage) {
            const r = voltage.value / current.value;
            const p = voltage.value * current.value;
            return {
                current: current,
                resistance: Resistance.of(r, 'Ω'),
                voltage: voltage,
                power: Power.of(p, 'W')
            };
        }

        throw new Error('Invalid values given. Please provide two of the three values: current, resistance or voltage');
    }

    /**
     * Validates that the value is of the given type
     * @param  {Unit} value - a unit
     * @param  {String} expected - the expected type.
     * @throws {Error} if the value is not valid.
     * @returns {undefined}
     */
    validate(value, expected){
        if(!value){
            return;
        }

        if(!value.type){
            throw new Error('Invalid argument. A Unit is expected.');
        }

        if(value.type !== expected){
            throw new Error(`Invalid unit type ${expected} for value ${value.type}`);
        }
    }

}
