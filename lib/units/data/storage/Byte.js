import Unit from '../../Unit';
import System from '../../System';

const TYPE = 'Storage';

const Bytes = new System('Bytes', {
    Bit: 8,
    BinaryBit: 8,
    BinaryByte: 1024
});

const Byte = {
    Byte: new Unit({
        id: 'byte',
        name: 'Byte',
        type: TYPE,
        system: Bytes,
        converter: 1
    }),
    Kilobyte: new Unit({
        id: 'kB',
        name: 'Kilobyte',
        type: TYPE,
        system: Bytes,
        converter: 1000
    }),
    Megabyte: new Unit({
        id: 'MB',
        name: 'Megabyte',
        type: TYPE,
        system: Bytes,
        converter: 1000**2
    }),
    Gigabyte: new Unit({
        id: 'GB',
        name: 'Gigabyte',
        type: TYPE,
        system: Bytes,
        converter: 1000**3
    }),
    Terabyte: new Unit({
        id: 'TB',
        name: 'Terabyte',
        type: TYPE,
        system: Bytes,
        converter: 1000**4
    })
};

export default Byte;
