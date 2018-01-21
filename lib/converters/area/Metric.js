import Unit from '../Unit';
import System from '../System';

const TYPE = 'Area';

const Metric = new System('Metric', {
    Imperial: 10.7639
});

const AreaMetric = {
    SquareMeter: new Unit({
        id: 'm2',
        name: 'SquareMeter',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    SquareMillimeter: new Unit({
        id: 'mm2',
        name: 'SquareMillimeter',
        type: TYPE,
        system: Metric,
        converter: 1/1000000
    }),
    SquareCentimeter: new Unit({
        id: 'cm2',
        name: 'SquareCentimeter',
        type: TYPE,
        system: Metric,
        converter: 1/10000
    }),
    SquareKilometer: new Unit({
        id: 'km2',
        name: 'SquareKilometer',
        type: TYPE,
        system: Metric,
        converter: 1000000
    }),
    Are: new Unit({
        id: 'a',
        name: 'Are',
        type: TYPE,
        system: Metric,
        converter: 100
    }),
    Hectare: new Unit({
        id: 'ha',
        name: 'Hectare',
        type: TYPE,
        system: Metric,
        converter: 10000
    })
};

export default AreaMetric;
