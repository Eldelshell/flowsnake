import Unit from '../../Unit';
import System from '../../System';

const TYPE = 'AngularVelocity';

const SYSTEM = new System('Revolution', {
    Radian: 6.2832,
    Degree: 360
});

const Revolution = {
    RevolutionPerSecond: new Unit({
        id: 'rev/s',
        name: 'RevolutionPerSecond',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    }),
    RevolutionPerMinute: new Unit({
        id: 'rev/m',
        name: 'RevolutionPerMinute',
        type: TYPE,
        system: SYSTEM,
        converter: 1/60
    }),
    RevolutionPerHour: new Unit({
        id: 'rev/h',
        name: 'RevolutionPerHour',
        type: TYPE,
        system: SYSTEM,
        converter: 1/3600
    }),
    RevolutionPerDay: new Unit({
        id: 'rev/d',
        name: 'RevolutionPerDay',
        type: TYPE,
        system: SYSTEM,
        converter: 1/86400
    })
};

export default Revolution;
