import Unit from '../Unit';
import System from '../System';
import Prefix from '../Prefix';

const TYPE = 'Volume';

const SYSTEM = new System('Liter', {
    CubicMeter: 1/1000,
    Swedish: 1,
    ImperialUK: 35.1951,
    ImperialUS: 33.814,
    Imperial: 0.001308
});

const base = new Unit({
    id: 'l',
    name: 'Liter',
    type: TYPE,
    system: SYSTEM,
    converter: 1
});

const Liter = Unit.withPrefixes(base, Prefix.METRIC);
export default Liter;
