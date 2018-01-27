import Unit from '../Unit';
import System from '../System';
import Descriptor from '../Descriptor';

const TYPE = 'AparentPower';

const Metric = new System('Metric');

const units = {
    VoltAmpere: new Unit({
        id: 'VA',
        name: 'VoltAmpere',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    MilliVoltAmpere: new Unit({
        id: 'mVA',
        name: 'MilliVoltAmpere',
        type: TYPE,
        system: Metric,
        converter: 1/1000
    }),
    KiloVoltAmpere: new Unit({
        id: 'kVA',
        name: 'KiloVoltAmpere',
        type: TYPE,
        system: Metric,
        converter: 1000
    }),
    MegaVoltAmpere: new Unit({
        id: 'MVA',
        name: 'MegaVoltAmpere',
        type: TYPE,
        system: Metric,
        converter: 1000000
    }),
    GigaVoltAmpere: new Unit({
        id: 'GVA',
        name: 'GigaVoltAmpere',
        type: TYPE,
        system: Metric,
        converter: 1000000000
    })
};

const AparentPower = new Descriptor([units]);
export default AparentPower;
