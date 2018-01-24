import Unit from '../Unit';
import System from '../System';

const TYPE = 'Acceleration';

const Metric = new System('Metric', {
    Imperial: 3.2808
});

const AccelerationMetric = {
    MeterPerSquareSecond: new Unit({
        id: 'm/s2',
        name: 'MeterPerSquareSecond',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    KilometerPerSquareSecond: new Unit({
        id: 'km/s2',
        name: 'KilometerPerSquareSecond',
        type: TYPE,
        system: Metric,
        converter: 1000
    }),
    Gravity: new Unit({
        id: 'g',
        name: 'Gravity',
        type: TYPE,
        system: Metric,
        converter: 9.8066
    }),
    Gal: new Unit({
        id: 'Gal',
        name: 'Gal',
        type: TYPE,
        system: Metric,
        converter: 1/100
    })
};

export default AccelerationMetric;
