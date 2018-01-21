import _ from 'lodash';
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
        return null;
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
     * @param  {Array} opts.converters - a collection of convertion funcions used to convert between units.
     * Check the Gas conversion.
     * @param  {Number} opts.converter - value used to convert this Unit against the base Unit of the System.
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
    }

    /**
     * Sets the value for this unit.
     * @param  {Number|BigDecimal} value - the value to convert
     * @return {Unit} the instance of Unit.
     */
    of(value){
        this.value = value;
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

        if(other.name === this.name){
            return this.value;
        }

        if(this.converter){
            return evaluate(`(${this.value} * ${this.converter}) / ${other.converter}`);
        }

        const converter = this.converters[other.name];
        if(!converter){
            throw new Error(`Invalid ${this.type} converter ${other.name} for ${this.name}`);
        }

        if(_.isString(converter)){
            return evaluate(converter);
        }

        return evaluate(converter(this.value));
    }
}
