import Unit from '../Unit';
import System from '../System';

const TYPE = 'Density';

const SYSTEM = new System('Liter', {
    Metric: 1000,
    Imperial: 3.6127*(10**-2),
    Ounce: 5.7804*(10**-1)
});

const LiterDensity = {
    KilogramLiter: new Unit({
        id: 'kg/l',
        name: 'KilogramLiter',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    }),
    GramLiter: new Unit({
        id: 'g/l',
        name: 'GramLiter',
        type: TYPE,
        system: SYSTEM,
        converter: 1*(10**-3)
    }),
    MilligramLiter: new Unit({
        id: 'mg/l',
        name: 'MilligramLiter',
        type: TYPE,
        system: SYSTEM,
        converter: 1*(10**-6)
    })
};

export default LiterDensity;
