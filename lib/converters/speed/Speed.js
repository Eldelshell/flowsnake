import Descriptor from '../Descriptor';
import SpeedMetric from './Metric';
import SpeedImperial from './Imperial';

const Speed = new Descriptor([SpeedMetric, SpeedImperial]);
export default Speed;
