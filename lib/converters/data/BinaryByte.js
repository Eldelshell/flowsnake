import Unit from '../Unit';
import System from '../System';

const TYPE = 'Data';

const BinaryByte = new System('BinaryByte', {
    Bit: 8,
    Bytes: 1/1024,
    BinaryBit: 1/8
});

const DataBinaryByte = {
    Bibyte: new Unit({
        id: 'bibyte', // only as reference for Byte.Byte
        name: 'Bibyte',
        type: TYPE,
        system: BinaryByte,
        converter: 1
    }),
    Kibibyte: new Unit({
        id: 'KiB',
        name: 'Kibibyte',
        type: TYPE,
        system: BinaryByte,
        converter: 1024
    }),
    Mebibyte: new Unit({
        id: 'MiB',
        name: 'Mebibyte',
        type: TYPE,
        system: BinaryByte,
        converter: 1024**2
    }),
    Gibibyte: new Unit({
        id: 'GiB',
        name: 'Gibibyte',
        type: TYPE,
        system: BinaryByte,
        converter: 1024**3
    }),
    Tebibyte: new Unit({
        id: 'TiB',
        name: 'Tebibyte',
        type: TYPE,
        system: BinaryByte,
        converter: 1024**4
    })
};

export default DataBinaryByte;
