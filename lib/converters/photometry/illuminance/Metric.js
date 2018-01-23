import Unit from '../../Unit';
import System from '../../System';

const TYPE = 'Illuminance';

const Metric = new System('Metric', {
    Imperial: 1/10.76391
});

const IlluminanceMetric = {
    Lux: new Unit({
        id: 'lx',
        name: 'Lux',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    Phot: new Unit({
        id: 'ph',
        name: 'Phot',
        type: TYPE,
        system: Metric,
        converter: 10000
    }),
    Nox: new Unit({
        id: 'nx',
        name: 'Nox',
        type: TYPE,
        system: Metric,
        converter: 1/1000
    }),
    MeterCandle: new Unit({
        id: 'mc',
        name: 'MeterCandle',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    LumenSquareMeter: new Unit({
        id: 'lm/m2',
        name: 'LumenSquareMeter',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    WattSquareCentimeter: new Unit({
        id: 'W/cm2',
        name: 'WattSquareCentimeter',
        type: TYPE,
        system: Metric,
        converter: 6830000
    })
};

export default IlluminanceMetric;
