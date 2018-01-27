import Unit from '../../Unit';
import System from '../../System';

const TYPE = 'Illuminance';

const Imperial = new System('Imperial', {
    Metric: 10.76391
});

const IlluminanceImperial = {
    FootCandle: new Unit({
        id: 'fc',
        name: 'FootCandle',
        type: TYPE,
        system: Imperial,
        converter: 1
    }),
    LumenSquareFoot: new Unit({
        id: 'lm/ft2',
        name: 'LumenSquareFoot',
        type: TYPE,
        system: Imperial,
        converter: 1
    })
};

export default IlluminanceImperial;
