import Unit from '../../Unit';
import System from '../../System';
import Prefix from '../../Prefix';

const TYPE = 'Storage';

const SYSTEM = new System('BinaryBit', {
    Bit: 1/1024,
    Bytes: 1/8,
    BinaryByte: 1/1024
});

const base = new Unit({
    id: 'i', // only as reference for Bit.Bit
    name: 'Bibit',
    type: TYPE,
    system: SYSTEM,
    converter: 1
});

const BinaryBit = Unit.withPrefixes(base, Prefix.DATA_BINARY);
export default BinaryBit;
