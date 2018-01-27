import Unit from '../Unit';
import System from '../System';
import Prefix from '../Prefix';

const TYPE = 'Torque';

const Metric = new System('Metric', {
    Imperial: 1/1.3558,
    Gravitational: 101.97
});

const base = new Unit({
    id: 'N·m',
    name: 'NewtonMeter',
    type: TYPE,
    system: Metric,
    converter: 1
});

const TorqueMetric = Unit.withPrefixes(base, Prefix.METRIC);

TorqueMetric['DyneMeter'] = new Unit({
    id: 'dyn·m',
    name: 'DyneMeter',
    type: TYPE,
    system: Metric,
    converter: 1/100000
});

export default TorqueMetric;
