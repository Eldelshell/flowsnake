import Unit from '../Unit';
import System from '../System';
import Descriptor from '../Descriptor';
import Prefix from '../Prefix';

const TYPE = 'Conductance';

const SYSTEM = new System('Unique');

const base = new Unit({
    id: 'S',
    name: 'Siemens',
    type: TYPE,
    system: SYSTEM,
    converter: 1
});

const metrics = Unit.withPrefixes(base, Prefix.METRIC);

const others = {
    Absiemens: new Unit({
        id: 'abS',
        name: 'Absiemens',
        type: TYPE,
        system: SYSTEM,
        converter: 1*(10**9)
    }),
    Statsiemens: new Unit({
        id: 'statS',
        name: 'Statsiemens',
        type: TYPE,
        system: SYSTEM,
        converter: 1.1123/(10**12)
    }),
    AmperePerVolt: new Unit({
        id: 'A/V',
        name: 'AmperePerVolt',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    })
};

const units = Object.assign(metrics, others);
const Conductance = new Descriptor([units]);
export default Conductance;
