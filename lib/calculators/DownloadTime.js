import Calculator from './Calculator';
import Storage from '../units/data/storage/Storage';
import Transfer from '../units/data/transfer/Transfer';
import Time from '../units/Time';

/**
 * Calculates the download time.
 */
export default class DownloadTime extends Calculator {

    static name() {
        return 'download-time';
    }

    /**
     * Calculates the download time.
     * @param  {Unit<Storage>} size - the size of the download as a Unit of data Storage
     * @param  {Unit<Transfer>} speed - the connection speed as a Unit of data Transfer
     * @return {Unit<Time>} a Unit of Time in seconds.
     */
    calculate({size, speed}){
        const bytes = size.to(Storage.getUnit('byte'));
        const bytesPerSecond = speed.to(Transfer.getUnit('b/s'));
        // ${bytes} / ${bytesPerSecond}
        const res = bytes.div(bytesPerSecond);
        return Time.of(res, 's');
    }

}
