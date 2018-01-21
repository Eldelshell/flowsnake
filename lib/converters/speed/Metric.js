import Unit from '../Unit';
import System from '../System';

const TYPE = 'Speed';

const Metric = new System('Metric', {
    Imperial: 0.6214
});

const SpeedMetric = {
    KilometerPerHour: new Unit({
        id: 'km/h',
        name: 'KilometerPerHour',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    MeterPerSecond: new Unit({
        id: 'm/s',
        name: 'MeterPerSecond',
        type: TYPE,
        system: Metric,
        converter: 3.6
    })
};

export default SpeedMetric;
