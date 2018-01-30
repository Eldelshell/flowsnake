import Unit from './Unit';
import System from './System';
import Descriptor from './Descriptor';

const TYPE = 'Sound';

const SYSTEM = new System('SI');

const units = {
    Decibel: new Unit({
        id: 'dB',
        name: 'Decibel',
        type: TYPE,
        system: SYSTEM,
        converters: {
            Neper: 8.685889638
        }
    }),
    Neper: new Unit({
        id: 'Np',
        name: 'Neper',
        type: TYPE,
        system: SYSTEM,
        converters: {
            Decibel: 0.115129255
        }
    })
};

const Sound = new Descriptor([units]);
export default Sound;
