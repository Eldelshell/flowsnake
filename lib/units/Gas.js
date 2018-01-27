import Distance from './distance/Distance';
import Volume from './volume/Volume';
import Unit from './Unit';
import Descriptor from './Descriptor';

// Use the specific units so it's faster.
import Liter from './volume/Liter';
import VolumeImperialUK from './volume/ImperialUK';
import VolumeImperialUS from './volume/ImperialUS';
import DistanceMetric from './distance/Metric';
import DistanceImperial from './distance/Imperial';

const TYPE = 'Gas';

const km = DistanceMetric.Kilometer;
const mile = DistanceImperial.Mile;

const GasConsumtion = {
    LitersPer100Km: new Unit({
        id: 'l/100km',
        name: 'LitersPer100Km',
        type: TYPE,
        converters: {
            KmsPerLiter: (l) => `100 / ${l}`,
            MilesPerLiter: (l) => `${Distance.convert((100 / l), km, mile)} * 1`,
            MilesPerGallonUS: function(l){
                const t = Volume.convert(l, Liter.Liter, VolumeImperialUS.Gallon);
                const d = Distance.convert(100, km, mile);
                return `${d} / ${t}`;
            },
            MilesPerGallonUK: function(l){
                const t = Volume.convert(l, Liter.Liter, VolumeImperialUK.Gallon);
                const d = Distance.convert(100, km, mile);
                return `${d} / ${t}`;
            }
        }
    }),
    KmsPerLiter: new Unit({
        id: 'km/l',
        name: 'KmsPerLiter',
        type: TYPE,
        converters: {
            LitersPer100Km: (l) => `100 / ${l}`,
            MilesPerLiter: (k) => `${k} * 0.62`,
            MilesPerGallonUS: (k) => `${k} * 2.35`,
            MilesPerGallonUK: (k) => `${k} * 2.82`
        }
    }),
    MilesPerLiter: new Unit({
        id: 'mi/l',
        name: 'MilesPerLiter',
        type: TYPE,
        converters: {
            LitersPer100Km: (m) => `${Distance.convert((100 / m), km, mile)} * 1`,
            KmsPerLiter: (m) => `${m} * 1.60`,
            MilesPerGallonUS: (m) => `${m} * 3.78`,
            MilesPerGallonUK: (m) => `${m} * 4.54`
        }
    }),
    MilesPerGallonUS: new Unit({
        id: 'mpg-us',
        name: 'MilesPerGallonUS',
        type: TYPE,
        converters: {
            LitersPer100Km: (l) => {
                const t = Volume.convert(l, Liter.Liter, VolumeImperialUS.Gallon);
                const d = Distance.convert(100, km, mile);
                return `${d} / ${t}`;
            },
            KmsPerLiter: (m) => `${m} * 0.4251`,
            MilesPerLiter: (m) => `${m} * 0.2642`,
            MilesPerGallonUK: (m) => `${m} * 1.201`
        }
    }),
    MilesPerGallonUK: new Unit({
        id: 'mpg-uk',
        name: 'MilesPerGallonUK',
        type: TYPE,
        converters: {
            LitersPer100Km: (l) => {
                const t = Volume.convert(l, Liter.Liter, VolumeImperialUK.Gallon);
                const d = Distance.convert(100, km, mile);
                return `${d} / ${t}`;
            },
            KmsPerLiter: (m) => `${m} * 0.354`,
            MilesPerLiter: (m) => `${m} * 0.22`,
            MilesPerGallonUS: (m) => `${m} * 0.832`
        }
    })
};

const Gas = new Descriptor([GasConsumtion]);
export default Gas;
