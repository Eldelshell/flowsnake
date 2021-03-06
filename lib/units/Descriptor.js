import _ from 'lodash';

/**
 * Defines a set of Units to convert between. For exaple, the Temperature Descriptor.
 */
export default class Descriptor {

    /**
     * The constructor
     * @param  {Array<Object<Unit>>} systems - the Unit systems described by this descriptor.
     * @return {Descriptor} - the instance.
     */
    constructor(systems){
        this.systems = systems;
    }

    /**
     * Obtains a Unit from the systems we have defined and sets the value. If unit is a string, we try to find it.
     * @param  {Number|BigDecimal} value - value to set to the Unit.
     * @param  {String|Unit} unit - the Unit to use.
     * @return {Unit} - the Unit object with the value set.
     */
    of(value, unit) {
        if(_.isString(unit)){
            unit = this.getUnit(unit);
        }

        if(!unit){
            throw new Error('Invalid unit');
        }

        // Clone because a unit on the descriptor is constant.
        return _.clone(unit).of(value);
    }

    /**
     * Converts the value from source Unit to Target unit.
     * @param  {Number|BigDecimal} value - value to convert.
     * @param  {String|Unit} source - the Unit to use as source.
     * @param  {String|Unit} target - the Unit to use as target.
     * @return {BigDecimal} the result of the operation.
     * @throws {Error} any error from the Unit conversion operation.
     */
    convert(value, source, target) {
        const src = this.of(value, source);
        const tgt = this.of(1, target);
        return src.to(tgt);
    }

    /**
     * Obtains a Unit object for the given id or name.
     * @param  {String} id - the id or name of a defined Unit inside this Descriptor.
     * If this descriptor is defined for temperature, it will fail to find a unit of area or volume.
     * @return {Unit} the Unit that matches the given id or name or null.
     */
    getUnit(id) {
        for (let i = 0; i < this.systems.length; i++) {
            const system = this.systems[i];

            const byName = system[id];
            if(byName){
                return byName;
            }

            for (const key in system) {
                if (!system.hasOwnProperty(key)) {
                    continue;
                }
                const unit = system[key];
                if(unit.id === id){
                    return unit;
                }
            }
        }

        // throw new Error(`Invalid unit ${id}`);
        return null;
    }

    /**
     * Obtain all the unit names defined on this Descriptor.
     * @return {Array<String>} - a flat array of unit names. For example: [Celsius, Fahrenheit, Kelvin...]
     */
    getUnits() {
        return _.flatten(this.systems.map((s) => Object.keys(s)));
    }

    /**
     * Describes this Descriptor and its Units
     * @return {Array<Object>} - an array with the information from all Units of this Descriptor.
     */
    describe() {
        const res = [];
        for (let i = 0; i < this.systems.length; i++) {
            const system = this.systems[i];
            for (const key in system) {
                if (!system.hasOwnProperty(key)) {
                    continue;
                }
                const unit = system[key];
                res.push({
                    id: unit.id,
                    name: unit.name,
                    type: unit.type,
                    system: unit.system ? unit.system.name : ''
                });
            }
        }
        return res;
    }

    /**
     * Checks if this Descriptor matches the given units.
     * @param  {String} f - base unit id
     * @param  {String} t - unit id to convert
     * @return {Object} an object with the units ready to be used.
     * @deprecated
     */
    matches(f, t) {
        const from = this.getUnit(f);
        const to = this.getUnit(t);
        if(from && to){
            return {
                from: from, to: to
            };
        }

        return null;
    }

}
