import Unit from './Unit';
import System from './System';
import Descriptor from './Descriptor';

const TYPE = 'Power';

const Metric = new System('Metric');

const units = {
    Watt: new Unit({
        id: 'W',
        name: 'Watt',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    Milliwatt: new Unit({
        id: 'mW',
        name: 'Milliwatt',
        type: TYPE,
        system: Metric,
        converter: 1/1000
    }),
    Kilowatt: new Unit({
        id: 'kW',
        name: 'Kilowatt',
        type: TYPE,
        system: Metric,
        converter: 1000
    }),
    Megawatt: new Unit({
        id: 'MW',
        name: 'Megawatt',
        type: TYPE,
        system: Metric,
        converter: 1 * (10**6)
    }),
    Gigawatt: new Unit({
        id: 'GW',
        name: 'Gigawatt',
        type: TYPE,
        system: Metric,
        converter: 1 * (10**8)
    }),
    JoulePerSecond: new Unit({
        id: 'J/s',
        name: 'JoulePerSecond',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    HorsePower: new Unit({
        id: 'HP',
        name: 'HorsePower', //Metric HP
        type: TYPE,
        system: Metric,
        converter: 735.4988
    }),
    BTUPerHour: new Unit({
        id: 'btu/h',
        name: 'BTUHour', // IT
        type: TYPE,
        system: Metric,
        converter: 1/3.4121
    }),
    CaloriePerHour: new Unit({
        id: 'cal/h',
        name: 'CaloriePerHour', // IT
        type: TYPE,
        system: Metric,
        converter: 859.8452
    }),
    ErgPerSecond: new Unit({
        id: 'erg/s',
        name: 'ErgPerSecond',
        type: TYPE,
        system: Metric,
        converter: 1/(1 * (10**7))
    })
};

const Power = new Descriptor([units]);
export default Power;
