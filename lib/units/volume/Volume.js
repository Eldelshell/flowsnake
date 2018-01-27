import Descriptor from '../Descriptor';
import Liter from './Liter';
import CubicMeter from './CubicMeter';
import VolumeImperialUK from './ImperialUK';
import VolumeImperialUS from './ImperialUS';
import VolumeImperial from './Imperial';
import VolumeSwedish from './Swedish';

const Volume = new Descriptor([Liter, CubicMeter, VolumeImperialUK, VolumeImperialUS, VolumeImperial, VolumeSwedish]);
export default Volume;
