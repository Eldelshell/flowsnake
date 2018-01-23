import Descriptor from '../Descriptor';
import PressureMetric from './Metric';
import PressureImperial from './Imperial';

const Pressure = new Descriptor([PressureMetric, PressureImperial]);
export default Pressure;
