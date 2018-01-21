import Unit from '../Unit';
import System from '../System';

const TYPE = 'Area';

const Imperial = new System('Imperial', {
    Metric: 1/10.7639
});

const AreaImperial = {
    SquareFoot: new Unit({
        id: 'ft2',
        name: 'SquareFoot',
        type: TYPE,
        system: Imperial,
        converter: 1
    }),
    SquareMile: new Unit({
        id: 'mile2',
        name: 'SquareMile',
        type: TYPE,
        system: Imperial,
        converter: 27878400
    }),
    SquareInch: new Unit({
        id: 'in2',
        name: 'SquareInch',
        type: TYPE,
        system: Imperial,
        converter: 1/144
    }),
    SquareYard: new Unit({
        id: 'yd2',
        name: 'SquareYard',
        type: TYPE,
        system: Imperial,
        converter: 9
    }),
    Acre: new Unit({
        id: 'ac',
        name: 'Acre',
        type: TYPE,
        system: Imperial,
        converter: 43560
    })
};

export default AreaImperial;
