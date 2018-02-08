import Unit from '../Unit';
import System from '../System';

const TYPE = 'Density';

const SYSTEM = new System('Metric', {
    Liter: 0.001,
    Imperial: 3.6127*(10**-5),
    Ounce: 5.7804*(10**-4)
});

const MetricDensity = {
    KilogramCubicMeter: new Unit({
        id: 'kg/m3',
        name: 'KilogramCubicMeter',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    }),
    GramCubicMeter: new Unit({
        id: 'g/m3',
        name: 'GramCubicMeter',
        type: TYPE,
        system: SYSTEM,
        converter: 1*(10**-3)
    }),
    MilligramCubicMeter: new Unit({
        id: 'mg/m3',
        name: 'MilligramCubicMeter',
        type: TYPE,
        system: SYSTEM,
        converter: 1*(10**-6)
    })
};

export default MetricDensity;
