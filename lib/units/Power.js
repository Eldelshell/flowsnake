import Unit from './Unit';
import System from './System';
import Descriptor from './Descriptor';
import Prefix from './Prefix';

const TYPE = 'Power';

const Metric = new System('Metric');

const base = new Unit({
    id: 'W',
    name: 'Watt',
    type: TYPE,
    system: Metric,
    converter: 1
});

const watts = Unit.withPrefixes(base, Prefix.METRIC);

const others = {
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

const units = Object.assign(watts, others);
const Power = new Descriptor([units]);
export default Power;
