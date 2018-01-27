import Unit from '../../Unit';
import System from '../../System';

const TYPE = 'Luminance';

const Imperial = new System('Imperial', {
    Metric: 10.76391
});

const LuminanceImperial = {
    CandelaSquareFoot: new Unit({
        id: 'cd/ft2',
        name: 'CandelaSquareFoot',
        type: TYPE,
        system: Imperial,
        converter: 1
    }),
    FootLambert: new Unit({
        id: 'fL',
        name: 'FootLambert',
        type: TYPE,
        system: Imperial,
        converter: 1/3.1416
    }),
    LumenSquareFootSteradian: new Unit({
        id: 'lm/ft2/sr',
        name: 'LumenSquareFootSteradian',
        type: TYPE,
        system: Imperial,
        converter: 1
    })
};

export default LuminanceImperial;
