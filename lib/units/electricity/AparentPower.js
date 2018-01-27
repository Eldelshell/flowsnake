import Unit from '../Unit';
import System from '../System';
import Descriptor from '../Descriptor';
import Prefix from '../Prefix';

const TYPE = 'AparentPower';

const Metric = new System('Metric');

const base = new Unit({
    id: 'VA',
    name: 'VoltAmpere',
    type: TYPE,
    system: Metric,
    converter: 1
});

const units = Unit.withPrefixes(base, Prefix.METRIC);
const AparentPower = new Descriptor([units]);
export default AparentPower;
