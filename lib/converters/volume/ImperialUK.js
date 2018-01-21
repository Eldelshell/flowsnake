import Unit from '../Unit';
import System from '../System';

const TYPE = 'Volume';

const ImperialUK = new System('ImperialUK', {
    FluidOunce: 1,
    Metric: 0.0284,
    Swedish: 0.0284,
    ImperialUS: 0.9608,
    Imperial: 3.7163/100000
});

const VolumeImperialUK = {
    FluidOunce: new Unit({
        id: 'fl-oz-uk',
        name: 'FluidOunce',
        type: TYPE,
        system: ImperialUK,
        converter: 1
    }),
    Gallon: new Unit({
        id: 'gal-uk',
        name: 'Gallon',
        type: TYPE,
        system: ImperialUK,
        converter: 160
    }),
    Teaspoon: new Unit({
        id: 'tsp-uk',
        name: 'Teaspoon',
        type: TYPE,
        system: ImperialUK,
        converter: 1/4.8
    }),
    Tablespoon: new Unit({
        id: 'tbsp-uk',
        name: 'Tablespoon',
        type: TYPE,
        system: ImperialUK,
        converter: 1/1.6
    }),
    Pint: new Unit({
        id: 'pint-uk',
        name: 'Pint',
        type: TYPE,
        system: ImperialUK,
        converter: 20
    }),
    Quart: new Unit({
        id: 'qt-uk',
        name: 'Quart',
        type: TYPE,
        system: ImperialUK,
        converter: 40
    }),
    Barrel: new Unit({
        id: 'bbl-uk',
        name: 'Barrel',
        type: TYPE,
        system: ImperialUK,
        converter: 5760
    })
};

export default VolumeImperialUK;
