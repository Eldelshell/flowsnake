import Descriptor from './Descriptor';
import Unit from './Unit';
import System from './System';

const TYPE = 'ImageResolution';

const SYSTEM = new System('Unique');

const units = {
    DotPerInch: new Unit({
        id: 'dpi',
        name: 'DotPerInch',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    }),
    PixelPerInch: new Unit({
        id: 'ppi',
        name: 'PixelPerInch',
        type: TYPE,
        system: SYSTEM,
        converter: 1
    }),
    DotPerCentimeter: new Unit({
        id: 'dpcm',
        name: 'DotPerCentimeter',
        type: TYPE,
        system: SYSTEM,
        converter: 2.54
    }),
    PixelPerCentimeter: new Unit({
        id: 'ppcm',
        name: 'PixelPerCentimeter',
        type: TYPE,
        system: SYSTEM,
        converter: 2.54
    })
};


const ImageResolution = new Descriptor([units]);
export default ImageResolution;
