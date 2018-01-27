import Unit from '../Unit';
import System from '../System';

const TYPE = 'Distance';

const Metric = new System('Metric', {
    Imperial: 3.2808,
    Astronomical: 6.6846 / (10**12)
});

const DistanceMetric = {
    Meter: new Unit({
        id: 'm',
        name: 'Meter',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    Millimeter: new Unit({
        id: 'mm',
        name: 'Millimeter',
        type: TYPE,
        system: Metric,
        converter: 1/1000
    }),
    Centimeter: new Unit({
        id: 'cm',
        name: 'Centimeter',
        type: TYPE,
        system: Metric,
        converter: 1/100
    }),
    Kilometer: new Unit({
        id: 'km',
        name: 'Kilometer',
        type: TYPE,
        system: Metric,
        converter: 1000
    })
};

export default DistanceMetric;
