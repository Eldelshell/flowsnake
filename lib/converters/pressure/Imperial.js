import Unit from '../Unit';
import System from '../System';

const TYPE = 'Pressure';

const Imperial = new System('Imperial', {
    Metric: 1/(1.4503768078 / (10**4))
});

const PressureImperial = {
    PoundPerSquareInch: new Unit({
        id: 'psi',
        name: 'PoundPerSquareInch',
        type: TYPE,
        system: Imperial,
        converter: 1
    }),
    KilpoundPerSquareInch: new Unit({
        id: 'ksi',
        name: 'KilpoundPerSquareInch',
        type: TYPE,
        system: Imperial,
        converter: 1000
    }),
    PoundPerSquareFoot: new Unit({
        id: 'psf',
        name: 'PoundPerSquareFoot',
        type: TYPE,
        system: Imperial,
        converter: 1/144
    }),
    InchMercury: new Unit({
        id: 'inHg',
        name: 'InchMercury',
        type: TYPE,
        system: Imperial,
        converter: 1/2.036026
    })
};

export default PressureImperial;
