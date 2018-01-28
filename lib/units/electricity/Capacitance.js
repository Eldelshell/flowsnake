import Unit from '../Unit';
import System from '../System';
import Descriptor from '../Descriptor';
import Prefix from '../Prefix';

const TYPE = 'Capacitance';

const SYSTEM = new System('Unique');

const base = new Unit({
    id: 'F',
    name: 'Farad',
    type: TYPE,
    system: SYSTEM,
    converter: 1
});

const metrics = Unit.withPrefixes(base, Prefix.METRIC);

const others = {
    Abfarad: new Unit({
        id: 'abF',
        name: 'Abfarad',
        type: TYPE,
        system: SYSTEM,
        converter: 1*(10**9)
    }),
    Statfarad: new Unit({
        id: 'statF',
        name: 'Statfarad',
        type: TYPE,
        system: SYSTEM,
        converter: 8.9876*(10**11)
    }),
    CoulombVolt: new Unit({
        id: 'C/V',
        name: 'CoulombVolt',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    })
};

const units = Object.assign(metrics, others);
const Capacitance = new Descriptor([units]);
export default Capacitance;
