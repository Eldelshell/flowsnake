import Unit from '../Unit';
import System from '../System';

const TYPE = 'Temperature';

const Metric = new System('Metric');

const TemperatureMetric = {
    Celsius: new Unit({
        id: 'C',
        name: 'Celsius',
        type: TYPE,
        system: Metric,
        converters: {
            Fahrenheit: (v) => `1.8 * ${v} + 32`,
            Kelvin: (v) => `${v} + 273.15`,
            Rankine: (v) => `(1.8 * ${v} + 32) + 459.67`
        }
    }),
    Kelvin: new Unit({
        id: 'K',
        name: 'Kelvin',
        type: TYPE,
        system: Metric,
        converters: {
            Celsius: (k) => `${k} - 273.15`,
            Fahrenheit: (k) => `(1.8 * (${k} - 273.15)) + 32`,
            Rankine: (k) => `((1.8 * (${k} - 273.15)) + 32) + 459.67`
        }
    })
};

export default TemperatureMetric;
