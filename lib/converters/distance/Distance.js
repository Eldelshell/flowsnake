import Descriptor from '../Descriptor';
import DistanceMetric from './Metric';
import DistanceImperial from './Imperial';
import DistanceAstronomical from './Astronomical';

const Distance = new Descriptor([DistanceMetric, DistanceImperial, DistanceAstronomical]);
export default Distance;
