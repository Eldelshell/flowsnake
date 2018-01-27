import Unit from '../Unit';
import System from '../System';
import Descriptor from '../Descriptor';
import Prefix from '../Prefix';

const TYPE = 'Resistance';

const SYSTEM = new System('Unique');

const base = new Unit({
    id: 'Ω',
    name: 'Ohm',
    type: TYPE,
    system: SYSTEM,
    converter: 1
});

const metrics = Unit.withPrefixes(base, Prefix.METRIC);

const others = {
    Abohm: new Unit({
        id: 'abΩ',
        name: 'Abohm',
        type: TYPE,
        system: SYSTEM,
        converter: 1/(10**9)
    }),
    Statohm: new Unit({
        id: 'statΩ',
        name: 'Statohm',
        type: TYPE,
        system: SYSTEM,
        converter: 8.9876*(10**11)
    }),
    VoltPerAmpere: new Unit({
        id: 'V/A',
        name: 'VoltPerAmpere',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    })
};

const units = Object.assign(metrics, others);
const Resistance = new Descriptor([units]);
export default Resistance;
