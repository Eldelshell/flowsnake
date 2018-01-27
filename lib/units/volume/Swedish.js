import Unit from '../Unit';
import System from '../System';

const TYPE = 'Volume';

const Swedish = new System('Swedish', {
    Metric: 1,
    ImperialUK: 35.1951,
    ImperialUS: 33.814,
    Imperial: 0.001308
});

const VolumeSwedish = {
    Kryddmatt: new Unit({
        id: 'krm',
        name: 'Kryddmatt',
        type: TYPE,
        system: Swedish,
        converter: 1/1000
    }),
    Tesked: new Unit({
        id: 'tsk',
        name: 'Tesked',
        type: TYPE,
        system: Swedish,
        converter: 5/1000
    }),
    Matsked: new Unit({
        id: 'msk',
        name: 'Matsked',
        type: TYPE,
        system: Swedish,
        converter: 15/1000
    }),
    Kaffekopp: new Unit({
        id: 'kkp',
        name: 'Kaffekopp',
        type: TYPE,
        system: Swedish,
        converter: 150/1000
    }),
    Glas: new Unit({
        id: 'glas',
        name: 'Glas',
        type: TYPE,
        system: Swedish,
        converter: 200/1000
    }),
    Kanna: new Unit({
        id: 'kanna',
        name: 'Kanna',
        type: TYPE,
        system: Swedish,
        converter: 2.617
    })
};

export default VolumeSwedish;
