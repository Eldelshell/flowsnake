import Unit from '../Unit';
import System from '../System';

const TYPE = 'Torque';

const Imperial = new System('Imperial', {
    Metric: 1.3558,
    Gravitational: 138.255
});

const TorqueImperial = {
    PoundForceFoot: new Unit({
        id: 'lbf·ft',
        name: 'PoundForceFoot',
        type: TYPE,
        system: Imperial,
        converter: 1
    }),
    OunceForceFoot: new Unit({
        id: 'ozf·ft',
        name: 'OunceForceFoot',
        type: TYPE,
        system: Imperial,
        converter: 1/16
    }),
    PoundalFoot: new Unit({
        id: 'pdl·ft',
        name: 'PoundalFoot',
        type: TYPE,
        system: Imperial,
        converter: 1/32.174
    })
};

export default TorqueImperial;
