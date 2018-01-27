import Unit from '../Unit';
import System from '../System';
import Prefix from '../Prefix';

const TYPE = 'Volume';

const SYSTEM = new System('CubicMeter', {
    Liter: 1000,
    Swedish: 1000,
    ImperialUK: 35.1951 * 1000,
    ImperialUS: 33.814 * 1000,
    Imperial: 0.001308 * 1000
});

const base = new Unit({
    id: 'm3',
    name: 'CubicMeter',
    type: TYPE,
    system: SYSTEM,
    converter: 1
});

const CubicMeter = Unit.withPrefixes(base, Prefix.CUBIC);
export default CubicMeter;
