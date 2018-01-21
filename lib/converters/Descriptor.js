import _ from 'lodash';

export default class Descriptor {

    constructor(systems){
        this.systems = systems;
    }

    of(value, unit) {
        if(!unit){
            throw new Error('No unit given');
        }

        if(_.isString(unit)){
            return this.getUnitById(unit).of(value);
        }

        return unit.of(value);
    }

    convert(value, source, target) {
        const src = this.of(value, source);
        const tgt = this.of(1, target);
        return src.to(tgt);
    }

    getUnitById(id) {
        for (let i = 0; i < this.systems.length; i++) {
            const system = this.systems[i];
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

        throw new Error(`Invalid unit ${id}`);
    }

    getUnits() {
        return _.flatten(this.systems.map((s) => Object.keys(s)));
    }

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
                    system: unit.system.name
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
     */
    matches(f, t) {
        try {
            const from = this.getUnitById(f);
            const to = this.getUnitById(t);
            if(from && to){
                return {
                    from: from, to: to
                };
            }
        } catch (e) {
            // Invalid Unit Exception is expected
        }

        return null;
    }

}
