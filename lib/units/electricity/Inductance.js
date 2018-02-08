import Unit from '../Unit';
import System from '../System';
import Descriptor from '../Descriptor';
import Prefix from '../Prefix';

const TYPE = 'Inductance';

const SYSTEM = new System('Unique');

const base = new Unit({
    id: 'H',
    name: 'Henry',
    type: TYPE,
    system: SYSTEM,
    converter: 1
});

const metrics = Unit.withPrefixes(base, Prefix.METRIC);

const others = {
    Abhenry: new Unit({
        id: 'abH',
        name: 'Abhenry',
        type: TYPE,
        system: SYSTEM,
        converter: 1*(10**9)
    }),
    Stathenry: new Unit({
        id: 'statH',
        name: 'Stathenry',
        type: TYPE,
        system: SYSTEM,
        converter: 1.1123/(10**12)
    }),
    WeberAmpere: new Unit({
        id: 'Wb/A',
        name: 'WeberAmpere',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    })
};

const units = Object.assign(metrics, others);
const Inductance = new Descriptor([units]);
export default Inductance;
