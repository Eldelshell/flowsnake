import Descriptor from '../Descriptor';
import VolumeMetric from './Metric';
import VolumeImperialUK from './ImperialUK';
import VolumeImperialUS from './ImperialUS';
import VolumeImperial from './Imperial';
import VolumeSwedish from './Swedish';

const Volume = new Descriptor([VolumeMetric, VolumeImperialUK, VolumeImperialUS, VolumeImperial, VolumeSwedish]);
export default Volume;
