import Descriptor from '../Descriptor';
import AreaMetric from './Metric';
import AreaImperial from './Imperial';

const Area = new Descriptor([AreaMetric, AreaImperial]);
export default Area;
