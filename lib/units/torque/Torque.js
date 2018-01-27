import Descriptor from '../Descriptor';
import TorqueMetric from './Metric';
import TorqueImperial from './Imperial';
import TorqueGravitational from './Gravitational';

const Torque = new Descriptor([TorqueMetric, TorqueImperial, TorqueGravitational]);
export default Torque;
