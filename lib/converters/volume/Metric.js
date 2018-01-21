import Unit from '../Unit';
import System from '../System';

const TYPE = 'Volume';

const Metric = new System('Metric', {
    Liter: 1,
    Swedish: 1,
    ImperialUK: 35.1951,
    ImperialUS: 33.814,
    Imperial: 0.001308
});

const VolumeMetric = {
    Liter: new Unit({
        id: 'l',
        name: 'Liter',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    Deciliter: new Unit({
        id: 'dl',
        name: 'Deciliter',
        type: TYPE,
        system: Metric,
        converter: 1/10
    }),
    Centiliter: new Unit({
        id: 'cl',
        name: 'Centiliter',
        type: TYPE,
        system: Metric,
        converter: 1/100
    }),
    Mililiter: new Unit({
        id: 'ml',
        name: 'Mililiter',
        type: TYPE,
        system: Metric,
        converter: 1/1000
    }),
    CubicMeter: new Unit({
        id: 'm3',
        name: 'CubicMeter',
        type: TYPE,
        system: Metric,
        converter: 1000
    }),
    CubicCentimeter: new Unit({
        id: 'cm3',
        name: 'CubicCentimeter',
        type: TYPE,
        system: Metric,
        converter: 1/1000
    })
};

export default VolumeMetric;
