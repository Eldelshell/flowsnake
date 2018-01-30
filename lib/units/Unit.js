import _ from 'lodash';
import Decimal from 'decimal.js';
import mathjs from 'mathjs';

const math = mathjs.create({number: 'BigNumber', precision: 6});

/**
 * Uses math.js to evaluate the given expression.
 * @param  {String} exp - expression to evaluate.
 * @return {BigDecimal} the result.
 */
const evaluate = function(exp){
    try {
        return math.eval(exp);
    } catch (e) {
        // console.error(`Failed to evaluate ${exp}`, e);
        return exp;
    }
};

/**
 * Defines the base Unit object. Each unit like Celsius or Meter is defined as an Unit.
 */
export default class Unit {
    /**
     * Constructor
     * @param  {Object} opts - the object with the options to construct this Unit.
     * @param  {Number|BigDecimal} [opts.value] - optional starting value. Used to convert.
     * @param  {String} opts.id - The unique ID for this unit. It has to be globally unique.
     * It usually matches the SI abbreviation.
     * @param  {String} opts.name - The name of the unit. It has to be unique for the System being used.
     * For example: Celsius.
     * @param  {String} opts.type - The type of unit. Matches the Descriptor.
     * For example: Angle, Temperature, etc.
     * @param  {System} opts.system - The System object to use to convert between units.
     * For example: Metric/Imperial.
     * @param  {Array} [opts.converters] - a collection of convertion functions used to convert between units.
     * Check the Gas conversion.
     * @param  {Number} [opts.converter] - value used to convert this Unit against the base Unit of the System.
     * @param  {Array} [opts.values] - a collection of convertion values. Arrays must be of the same size
     * for each unit on the same system.
     * @param  {Function} [opts.prefix] - function used by base units to generate the name of the generated units.
     * @return {Unit} a new Unit.
     */
    constructor(opts){
        this.value = null;
        this.id = opts.id;
        this.name = opts.name;
        this.type = opts.type;
        this.system = opts.system;
        this.converters = opts.converters;
        this.converter = opts.converter;
        this.values = opts.values;
        this.prefix = opts.prefix;
    }

    /**
     * Sets the value for this unit.
     * @param  {Number|BigDecimal} value - the value to convert
     * @return {Unit} the instance of Unit.
     */
    of(value){
        if(this.values && _.isArray(this.values)){
            const idx = this.values.findIndex((c) => c === value);
            if(_.isUndefined(idx)){
                throw new Error(`Invalid value for ${this.id} ${value}`);
            }
            this.value = idx;
        }else{
            this.value = value;
        }

        return this;
    }

    /**
     * Calculates the value of other Unit from the value of this Unit. Here's where all the magic happens.
     * @param  {Unit} other - the Unit to convert to.
     * @return {BigDecimal} the result of the conversion.
     */
    to(other){
        if(other.type !== this.type){
            throw new Error(`Invalid ${this.type} doesn't match ${other.type}`);
        }

        // Here we convert between systems
        if(other.system && this.system){
            if(other.system.name !== this.system.name && this.system.ratios && this.system.ratios[other.system.name]){
                const systemRate = this.system.ratios[other.system.name];
                return evaluate(`((${this.value} * ${this.converter}) * ${systemRate}) / ${other.converter}`);
            }
        }

        // No need to convert beween same units.
        if(other.name === this.name){
            // Always return a BigDecimal
            return Decimal.isDecimal(this.value) ? this.value : new Decimal(this.value);
        }

        // When values is set Unit uses a matching table, so we obtain the value for the index of this unit.
        if(_.isArray(this.values) && other.values && _.isArray(other.values)){
            return other.values[this.value];
        }

        // When converter is set we have a direct rate converter, so we use the formula.
        if(this.converter){
            return evaluate(`(${this.value} * ${this.converter}) / ${other.converter}`);
        }

        // Finally, we have the converters list
        const converter = this.converters[other.name];
        if(!converter){
            throw new Error(`Invalid ${this.type} converter ${other.name} for ${this.name}`);
        }

        if(_.isString(converter)){
            return evaluate(converter);
        }

        // Converters can also be numbers
        if(_.isFinite(converter)){
            return evaluate(`(${this.value} / ${converter})`);
        }

        return evaluate(converter(this.value));
    }

    /**
     * Compares with other unit or value.
     * @param  {Any} other - value to compare with.
     * @return {Boolean} if the value of this unit equals other.
     */
    equals(other){
        if(this.value instanceof Decimal){
            if(other instanceof Unit){
                return this.value.eq(other.value);
            }else{
                return this.value.eq(other);
            }
        }else{
            if(other instanceof Unit){
                return this.value === other.value;
            }else{
                return this.value === other;
            }
        }
    }

    /**
     * Compares with other unit or value.
     * @param  {Unit} other - unit to compare with.
     * @return {Integer} as any compare function.
     * @throws {Error} if the Units are not of the same Unit. For example, it only works for Celsius and Celsius.
     */
    compare(other){
        if(!(other instanceof Unit)){
            throw new Error('Can only compare between Unit objects');
        }

        if(other.name !== this.name){
            throw new Error(`Invalid ${this.name} doesn't match ${other.name}`);
        }

        if(other.type !== this.type){
            throw new Error(`Invalid ${this.type} doesn't match ${other.type}`);
        }

        if(this.value instanceof Decimal){
            return this.value.compareTo(other.value);
        }

        if(this.value > other.value){
            return 1;
        }else if(this.value < other.value){
            return -1;
        }else{
            return 0;
        }
    }

    /**
     * From a base Unit generates a new object with all the prefixes.
     * For example, for the Meter unit, it generates Kilometer, Millimeter, etc.
     * @param  {Unit} base - the base unit, like meter or gram.
     * @param  {Array<Prefix>} prefixes - the list of prefixes to use.
     * @return {Object} the new object with all possible prefixes.
     */
    static withPrefixes(base, prefixes) {
        const group = {};
        group[base.name] = base;
        prefixes.forEach((prefix) => {
            const name = _.isFunction(base.prefix) ? base.prefix(prefix.name) : prefix.name + base.name.toLowerCase();
            const u = new Unit({
                id: prefix.id + base.id,
                name: name,
                type: base.type,
                system: base.system,
                converter: prefix.converter
            });
            group[name] = u;
        });
        return group;
    }
}
