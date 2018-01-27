import Unit from '../../Unit';
import System from '../../System';

const TYPE = 'Transfer';

const Bytes = new System('Bytes', {
    Bit: 8
});

const Byte = {
    ByteSecond: new Unit({
        id: 'b/s',
        name: 'ByteSecond',
        type: TYPE,
        system: Bytes,
        converter: 1
    }),
    KilobyteSecond: new Unit({
        id: 'kB/s',
        name: 'KilobyteSecond',
        type: TYPE,
        system: Bytes,
        converter: 1000
    }),
    MegabyteSecond: new Unit({
        id: 'MB/s',
        name: 'MegabyteSecond',
        type: TYPE,
        system: Bytes,
        converter: 1000**2
    }),
    GigabyteSecond: new Unit({
        id: 'GB/s',
        name: 'GigabyteSecond',
        type: TYPE,
        system: Bytes,
        converter: 1000**3
    }),
    TerabyteSecond: new Unit({
        id: 'TB/s',
        name: 'TerabyteSecond',
        type: TYPE,
        system: Bytes,
        converter: 1000**4
    })
};

export default Byte;
