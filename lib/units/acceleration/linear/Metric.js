import Unit from '../../Unit';
import System from '../../System';
import Prefix from '../../Prefix';

const TYPE = 'LinearAcceleration';

const SYSTEM = new System('Metric', {
    Imperial: 3.2808
});

const base = new Unit({
    id: 'm/s2',
    name: 'MeterPerSquareSecond',
    type: TYPE,
    system: SYSTEM,
    converter: 1
});

const AccelerationMetric = Unit.withPrefixes(base, Prefix.METRIC);

AccelerationMetric['Gravity'] = new Unit({
    id: 'g',
    name: 'Gravity',
    type: TYPE,
    system: SYSTEM,
    converter: 9.8066
});

AccelerationMetric['Gal'] = new Unit({
    id: 'Gal',
    name: 'Gal',
    type: TYPE,
    system: SYSTEM,
    converter: 1/100
});

export default AccelerationMetric;
