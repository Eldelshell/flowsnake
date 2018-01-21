import Descriptor from '../Descriptor';
import TemperatureMetric from './Metric';
import TemperatureImperial from './Imperial';

const Temperature = new Descriptor([TemperatureMetric, TemperatureImperial]);
export default Temperature;
