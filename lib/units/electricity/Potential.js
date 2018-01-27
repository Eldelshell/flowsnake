import Unit from '../Unit';
import System from '../System';
import Descriptor from '../Descriptor';
import Prefix from '../Prefix';

const TYPE = 'Potential';

const SYSTEM = new System('Unique');

const base = new Unit({
    id: 'V',
    name: 'Volt',
    type: TYPE,
    system: SYSTEM,
    converter: 1
});

const metrics = Unit.withPrefixes(base, Prefix.METRIC);

const others = {
    Abvolt: new Unit({
        id: 'abV',
        name: 'Abvolt',
        type: TYPE,
        system: SYSTEM,
        converter: 1/(10**8)
    }),
    Statvolt: new Unit({
        id: 'statV',
        name: 'Statvolt',
        type: TYPE,
        system: SYSTEM,
        converter: 299.7925
    }),
    WattPerAmpere: new Unit({
        id: 'W/A',
        name: 'WattPerAmpere',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    })
};

const units = Object.assign(metrics, others);
const Potential = new Descriptor([units]);
export default Potential;
