import Unit from '../Unit';
import System from '../System';

const TYPE = 'Speed';

const Imperial = new System('Imperial', {
    Metric: 1.6093
});

const SpeedImperial = {
    MilePerHour: new Unit({
        id: 'm/h',
        name: 'MilePerHour',
        type: TYPE,
        system: Imperial,
        converter: 1
    }),
    KnotUS: new Unit({
        id: 'kt-us',
        name: 'KnotUS',
        type: TYPE,
        system: Imperial,
        converter: 1.150779
    }),
    KnotUK: new Unit({
        id: 'kt-uk',
        name: 'KnotUK',
        type: TYPE,
        system: Imperial,
        converter: 1.1515
    }),
    FootPerSecond: new Unit({
        id: 'ft/s',
        name: 'FootPerSecond',
        type: TYPE,
        system: Imperial,
        converter: 0.681818
    })
};

export default SpeedImperial;
