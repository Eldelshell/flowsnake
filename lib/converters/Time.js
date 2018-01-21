import Unit from './Unit';
import System from './System';
import Descriptor from './Descriptor';

const TYPE = 'Time';

const Metric = new System('Metric');

const units = {
    Second: new Unit({
        id: 's',
        name: 'Second',
        type: TYPE,
        system: Metric,
        converter: 1
    }),
    Millisecond: new Unit({
        id: 'ms',
        name: 'Millisecond',
        type: TYPE,
        system: Metric,
        converter: 1/1000
    }),
    Microsecond: new Unit({
        id: 'mu',
        name: 'Microsecond',
        type: TYPE,
        system: Metric,
        converter: 1/1000000
    }),
    Nanosecond: new Unit({
        id: 'MHz',
        name: 'Nanosecond',
        type: TYPE,
        system: Metric,
        converter: 1/1000000000
    }),
    Minute: new Unit({
        id: 'min',
        name: 'Minute',
        type: TYPE,
        system: Metric,
        converter: 60
    }),
    Hour: new Unit({
        id: 'h',
        name: 'Hour',
        type: TYPE,
        system: Metric,
        converter: 60 * 60
    }),
    Day: new Unit({
        id: 'd',
        name: 'Day',
        type: TYPE,
        system: Metric,
        converter: 60 * 60 * 24
    }),
    Week: new Unit({
        id: 'week',
        name: 'Week',
        type: TYPE,
        system: Metric,
        converter: 60 * 60 * 24 * 7
    }),
    Month: new Unit({
        id: 'month',
        name: 'Month',
        type: TYPE,
        system: Metric,
        converter: 60 * 60 * 24 * 365.25 / 12
    }),
    Year: new Unit({
        id: 'year',
        name: 'Year',
        type: TYPE,
        system: Metric,
        converter: 60 * 60 * 24 * 365.25
    })
};

const Time = new Descriptor([units]);
export default Time;
