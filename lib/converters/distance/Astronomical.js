import Unit from '../Unit';
import System from '../System';

const TYPE = 'Distance';

const Astronomical = new System('Astronomical', {
    Imperial: 4.9081 * (10**11),
    Metric: 1.496 * (10**11)
});

const DistanceAstronomical = {
    AstronomicalUnit: new Unit({
        id: 'AU',
        name: 'AstronomicalUnit',
        type: TYPE,
        system: Astronomical,
        converter: 1
    }),
    Parsec: new Unit({
        id: 'pc',
        name: 'Parsec',
        type: TYPE,
        system: Astronomical,
        converter: 206264.8222
    }),
    LightYear: new Unit({
        id: 'ly',
        name: 'LightYear',
        type: TYPE,
        system: Astronomical,
        converter: 63241.0771
    })
};

export default DistanceAstronomical;
