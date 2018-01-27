import Unit from './Unit';
import System from './System';
import Descriptor from './Descriptor';

const TYPE = 'AngularAcceleration';

const Metric = new System('Metric', {
    Degree: 1
});

const units = {
    RadianPerSquareSecond: new Unit({
        id: 'rad/s2',
        name: 'RadianPerSquareSecond',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    RadianPerSquareMinute: new Unit({
        id: 'rad/min2',
        name: 'RadianPerSquareMinute',
        type: TYPE,
        system: Metric,
        converter: 1/3600
    }),
    RevolutionPerSquareSecond: new Unit({
        id: 'r/s2',
        name: 'RevolutionPerSquareSecond',
        type: TYPE,
        system: Metric,
        converter: 6.2832
    }),
    RevolutionPerSquareMinute: new Unit({
        id: 'r/min2',
        name: 'RevolutionPerSquareMinute',
        type: TYPE,
        system: Metric,
        converter: 1/572.9578
    })
};

const AngularAcceleration = new Descriptor([units]);
export default AngularAcceleration;
