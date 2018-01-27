import Unit from '../../Unit';
import System from '../../System';
import Prefix from '../../Prefix';

const TYPE = 'Storage';

const SYSTEM = new System('BinaryByte', {
    Bit: 8,
    Bytes: 1/1024,
    BinaryBit: 1/8
});

const base = new Unit({
    id: 'iB', // only as reference for Byte.Byte
    name: 'Bibyte',
    type: TYPE,
    system: SYSTEM,
    converter: 1
});

const BinaryByte = Unit.withPrefixes(base, Prefix.DATA_BINARY);
export default BinaryByte;
