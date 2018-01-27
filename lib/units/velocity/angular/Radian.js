import Unit from '../../Unit';
import System from '../../System';

const TYPE = 'AngularVelocity';

const SYSTEM = new System('Radian', {
    Degree: 57.29,
    Revolution: 1/6.2832
});

const Radian = {
    RadianPerSecond: new Unit({
        id: 'rad/s',
        name: 'RadianPerSecond',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    }),
    RadianPerMinute: new Unit({
        id: 'rad/m',
        name: 'RadianPerMinute',
        type: TYPE,
        system: SYSTEM,
        converter: 1/60
    }),
    RadianPerHour: new Unit({
        id: 'rad/h',
        name: 'RadianPerHour',
        type: TYPE,
        system: SYSTEM,
        converter: 1/3600
    }),
    RadianPerDay: new Unit({
        id: 'rad/d',
        name: 'RadianPerDay',
        type: TYPE,
        system: SYSTEM,
        converter: 1/86400
    })
};

export default Radian;
