import _ from 'lodash';
import Area from './converters/area/Area';
import Storage from './converters/data/storage/Storage';
import Transfer from './converters/data/transfer/Transfer';
import Distance from './converters/distance/Distance';
import AparentPower from './converters/electricity/AparentPower';
import Current from './converters/electricity/Current';
import Temperature from './converters/temperature/Temperature';
import Volume from './converters/volume/Volume';
import Angle from './converters/Angle';
import AngularAcceleration from './converters/AngularAcceleration';
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
import LinearAcceleration from './converters/acceleration/linear/LinearAcceleration';
import Torque from './converters/torque/Torque';
import Force from './converters/force/Force';
import Mass from './converters/mass/Mass';

const descriptors = {
    'linearAcceleration': LinearAcceleration,
    'angularAcceleration': AngularAcceleration,
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
    'mass': Mass,
    'time': Time,
    'temperature': Temperature,
    'transfer': Transfer,
    'speed': Speed,
    'power': Power,
    'pressure': Pressure,
    'shoeSize': ShoeSize,
    'illuminance': Illuminance,
    'luminance': Luminance,
    'roman': Roman,
    'torque': Torque,
    'force': Force
};

/**
 * Starts creating a new Unit.
 * @param  {Number|BigDecimal} value - the value of the new Unit.
 * @return {Function} a new Units instance.
 */
const Units = function(value) {
    this.value = value;
};

/**
 * Sets the Descriptor to use to make things
 * faster since we don't have to search all
 * descriptors to match the correct one to use
 * @param  {String|Object<Descriptor>} descriptor - the descriptor name or object
 * @return {Function} the Units instance.
 */
Units.prototype.with = function(descriptor) {
    if(!descriptor){
        throw new Error('Invalid descriptor value. Should be a string or a Descriptor object');
    }

    if(_.isString(descriptor)){
        this.descriptor = descriptors[descriptor.toLowerCase()];
    }else{
        this.descriptor = descriptor;
    }

    if(!this.descriptor){
        throw new Error('Invalid descriptor value. No matching descriptor found.');
    }

    return this;
};

/**
 * Obtains a new Unit with a value.
 * @param  {String|Object<Unit>} u - the unit id.
 * @return {Object<Unit>} the unit with the given value.
 * @throws {Error} when something goes wrong.
 */
Units.prototype.as = function(u) {
    const descriptor = this.getDescriptor(u);
    const unit = descriptor.getUnitById(u);
    return descriptor.of(this.value, unit);
};

/**
 * Obtains the descriptor for the given unit id.
 * @param  {String} u - unit id.
 * @return {Object<Descriptor>} the descriptor
 * @throws {Error} if no descriptor is found.
 */
Units.prototype.getDescriptor = function(u) {
    if(this.descriptor){
        return this.descriptor;
    }

    // We need to find the descriptor that matches.
    for (const k in descriptors) {
        if (!descriptors.hasOwnProperty(k)) {
            continue;
        }

        const descriptor = descriptors[k];
        const unit = descriptor.getUnitById(u);
        if(unit){
            this.descriptor = descriptor;
            return this.descriptor;
        }
    }

    throw new Error(`No descriptor found that matches the given unit ${u}`);
};

/**
 * Returns a collection of the defined Descriptors
 * @return {Object} collection of descriptors.
 */
Units.prototype.getDescriptors = function() {
    return descriptors;
};

export default Units;
