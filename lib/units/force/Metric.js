import Unit from '../Unit';
import System from '../System';
import Prefix from '../Prefix';

const TYPE = 'Force';

const Metric = new System('Metric', {
    Imperial: 1/4.4482,
    Gravitational: 101.97
});

const base = new Unit({
    id: 'N',
    name: 'Newton',
    type: TYPE,
    system: Metric,
    converter: 1
});

const ForceMetric = Unit.withPrefixes(base, Prefix.METRIC);

ForceMetric['Dyne'] = new Unit({
    id: 'dyn',
    name: 'Dyne',
    type: TYPE,
    system: Metric,
    converter: 1/100000
});

ForceMetric['JoulePerMeter'] = new Unit({
    id: 'J/m',
    name: 'JoulePerMeter',
    type: TYPE,
    system: Metric,
    converter: 1
});

export default ForceMetric;
