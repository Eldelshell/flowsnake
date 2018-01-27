import Unit from '../Unit';
import System from '../System';
import Descriptor from '../Descriptor';
import Prefix from '../Prefix';

const TYPE = 'Charge';

const SYSTEM = new System('Unique');

const base = new Unit({
    id: 'C',
    name: 'Coulomb',
    type: TYPE,
    system: SYSTEM,
    converter: 1
});

const metrics = Unit.withPrefixes(base, Prefix.METRIC);

const others = {
    Abcoulomb: new Unit({
        id: 'abC',
        name: 'Abcoulomb',
        type: TYPE,
        system: SYSTEM,
        converter: 10
    }),
    Statcoulomb: new Unit({
        id: 'statC',
        name: 'Statcoulomb',
        type: TYPE,
        system: SYSTEM,
        converter: 3.335641/(10**10)
    }),
    AmpereSecond: new Unit({
        id: 'A·s',
        name: 'AmpereSecond',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    }),
    AmpereMinute: new Unit({
        id: 'A·m',
        name: 'AmpereMinute',
        type: TYPE,
        system: SYSTEM,
        converter: 60
    }),
    AmpereHour: new Unit({
        id: 'A·h',
        name: 'AmpereHour',
        type: TYPE,
        system: SYSTEM,
        converter: 3600
    })
};

const units = Object.assign(metrics, others);
const Charge = new Descriptor([units]);
export default Charge;
