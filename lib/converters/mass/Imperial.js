import Unit from '../Unit';
import System from '../System';

const TYPE = 'Mass';

const Imperial = new System('Imperial', {
    Metric: 453.592
});

const MassImperial = {
    Pound: new Unit({
        id: 'lb',
        name: 'Pound',
        type: TYPE,
        system: Imperial,
        converter: 1
    }),
    Ounce: new Unit({
        id: 'oz',
        name: 'Ounce',
        type: TYPE,
        system: Imperial,
        converter: 1/16
    }),
    Ton: new Unit({
        id: 't',
        name: 'Ton',
        type: TYPE,
        system: Imperial,
        converter: 2000
    }),
    Stone: new Unit({
        id: 'stone',
        name: 'Stone',
        type: TYPE,
        system: Imperial,
        converter: 12.5
    }),
    Quarter: new Unit({
        id: 'qr',
        name: 'Quarter',
        type: TYPE,
        system: Imperial,
        converter: 28
    })
};

export default MassImperial;
