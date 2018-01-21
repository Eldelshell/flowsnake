import Unit from '../Unit';
import System from '../System';

const TYPE = 'Data';

const Bits = new System('Bit', {
    Bytes: 1/8,
    BinaryBit: 1024,
    BinaryByte: 1/8
});

const Bit = {
    Bit: new Unit({
        id: 'bit',
        name: 'Bit',
        type: TYPE,
        system: Bits,
        converter: 1
    }),
    Kilobit: new Unit({
        id: 'Kb',
        name: 'Kilobit',
        type: TYPE,
        system: Bits,
        converter: 1000
    }),
    Megabit: new Unit({
        id: 'Mb',
        name: 'Megabit',
        type: TYPE,
        system: Bits,
        converter: 1000**2
    }),
    Gigabit: new Unit({
        id: 'Gb',
        name: 'Gigabit',
        type: TYPE,
        system: Bits,
        converter: 1000**3
    }),
    Terabit: new Unit({
        id: 'Tb',
        name: 'Terabit',
        type: TYPE,
        system: Bits,
        converter: 1000**4
    })
};

export default Bit;
