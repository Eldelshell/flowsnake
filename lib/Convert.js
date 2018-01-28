import Units from './Units';
import Unit from './units/Unit';

/**
 * Starts convertion process.
 * @param  {Number|BigDecimal} value - the value to convert. It can be a Decimal.js BigDecimal object
 * or a JavaScript primitive number.
 * @return {Function} a new Convert instance.
 */
const Convert = function(value) {
    if(value instanceof Unit){
        this.src = value;
        this.units = new Units(value.value);
    }else{
        this.units = new Units(value);
    }
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

    this.units.with(descriptor);
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

    if(u instanceof Unit){
        this.src = u;
    }else{
        this.src = this.units.as(u);
    }

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

    if(this.descriptor) {
        return this.descriptor.convert(this.src.value, this.src, other);
    }

    const descriptor = this.units.getDescriptor(other);
    const unit = descriptor.getUnit(other);
    return descriptor.convert(this.src.value, this.src, other);

    // throw new Error(`Cannot convert from ${this.name} to ${other}`);
};

export default Convert;
