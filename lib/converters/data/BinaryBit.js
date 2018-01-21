import Unit from '../Unit';
import System from '../System';

const TYPE = 'Data';

const BinaryBit = new System('BinaryBit', {
    Bit: 1/1024,
    Bytes: 1/8,
    BinaryByte: 1/1024
});

const DataBinaryBit = {
    Bibit: new Unit({
        id: 'bibit', // only as reference for Bit.Bit
        name: 'Bibit',
        type: TYPE,
        system: BinaryBit,
        converter: 1
    }),
    Kibibit: new Unit({
        id: 'Ki',
        name: 'Kibibit',
        type: TYPE,
        system: BinaryBit,
        converter: 1024
    }),
    Mebibit: new Unit({
        id: 'Mi',
        name: 'Mebibit',
        type: TYPE,
        system: BinaryBit,
        converter: 1024**2
    }),
    Gibibit: new Unit({
        id: 'Gi',
        name: 'Gibibit',
        type: TYPE,
        system: BinaryBit,
        converter: 1024**3
    }),
    Tebibit: new Unit({
        id: 'Ti',
        name: 'Tebibit',
        type: TYPE,
        system: BinaryBit,
        converter: 1024**4
    })
};

export default DataBinaryBit;
