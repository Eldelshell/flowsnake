import Descriptor from '../../Descriptor';
import IlluminanceMetric from './Metric';
import IlluminanceImperial from './Imperial';

const Illuminance = new Descriptor([IlluminanceMetric, IlluminanceImperial]);
export default Illuminance;
