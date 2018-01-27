import Descriptor from '../Descriptor';
import AccelerationMetric from './Metric';
import AccelerationImperial from './Imperial';

const Acceleration = new Descriptor([AccelerationMetric, AccelerationImperial]);
export default Acceleration;
