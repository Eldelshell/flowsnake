import Unit from '../Unit';
import System from '../System';

const TYPE = 'Torque';

const SYSTEM = new System('Gravitational', {
    Metric: 1/101.97,
    Imperial: 1/138.255
});

const TorqueGravitational = {
    GramForceMeter: new Unit({
        id: 'gf·m',
        name: 'GramForceMeter',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    }),
    KilogramForceMeter: new Unit({
        id: 'kgf·m',
        name: 'KilogramForceMeter',
        type: TYPE,
        system: SYSTEM,
        converter: 1000
    })
};

export default TorqueGravitational;
