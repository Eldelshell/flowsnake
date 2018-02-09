import Decimal from 'decimal.js';
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
            Celsius: (f) => Decimal.sub(f, 32).div(1.8),
            Kelvin: (f) => Decimal.sub(f, 32).div(1.8).add(273.15),
            Rankine: (f) => Decimal.add(f, 459.67)
        }
    }),
    Rankine: new Unit({
        id: '°R',
        name: 'Rankine',
        type: TYPE,
        system: Imperial,
        converters: {
            Celsius: (r) => Decimal.sub(r, 459.67).sub(32).div(1.8),
            Fahrenheit: (r) => Decimal.sub(r, 459.67),
            Kelvin: (r) => Decimal.sub(r, 459.67).sub(32).div(1.8).plus(273.15)
        }
    })
};

export default TemperatureImperial;
