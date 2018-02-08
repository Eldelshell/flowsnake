import Descriptor from '../Descriptor';
import MetricDensity from './Metric';
import LiterDensity from './Liter';
import OunceDensity from './Ounce';
import ImperialDensity from './Imperial';
// import VolumeImperial from './Imperial';

const Density = new Descriptor([MetricDensity, LiterDensity, OunceDensity, ImperialDensity]);
export default Density;
