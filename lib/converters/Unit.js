import _ from 'lodash';
import mathjs from 'mathjs';
import Decimal from 'decimal.js';

const math = mathjs.create({number: 'BigNumber', precision: 6});

const evaluate = function(exp){
    try {
        return math.eval(exp);
    } catch (e) {
        // console.error(`Failed to evaluate ${exp}`, e);
        return null;
    }
};

export default class Unit {
    constructor(opts){
        this.value = null;
        this.id = opts.id;
        this.name = opts.name;
        this.type = opts.type;
        this.system = opts.system;
        this.converters = opts.converters;
        this.converter = opts.converter;
    }

    of(value){
        this.value = value;
        return this;
    }

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
