import Unit from './Unit';
import System from './System';
import Descriptor from './Descriptor';
import Prefix from './Prefix';

const TYPE = 'Frequency';

const Metric = new System('Metric');

const base = new Unit({
    id: 'Hz',
    name: 'Hertz',
    type: TYPE,
    system: Metric,
    converter: 1
});

const hertzs = Unit.withPrefixes(base, Prefix.METRIC);

const others = {
    RPM: new Unit({
        id: 'rpm',
        name: 'RPM',
        type: TYPE,
        system: Metric,
        converter: 1/60
    }),
    DegreePerSecond: new Unit({
        id: 'deg/s',
        name: 'DegreePerSecond',
        type: TYPE,
        system: Metric,
        converter: 1/360
    }),
    DegreePerMinute: new Unit({
        id: 'deg/m',
        name: 'DegreePerMinute',
        type: TYPE,
        system: Metric,
        converter: 1/(360*60)
    }),
    RadianPerSecond: new Unit({
        id: 'rad/s',
        name: 'RadianPerSecond',
        type: TYPE,
        system: Metric,
        converter: 1/(Math.PI * 2)
    }),
    RadianPerMinute: new Unit({
        id: 'rad/m',
        name: 'RadianPerMinute',
        type: TYPE,
        system: Metric,
        converter: 1/((Math.PI * 2) * 60)
    })
};

const units = Object.assign(hertzs, others);
const Frequency = new Descriptor([units]);
export default Frequency;
