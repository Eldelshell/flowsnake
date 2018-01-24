import _ from 'lodash';
import Area from './converters/area/Area';
import Storage from './converters/storage/Storage';
import Distance from './converters/distance/Distance';
import AparentPower from './converters/electricity/AparentPower';
import Current from './converters/electricity/Current';
import Temperature from './converters/temperature/Temperature';
import Volume from './converters/volume/Volume';
import Angle from './converters/Angle';
import Energy from './converters/Energy';
import Frequency from './converters/Frequency';
import Gas from './converters/Gas';
import Time from './converters/Time';
import Power from './converters/Power';
import Speed from './converters/speed/Speed';
import Pressure from './converters/pressure/Pressure';
import ShoeSize from './converters/shoes/ShoeSize';
import Roman from './converters/Roman';
import Illuminance from './converters/photometry/illuminance/Illuminance';
import Luminance from './converters/photometry/luminance/Luminance';

/**
 * Starts convertion process.
 * @param  {Number|BigDecimal} value - the value to convert. It can be a Decimal.js BigDecimal object
 * or a JavaScript primitive number.
 * @return {Function} a new Convert instance.
 */
const Convert = function(value) {
    this.value = value;
    this.descriptors = {
        'area': Area,
        'storage': Storage,
        'distance': Distance,
        'aparentPower': AparentPower,
        'current': Current,
        'volume': Volume,
        'angle': Angle,
        'energy': Energy,
        'frequency': Frequency,
        'gas': Gas,
        'time': Time,
        'temperature': Temperature,
        'speed': Speed,
        'power': Power,
        'pressure': Pressure,
        'shoeSize': ShoeSize,
        'illuminance': Illuminance,
        'luminance': Luminance,
        'roman': Roman
    };
};

/**
 * Sets the Descriptor to use to make things
 * faster since we don't have to search all
 * descriptors to match the correct one to use
 * @param  {String|Object<Descriptor>} descriptor - the descriptor name or object
 * @return {Function} the Convert instance.
 */
Convert.prototype.with = function(descriptor) {
    if(!descriptor){
        throw new Error('Invalid descriptor value. Should be a string or a Descriptor object');
    }

    if(_.isString(descriptor)){
        this.descriptor = this.descriptors[descriptor.toLowerCase()];
    }else{
        this.descriptor = descriptor;
    }

    if(!this.descriptor){
        throw new Error('Invalid descriptor value. No matching descriptor found.');
    }

    return this;
};

/**
 * Set the unit to convert from.
 * @param  {String|Object<Unit>} u - the unit id or a Unit object.
 * @return {Function} the Convert instance.
 */
Convert.prototype.from = function(u) {
    if(this.src){
        throw new Error('Invalid operation. Source value is already set.');
    }
    this.src = u;
    return this;
};

/**
 * Converts to the given unit.
 * @param  {String|Object<Unit>} other - the unit id or a Unit object.
 * @return {BigDecimal} the result of the conversion.
 * @throws {Error} when something goes wrong.
 */
Convert.prototype.to = function(other) {
    if(!this.src){
        throw new Error('Invalid source value. Use from() before to().');
    }

    if(!this.descriptor) {
        // We need to find the descriptor that matches.
        for (const k in this.descriptors) {
            if (!this.descriptors.hasOwnProperty(k)) {
                continue;
            }

            const descriptor = this.descriptors[k];
            if(!descriptor.matches){
                throw new Error('Invalid descriptor. Doesn\'t have the matches function');
            }

            const units = descriptor.matches(this.src, other);
            if(units){
                return descriptor.convert(this.value, units.from, units.to);
            }
        }

        throw new Error(`No descriptor found that matches the given conversion units ${this.src} => ${other}`);
    }

    return this.descriptor.convert(this.value, this.src, other);
};

/**
 * Returns a collection of the defined Descriptors
 * @return {Object} collection of descriptors.
 */
Convert.prototype.getDescriptors = function() {
    return this.descriptors;
};

export default Convert;
