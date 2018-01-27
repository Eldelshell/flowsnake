import Unit from '../Unit';
import System from '../System';
import Prefix from '../Prefix';

const TYPE = 'Distance';

const SYSTEM = new System('Metric', {
    Imperial: 3.2808,
    Astronomical: 6.6846 / (10**12)
});

const base = new Unit({
    id: 'm',
    name: 'Meter',
    type: TYPE,
    system: SYSTEM,
    converter: 1
});

const DistanceMetric = Unit.withPrefixes(base, Prefix.METRIC);
export default DistanceMetric;
