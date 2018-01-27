import Descriptor from '../../Descriptor';
import LuminanceMetric from './Metric';
import LuminanceImperial from './Imperial';

const Luminance = new Descriptor([LuminanceMetric, LuminanceImperial]);
export default Luminance;
