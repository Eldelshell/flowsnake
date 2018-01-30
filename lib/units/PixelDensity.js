import Descriptor from './Descriptor';
import Unit from './Unit';
import System from './System';

const TYPE = 'PixelDensity';

const SYSTEM = new System('Unique');

const units = {
    Mdpi: new Unit({
        id: 'mdpi',
        name: 'Mdpi',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    }),
    Ldpi: new Unit({
        id: 'ldpi',
        name: 'Ldpi',
        type: TYPE,
        system: SYSTEM,
        converter: 1/0.75
    }),
    Hdpi: new Unit({
        id: 'hdpi',
        name: 'Hdpi',
        type: TYPE,
        system: SYSTEM,
        converter: 1/1.5
    }),
    Xhdpi: new Unit({
        id: 'xhdpi',
        name: 'Xhdpi',
        type: TYPE,
        system: SYSTEM,
        converter: 1/2
    }),
    Xxhdpi: new Unit({
        id: 'xxhdpi',
        name: 'Xxhdpi',
        type: TYPE,
        system: SYSTEM,
        converter: 1/3
    }),
    Xxxhdpi: new Unit({
        id: 'xxxhdpi',
        name: 'Xxxhdpi',
        type: TYPE,
        system: SYSTEM,
        converter: 1/4
    })
};


const PixelDensity = new Descriptor([units]);
export default PixelDensity;
