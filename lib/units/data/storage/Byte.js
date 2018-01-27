import Unit from '../../Unit';
import System from '../../System';
import Prefix from '../../Prefix';

const TYPE = 'Storage';

const Bytes = new System('Bytes', {
    Bit: 8,
    BinaryBit: 8,
    BinaryByte: 1024
});

const base = new Unit({
    id: 'B',
    name: 'BaseByte',
    type: TYPE,
    system: Bytes,
    converter: 1
});

const Byte = Unit.withPrefixes(base, Prefix.DATA_DECIMAL);

// Alias so we can use "byte"
Byte['Byte'] = new Unit({
    id: 'byte',
    name: 'Byte',
    type: TYPE,
    system: Bytes,
    converter: 1
});


export default Byte;
