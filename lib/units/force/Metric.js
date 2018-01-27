import Unit from '../Unit';
import System from '../System';

const TYPE = 'Force';

const Metric = new System('Metric', {
    Imperial: 1/4.4482,
    Gravitational: 101.97
});

const ForceMetric = {
    Newton: new Unit({
        id: 'N',
        name: 'Newton',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    Kilonewton: new Unit({
        id: 'kN',
        name: 'Kilonewton',
        type: TYPE,
        system: Metric,
        converter: 1000
    }),
    Dyne: new Unit({
        id: 'dyn',
        name: 'Dyne',
        type: TYPE,
        system: Metric,
        converter: 1/100000
    }),
    JoulePerMeter: new Unit({
        id: 'J/m',
        name: 'JoulePerMeter',
        type: TYPE,
        system: Metric,
        converter: 1
    })
};

export default ForceMetric;
