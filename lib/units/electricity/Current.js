import Unit from '../Unit';
import System from '../System';
import Descriptor from '../Descriptor';
import Prefix from '../Prefix';

const TYPE = 'Current';

const SYSTEM = new System('Unique');

const base = new Unit({
    id: 'A',
    name: 'Ampere',
    type: TYPE,
    system: SYSTEM,
    converter: 1
});

const metrics = Unit.withPrefixes(base, Prefix.METRIC);

const others = {
    Abampere: new Unit({
        id: 'abA',
        name: 'Abampere',
        type: TYPE,
        system: SYSTEM,
        converter: 10
    }),
    Biot: new Unit({
        id: 'Bi',
        name: 'Biot',
        type: TYPE,
        system: SYSTEM,
        converter: 10
    }),
    Statampere: new Unit({
        id: 'statA',
        name: 'Statampere',
        type: TYPE,
        system: SYSTEM,
        converter: 3.335641/(10**10)
    })
};

const units = Object.assign(metrics, others);
const Current = new Descriptor([units]);
export default Current;
