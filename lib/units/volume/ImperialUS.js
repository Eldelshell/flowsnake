import Unit from '../Unit';
import System from '../System';

const TYPE = 'Volume';

const ImperialUS = new System('ImperialUS', {
    FluidOunce: 1,
    Liter: 0.0296,
    CubicMeter: 0.0296 / 1000,
    Swedish: 0.0296,
    ImperialUK: 1.0408,
    Imperial: 3.8681/100000
});

const VolumeImperialUS = {
    FluidOunce: new Unit({
        id: 'fl-oz-us',
        name: 'FluidOunce',
        type: TYPE,
        system: ImperialUS,
        converter: 1
    }),
    Gallon: new Unit({
        id: 'gal-us',
        name: 'Gallon',
        type: TYPE,
        system: ImperialUS,
        converter: 128
    }),
    Teaspoon: new Unit({
        id: 'tsp-us',
        name: 'Teaspoon',
        type: TYPE,
        system: ImperialUS,
        converter: 1/6
    }),
    Tablespoon: new Unit({
        id: 'tbsp-us',
        name: 'Tablespoon',
        type: TYPE,
        system: ImperialUS,
        converter: 1/2
    }),
    Cup: new Unit({
        id: 'cup',
        name: 'Cup',
        type: TYPE,
        system: ImperialUS,
        converter: 8
    }),
    Pint: new Unit({
        id: 'pint-us',
        name: 'Pint',
        type: TYPE,
        system: ImperialUS,
        converter: 16
    }),
    Quart: new Unit({
        id: 'qt-us',
        name: 'Quart',
        type: TYPE,
        system: ImperialUS,
        converter: 32
    }),
    Barrel: new Unit({
        id: 'bbl-us',
        name: 'Barrel',
        type: TYPE,
        system: ImperialUS,
        converter: 4032
    })
};

export default VolumeImperialUS;
