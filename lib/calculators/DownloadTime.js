import Calculator from './Calculator';
import Convert from '../Convert';
import Storage from '../converters/data/storage/Storage';
import Transfer from '../converters/data/transfer/Transfer';
import Time from '../converters/Time';

export default class DownloadTime extends Calculator {

    static name() {
        return 'download-time';
    }

    constructor() {
        super('download-time');
    }

    calculate({size, speed}){
        const bytes = size.to(Storage.getUnitById('byte'));
        const bytesPerSecond = speed.to(Transfer.getUnitById('b/s'));
        const res = this.evaluate(`${bytes} / ${bytesPerSecond}`);
        return Time.of(res, 's');
    }

}
