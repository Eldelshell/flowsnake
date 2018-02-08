import Unit from '../Unit';
import System from '../System';

const TYPE = 'Density';

const SYSTEM = new System('Ounce', {
    Metric: 1729.994,
    Liter: 1.729994,
    Imperial: 1/16
});

const OunceDensity = {
    OunceCubicInch: new Unit({
        id: 'oz/in3',
        name: 'OunceCubicInch',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    }),
    OunceCubicFoot: new Unit({
        id: 'oz/ft3',
        name: 'OunceCubicFoot',
        type: TYPE,
        system: SYSTEM,
        converter: 1/1728
    }),
    OunceGallon: new Unit({
        id: 'oz/gal',
        name: 'OunceGallon',
        type: TYPE,
        system: SYSTEM,
        converter: 1/231
    })
};

export default OunceDensity;
