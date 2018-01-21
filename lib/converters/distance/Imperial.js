import Unit from '../Unit';
import System from '../System';

const TYPE = 'Distance';

const Imperial = new System('Imperial', {
    Metric: 0.3048,
    Astronomical: 2.0375 / (10**12)
});

const DistanceImperial = {
    Foot: new Unit({
        id: 'ft',
        name: 'Foot',
        type: TYPE,
        system: Imperial,
        converter: 1
    }),
    Mile: new Unit({
        id: 'mile',
        name: 'Mile',
        type: TYPE,
        system: Imperial,
        converter: 5280
    }),
    Inch: new Unit({
        id: 'in',
        name: 'Inch',
        type: TYPE,
        system: Imperial,
        converter: 1/12
    }),
    Yard: new Unit({
        id: 'yd',
        name: 'Yard',
        type: TYPE,
        system: Imperial,
        converter: 3
    }),
    NauticalMile: new Unit({
        id: 'nmi',
        name: 'NauticalMile',
        type: TYPE,
        system: Imperial,
        converter: 6076.1155
    })
};

export default DistanceImperial;
