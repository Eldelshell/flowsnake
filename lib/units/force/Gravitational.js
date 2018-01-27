import Unit from '../Unit';
import System from '../System';

const TYPE = 'Force';

const SYSTEM = new System('Gravitational', {
    Metric: 1/101.97,
    Imperial: 1/453.6
});

const ForceGravitational = {
    GramForce: new Unit({
        id: 'gf',
        name: 'GramForce',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    }),
    KilogramForce: new Unit({
        id: 'kgf',
        name: 'KilogramForce',
        type: TYPE,
        system: SYSTEM,
        converter: 1000
    }),
    Pond: new Unit({
        id: 'pond',
        name: 'Pond',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    })
};

export default ForceGravitational;
