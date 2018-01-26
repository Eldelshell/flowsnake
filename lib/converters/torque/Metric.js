import Unit from '../Unit';
import System from '../System';

const TYPE = 'Torque';

const Metric = new System('Metric', {
    Imperial: 1/1.3558,
    Gravitational: 101.97
});

const TorqueMetric = {
    NewtonMeter: new Unit({
        id: 'N·m',
        name: 'NewtonMeter',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    KilonewtonMeter: new Unit({
        id: 'kN·m',
        name: 'KilonewtonMeter',
        type: TYPE,
        system: Metric,
        converter: 1000
    }),
    DyneMeter: new Unit({
        id: 'dyn·m',
        name: 'DyneMeter',
        type: TYPE,
        system: Metric,
        converter: 1/100000
    })
};

export default TorqueMetric;
