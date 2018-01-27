import Unit from '../Unit';
import System from '../System';

const TYPE = 'Force';

const Imperial = new System('Imperial', {
    Metric: 4.4482,
    Gravitational: 453.6
});

const ForceImperial = {
    PoundForce: new Unit({
        id: 'lbf',
        name: 'PoundForce',
        type: TYPE,
        system: Imperial,
        converter: 1
    }),
    OunceForce: new Unit({
        id: 'ozf',
        name: 'OunceForce',
        type: TYPE,
        system: Imperial,
        converter: 1/16
    }),
    Poundal: new Unit({
        id: 'pdl',
        name: 'Poundal',
        type: TYPE,
        system: Imperial,
        converter: 1/32.174
    })
};

export default ForceImperial;
