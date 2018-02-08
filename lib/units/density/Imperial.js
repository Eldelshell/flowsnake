import Unit from '../Unit';
import System from '../System';

const TYPE = 'Density';

const SYSTEM = new System('Imperial', {
    Metric: 27679.9047,
    Liter: 27.6799047,
    Ounce: 16
});

const ImperialDensity = {
    PoundCubicInch: new Unit({
        id: 'lb/in3',
        name: 'PoundCubicInch',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    }),
    PoundCubicFoot: new Unit({
        id: 'lb/ft3',
        name: 'PoundCubicFoot',
        type: TYPE,
        system: SYSTEM,
        converter: 1/1728
    }),
    PoundCubicYard: new Unit({
        id: 'lb/yd3',
        name: 'PoundCubicFoot',
        type: TYPE,
        system: SYSTEM,
        converter: 1/46656
    }),
    PoundGallon: new Unit({
        id: 'lb/gal',
        name: 'PoundGallon',
        type: TYPE,
        system: SYSTEM,
        converter: 1/231
    }),
    TonCubicYard: new Unit({
        id: 't/yd3',
        name: 'TonCubicYard',
        type: TYPE,
        system: SYSTEM,
        converter: 1/23.328
    }),
    SlugCubicFoot: new Unit({
        id: 'slug/ft3',
        name: 'SlugCubicFoot',
        type: TYPE,
        system: SYSTEM,
        converter: 1/53.7079
    }),
    PSIFeet: new Unit({
        id: 'psi/1000ft',
        name: 'PSIFeet',
        type: TYPE,
        system: SYSTEM,
        converter: 1/12000
    })
};

export default ImperialDensity;
