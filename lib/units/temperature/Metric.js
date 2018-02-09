import Decimal from 'decimal.js';
import Unit from '../Unit';
import System from '../System';

const TYPE = 'Temperature';

const Metric = new System('Metric');

const TemperatureMetric = {
    Celsius: new Unit({
        id: '°C',
        name: 'Celsius',
        type: TYPE,
        system: Metric,
        converters: {
            Fahrenheit: (v) => Decimal.mul(v, 1.8).add(32),
            Kelvin: (v) => Decimal.add(v, 273.15),
            Rankine: (v) => Decimal.mul(v, 1.8).add(32).add(459.67)
        }
    }),
    Kelvin: new Unit({
        id: 'K',
        name: 'Kelvin',
        type: TYPE,
        system: Metric,
        converters: {
            Celsius: (k) => Decimal.sub(k, 273.15),
            Fahrenheit: (k) => Decimal.sub(k, 273.15).mul(1.8).add(32),
            Rankine: (k) => Decimal.sub(k, 273.15).mul(1.8).add(32).add(459.67)
        }
    })
};

export default TemperatureMetric;
