import Unit from '../../Unit';
import System from '../../System';

const TYPE = 'AngularVelocity';

const SYSTEM = new System('Degree', {
    Radian: 1/57.29,
    Revolution: 1/360
});

const Degree = {
    DegreePerSecond: new Unit({
        id: 'deg/s',
        name: 'DegreePerSecond',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    }),
    DegreePerMinute: new Unit({
        id: 'deg/m',
        name: 'DegreePerMinute',
        type: TYPE,
        system: SYSTEM,
        converter: 1/60
    }),
    DegreePerHour: new Unit({
        id: 'deg/h',
        name: 'DegreePerHour',
        type: TYPE,
        system: SYSTEM,
        converter: 1/3600
    }),
    DegreePerDay: new Unit({
        id: 'deg/d',
        name: 'DegreePerDay',
        type: TYPE,
        system: SYSTEM,
        converter: 1/86400
    })
};

export default Degree;
