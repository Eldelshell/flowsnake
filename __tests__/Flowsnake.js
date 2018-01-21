import _ from 'lodash';
import Decimal from 'decimal.js';
import Flowsnake from '../lib';
import Temperature from '../lib/converters/temperature/Temperature';
import TemperatureMetric from '../lib/converters/temperature/Metric';

it('Flowsnake should convert without descriptor', () => {
    expect(Flowsnake.convert(1).from('C').to('K')).toBeDefined();
    expect(Flowsnake.convert(1).from('C').to('C')).toBeDefined();
});

it('Flowsnake should convert with Decimal.js BigDecimal', () => {
    const v = new Decimal(30.5);
    expect(Flowsnake.convert(v).from('C').to('K')).toBeDefined();
});

it('Flowsnake should convert with descriptor name', () => {
    expect(Flowsnake.convert(1).with('temperature').from('C').to('K')).toBeDefined();
});

it('Flowsnake should convert with descriptor object', () => {
    expect(Flowsnake.convert(1).with(Temperature).from('C').to('K')).toBeDefined();
});

it('Flowsnake should convert with unit objects', () => {
    expect(Flowsnake.convert(1).with(Temperature).from(TemperatureMetric.Celsius).to(TemperatureMetric.Kelvin)).toBeDefined();
});

it('Flowsnake should fail', () => {
    expect(() => Flowsnake.convert(1).to('C') ).toThrow();
    expect(() => Flowsnake.convert(1).from('ft2').to('C') ).toThrow();
});

// Print the units for documentation.
const descs = Flowsnake.convert().getDescriptors();
const text = ['### Supported Units'];
for (var k in descs) {
    if (!descs.hasOwnProperty(k)) {
        continue;
    }

    const desc = descs[k];
    text.push(`\n#### ${_.capitalize(k)}`);
    desc.describe().forEach((unit) => text.push(`* ${unit.name} (${unit.id})`));
}
console.log(text.join('\n'));
