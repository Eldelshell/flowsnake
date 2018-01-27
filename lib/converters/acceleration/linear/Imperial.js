import Unit from '../../Unit';
import System from '../../System';

const TYPE = 'LinearAcceleration';

const Imperial = new System('Imperial', {
    Metric: 1/3.2808
});

const AccelerationImperial = {
    FootPerSquareSecond: new Unit({
        id: 'ft/s2',
        name: 'FootPerSquareSecond',
        type: TYPE,
        system: Imperial,
        converter: 1
    }),
    MilePerSquareSecond: new Unit({
        id: 'mi/s2',
        name: 'MilePerSquareSecond',
        type: TYPE,
        system: Imperial,
        converter: 5280
    }),
    InchPerSquareSecond: new Unit({
        id: 'in/s2',
        name: 'InchPerSquareSecond',
        type: TYPE,
        system: Imperial,
        converter: 1/12
    }),
    YardPerSquareSecond: new Unit({
        id: 'yd/s2',
        name: 'YardPerSquareSecond',
        type: TYPE,
        system: Imperial,
        converter: 3
    })
};

export default AccelerationImperial;
