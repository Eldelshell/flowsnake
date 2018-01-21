import Unit from './Unit';
import System from './System';
import Descriptor from './Descriptor';

const TYPE = 'Frequency';

const Metric = new System('Metric');

const hertzs = {
    Hertz: new Unit({
        id: 'Hz',
        name: 'Hertz',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    Millihertz: new Unit({
        id: 'mHz',
        name: 'Millihertz',
        type: TYPE,
        system: Metric,
        converter: 1/1000
    }),
    Kilohertz: new Unit({
        id: 'kHz',
        name: 'Kilohertz',
        type: TYPE,
        system: Metric,
        converter: 1000
    }),
    Megahertz: new Unit({
        id: 'MHz',
        name: 'Megahertz',
        type: TYPE,
        system: Metric,
        converter: 1 * (10**6)
    }),
    Gigahertz: new Unit({
        id: 'GHz',
        name: 'Gigahertz',
        type: TYPE,
        system: Metric,
        converter: 1 * (10**9)
    }),
    Terahertz: new Unit({
        id: 'THz',
        name: 'Terahertz',
        type: TYPE,
        system: Metric,
        converter: 1 * (10**12)
    }),
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

const Frequency = new Descriptor([hertzs]);
export default Frequency;
