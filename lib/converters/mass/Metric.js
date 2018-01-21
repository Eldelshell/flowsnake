import Unit from '../Unit';
import System from '../System';

const TYPE = 'Mass';

const Metric = new System('Metric', {
    Imperial: 1/453.592
});

const MassMetric = {
    Gram: new Unit({
        id: 'g',
        name: 'Gram',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    Milligram: new Unit({
        id: 'mg',
        name: 'Milligram',
        type: TYPE,
        system: Metric,
        converter: 1/1000
    }),
    Microgram: new Unit({
        id: 'mcg',
        name: 'Microgram',
        type: TYPE,
        system: Metric,
        converter: 1/1000000
    }),
    Kilogram: new Unit({
        id: 'kg',
        name: 'Kilogram',
        type: TYPE,
        system: Metric,
        converter: 1000
    }),
    Ton: new Unit({
        id: 'mt',
        name: 'Ton',
        type: TYPE,
        system: Metric,
        converter: 1000000
    })
};

export default MassMetric;
