import Unit from './Unit';
import System from './System';
import Descriptor from './Descriptor';

const TYPE = 'Angle';

const Metric = new System('Metric', {
    Degree: 1
});

const Angles = {
    Degree: new Unit({
        id: 'deg',
        name: 'Degree',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    Radian: new Unit({
        id: 'rad',
        name: 'Radian',
        type: TYPE,
        system: Metric,
        converter: 180/Math.PI
    }),
    Gradian: new Unit({
        id: 'grad',
        name: 'Gradian',
        type: TYPE,
        system: Metric,
        converter: 9/10
    }),
    Arcmin: new Unit({
        id: 'arcmin',
        name: 'Arcmin',
        type: TYPE,
        system: Metric,
        converter: 1/60
    }),
    Arcsec: new Unit({
        id: 'arcsec',
        name: 'Arcsec',
        type: TYPE,
        system: Metric,
        converter: 1/3600
    })
};

const Angle = new Descriptor([Angles]);
export default Angle;
