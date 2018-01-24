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

it('Flowsnake should create a unit object', () => {
    expect(Flowsnake.unit(1).as('C').name).toBe('Celsius');
    expect(Flowsnake.unit(1).with(Temperature).as('C').name).toBe('Celsius');
});

it('Flowsnake should convert a unit object', () => {
    const v = Flowsnake.unit(1).as('C');
    expect(Flowsnake.convert(v).with(Temperature).to('K')).toBeDefined();
});

it('Flowsnake should calculate download time', () => {
    const values = {
        size: Flowsnake.unit(28).as('GB'),
        speed: Flowsnake.unit(300).as('Mbps')
    };

    const seconds = Flowsnake.calculate('download-time').of(values);
    expect(seconds.value.eq(746.667)).toBeTruthy();
});
