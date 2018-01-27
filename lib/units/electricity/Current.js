import Unit from '../Unit';
import System from '../System';
import Descriptor from '../Descriptor';

const TYPE = 'Current';

const Metric = new System('Metric');

const units = {
    Ampere: new Unit({
        id: 'A',
        name: 'Ampere',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    Milliampere: new Unit({
        id: 'mA',
        name: 'Milliampere',
        type: TYPE,
        system: Metric,
        converter: 1/1000
    }),
    Kiloampere: new Unit({
        id: 'kA',
        name: 'Kiloampere',
        type: TYPE,
        system: Metric,
        converter: 1000
    }),
    Microampere: new Unit({
        id: 'µA',
        name: 'Microampere',
        type: TYPE,
        system: Metric,
        converter: 1/1000000
    }),
    Abampere: new Unit({
        id: 'abA',
        name: 'Abampere',
        type: TYPE,
        system: Metric,
        converter: 10
    }),
    Biot: new Unit({
        id: 'Bi',
        name: 'Biot',
        type: TYPE,
        system: Metric,
        converter: 10
    }),
    Statampere: new Unit({
        id: 'statA',
        name: 'Statampere',
        type: TYPE,
        system: Metric,
        converter: 3.335641/10000000000
    })
};

const Current = new Descriptor([units]);
export default Current;
