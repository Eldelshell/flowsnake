import Unit from '../Unit';
import System from '../System';

const TYPE = 'Temperature';

const Imperial = new System('Imperial');

const TemperatureImperial = {
    Fahrenheit: new Unit({
        id: '°F',
        name: 'Fahrenheit',
        type: TYPE,
        system: Imperial,
        converters: {
            Celsius: (f) => `(${f} - 32) / 1.8`,
            Kelvin: (f) => `((${f} - 32) / 1.8) + 273.15`,
            Rankine: (f) => `${f} + 459.67`
        }
    }),
    Rankine: new Unit({
        id: '°R',
        name: 'Rankine',
        type: TYPE,
        system: Imperial,
        converters: {
            Celsius: (r) => `((${r} - 459.67) - 32) / 1.8`,
            Fahrenheit: (r) => `${r} - 459.67`,
            Kelvin: (r) => `(((${r} - 459.67) - 32) / 1.8) + 273.15`
        }
    })
};

export default TemperatureImperial;
