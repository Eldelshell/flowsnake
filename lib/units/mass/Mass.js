import Descriptor from '../Descriptor';
import MassMetric from './Metric';
import MassImperial from './Imperial';

const Mass = new Descriptor([MassMetric, MassImperial]);
export default Mass;
