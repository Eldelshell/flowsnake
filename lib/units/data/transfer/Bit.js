import Unit from '../../Unit';
import System from '../../System';

const TYPE = 'Transfer';

const Bits = new System('Bit', {
    Bytes: 1/8
});

const Bit = {
    BitSecond: new Unit({
        id: 'bps',
        name: 'BitSecond',
        type: TYPE,
        system: Bits,
        converter: 1
    }),
    KilobitSecond: new Unit({
        id: 'kbps',
        name: 'KilobitSecond',
        type: TYPE,
        system: Bits,
        converter: 1000
    }),
    MegabitSecond: new Unit({
        id: 'Mbps',
        name: 'MegabitSecond',
        type: TYPE,
        system: Bits,
        converter: 1000**2
    }),
    GigabitSecond: new Unit({
        id: 'Gbps',
        name: 'GigabitSecond',
        type: TYPE,
        system: Bits,
        converter: 1000**3
    }),
    TerabitSecond: new Unit({
        id: 'Tbps',
        name: 'TerabitSecond',
        type: TYPE,
        system: Bits,
        converter: 1000**4
    })
};

export default Bit;
