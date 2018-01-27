import Unit from '../../Unit';
import System from '../../System';

const TYPE = 'Luminance';

const Metric = new System('Metric', {
    Imperial: 1/10.76391
});

const LuminanceMetric = {
    CandelaSquareMeter: new Unit({
        id: 'cd/m2',
        name: 'CandelaSquareMeter',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    Nit: new Unit({
        id: 'nt',
        name: 'Nit',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    Stilb: new Unit({
        id: 'sb',
        name: 'Stilb',
        type: TYPE,
        system: Metric,
        converter: 10000
    }),
    Lambert: new Unit({
        id: 'L',
        name: 'Lambert',
        type: TYPE,
        system: Metric,
        converter: 3183.0989
    }),
    LumenSquareMeterSteradian: new Unit({
        id: 'lm/m2/sr',
        name: 'LumenSquareMeterSteradian',
        type: TYPE,
        system: Metric,
        converter: 1
    })
};

export default LuminanceMetric;
