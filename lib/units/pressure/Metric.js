import Unit from '../Unit';
import System from '../System';
import Prefix from '../Prefix';

const TYPE = 'Pressure';

const Metric = new System('Metric', {
    Imperial: 1.4503768078 / (10**4)
});

const pascal = new Unit({
    id: 'Pa',
    name: 'Pascal',
    type: TYPE,
    system: Metric,
    converter: 1
});

const metrics = Unit.withPrefixes(pascal, Prefix.METRIC);

const others = {
    Bar: new Unit({
        id: 'bar',
        name: 'Bar',
        type: TYPE,
        system: Metric,
        converter: 100000
    }),
    Torr: new Unit({
        id: 'torr',
        name: 'Torr',
        type: TYPE,
        system: Metric,
        converter: 133.3224
    }),
    MillimeterMercury: new Unit({
        id: 'mmHg',
        name: 'MillimeterMercury',
        type: TYPE,
        system: Metric,
        converter: 133.322
    }),
    KilogramsPerSquareMeter: new Unit({
        id: 'kg/m2',
        name: 'KilogramsPerSquareMeter',
        type: TYPE,
        system: Metric,
        converter: 9.8067
    }),
    NewtonsPerSquareMeter: new Unit({
        id: 'N/m2',
        name: 'NewtonsPerSquareMeter',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    Atmosphere: new Unit({
        id: 'atm',
        name: 'Atmosphere',
        type: TYPE,
        system: Metric,
        converter: 101325
    })
};

const PressureMetric = Object.assign(metrics, others);
export default PressureMetric;
