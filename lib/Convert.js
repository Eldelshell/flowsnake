import _ from 'lodash';
import Area from './converters/area/Area';
import Temperature from './converters/temperature/Temperature';

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
        'temperature': Temperature
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

Convert.prototype.from = function(u) {
    if(this.src){
        throw new Error('Invalid operation. Source value is already set.');
    }
    this.src = u;
    return this;
};

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

Convert.prototype.descriptors = function() {
    return this.descriptors;
};

export default Convert;
