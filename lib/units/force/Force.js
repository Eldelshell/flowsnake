import Descriptor from '../Descriptor';
import ForceMetric from './Metric';
import ForceImperial from './Imperial';
import ForceGravitational from './Gravitational';

const Force = new Descriptor([ForceMetric, ForceImperial, ForceGravitational]);
export default Force;
