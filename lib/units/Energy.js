import Unit from './Unit';
import System from './System';
import Descriptor from './Descriptor';

const TYPE = 'Energy';

const Metric = new System('Metric', {
    Joule: 1
});

const joules = {
    Joule: new Unit({
        id: 'J',
        name: 'Joule',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    Kilojoule: new Unit({
        id: 'kJ',
        name: 'Kilojoule',
        type: TYPE,
        system: Metric,
        converter: 1000
    }),
    Megajoule: new Unit({
        id: 'MJ',
        name: 'Megajoule',
        type: TYPE,
        system: Metric,
        converter: 1000000
    }),
    WattHour: new Unit({
        id: 'Wh',
        name: 'WattHour',
        type: TYPE,
        system: Metric,
        converter: 3600
    }),
    MilliwattHour: new Unit({
        id: 'mWh',
        name: 'MilliwattHour',
        type: TYPE,
        system: Metric,
        converter: 3.6
    }),
    KilowattHour: new Unit({
        id: 'kWh',
        name: 'KilowattHour',
        type: TYPE,
        system: Metric,
        converter: 3600 * 1000
    }),
    MegawattHour: new Unit({
        id: 'MWh',
        name: 'MegawattHour',
        type: TYPE,
        system: Metric,
        converter: 3600 * (1000**2)
    }),
    GigawattHour: new Unit({
        id: 'GWh',
        name: 'GigawattHour',
        type: TYPE,
        system: Metric,
        converter: 3600 * (1000**3)
    }),
    BTU: new Unit({
        id: 'btu',
        name: 'BTU',
        type: TYPE,
        system: Metric,
        converter: 1055.0559
    }),
    Calorie: new Unit({
        id: 'cal',
        name: 'Calorie',
        type: TYPE,
        system: Metric,
        converter: 4.1868
    }),
    KilogramForceMeter: new Unit({
        id: 'kgfm',
        name: 'KilogramForceMeter',
        type: TYPE,
        system: Metric,
        converter: 9.8066
    }),
    GigaElectronVolt: new Unit({
        id: 'GeV',
        name: 'GigaElectronVolt',
        type: TYPE,
        system: Metric,
        converter: 1/(6.24151 * (10**14))
    })
};

const Energy = new Descriptor([joules]);
export default Energy;
