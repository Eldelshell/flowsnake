import Unit from '../Unit';
import System from '../System';

const TYPE = 'Volume';

const Imperial = new System('Imperial', {
    CubicYard: 1,
    Liter: 764.5549,
    CubicMeter: 764.5549 / 1000,
    Swedish: 764.5549,
    ImperialUK: 26908.5692,
    ImperialUS: 25852.6753
});

const VolumeImperial = {
    CubicYard: new Unit({
        id: 'yd3',
        name: 'CubicYard',
        type: TYPE,
        system: Imperial,
        converter: 1
    }),
    CubicInch: new Unit({
        id: 'in3',
        name: 'CubicInch',
        type: TYPE,
        system: Imperial,
        converter: 1/46656
    }),
    CubicFoot: new Unit({
        id: 'ft3',
        name: 'CubicFoot',
        type: TYPE,
        system: Imperial,
        converter: 1/27
    })
};

export default VolumeImperial;
