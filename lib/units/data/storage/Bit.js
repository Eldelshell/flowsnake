import Unit from '../../Unit';
import System from '../../System';
import Prefix from '../../Prefix';

const TYPE = 'Storage';

const Bits = new System('Bit', {
    Bytes: 1/8,
    BinaryBit: 1024,
    BinaryByte: 1/8
});

const base = new Unit({
    id: 'b',
    name: 'BaseBit',
    type: TYPE,
    system: Bits,
    converter: 1
});

const Bit = Unit.withPrefixes(base, Prefix.DATA_DECIMAL);

// Alias so we can use "bit"
Bit['Bit'] = new Unit({
    id: 'bit',
    name: 'Bit',
    type: TYPE,
    system: Bits,
    converter: 1
});


export default Bit;
