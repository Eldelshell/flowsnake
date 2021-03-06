import Descriptor from '../../Descriptor';
import Bit from './Bit';
import BinaryBit from './BinaryBit';
import BinaryByte from './BinaryByte';
import Byte from './Byte';

const Storage = new Descriptor([Bit, Byte, BinaryBit, BinaryByte]);
export default Storage;
