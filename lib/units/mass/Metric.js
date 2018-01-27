import Unit from '../Unit';
import System from '../System';
import Prefix from '../Prefix';

const TYPE = 'Mass';

const Metric = new System('Metric', {
    Imperial: 1/453.592
});

const base = new Unit({
    id: 'g',
    name: 'Gram',
    type: TYPE,
    system: Metric,
    converter: 1
});

const MassMetric = Unit.withPrefixes(base, Prefix.METRIC);

MassMetric['Ton'] = new Unit({
    id: 'mt',
    name: 'Ton',
    type: TYPE,
    system: Metric,
    converter: 1000000
});

// Alias for Microgram
MassMetric['Mcg'] = new Unit({
    id: 'mcg',
    name: 'Mcg',
    type: TYPE,
    system: Metric,
    converter: 1/(10**6)
});

export default MassMetric;
