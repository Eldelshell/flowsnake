import Decimal from 'decimal.js';
import Calculator from './Calculator';
import Distance from '../units/distance/Distance';
import ImageResolution from '../units/ImageResolution';

/**
 * Calculates display resolution.
 */
export default class DisplayResolution extends Calculator {

    static name() {
        return 'display-resolution';
    }

    constructor() {
        super(10);
    }

    /**
     * Calculates display resolution as PPI.
     * @param  {Number} horizontal - the horizontal resolution
     * @param  {Number} vertical - the vertical resolution
     * @param  {Unit<Distance>} height - the connection speed as a Unit of data Transfer
     * @return {Unit<ImageResolution>} a Unit of ImageResolution in PixelPerInch (PPI).
     */
    calculate({horizontal, vertical, size}){
        this.validate(size, 'Distance');

        const h = new Decimal(horizontal).pow(2);
        const w = new Decimal(vertical).pow(2);

        const di = size.to(Distance.getUnit('Inch'));
        const dp = h.plus(w).sqrt();
        const res = dp.div(di);
        return ImageResolution.of(res, 'ppi');
    }

}
