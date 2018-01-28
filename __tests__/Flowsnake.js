import Decimal from 'decimal.js';
import Flowsnake from '../lib';
import Temperature from '../lib/units/temperature/Temperature';
import TemperatureMetric from '../lib/units/temperature/Metric';

it('Flowsnake should convert without descriptor', () => {
    expect(Flowsnake.convert(1).from('°C').to('K')).toBeDefined();
    expect(Flowsnake.convert(1).from('°C').to('°C')).toBeDefined();
});

it('Flowsnake should convert with Decimal.js BigDecimal', () => {
    const v = new Decimal(30.5);
    expect(Flowsnake.convert(v).from('°C').to('K')).toBeDefined();
});

it('Flowsnake should convert with descriptor name', () => {
    expect(Flowsnake.convert(1).with('temperature').from('°C').to('K')).toBeDefined();
});

it('Flowsnake should convert with descriptor object', () => {
    expect(Flowsnake.convert(1).with(Temperature).from('°C').to('K')).toBeDefined();
});

it('Flowsnake should convert with unit objects', () => {
    expect(Flowsnake.convert(1).with(Temperature).from(TemperatureMetric.Celsius).to(TemperatureMetric.Kelvin)).toBeDefined();
});

it('Flowsnake should convert with unit names', () => {
    expect(Flowsnake.convert(1).with(Temperature).from('Celsius').to('Kelvin')).toBeDefined();
});

it('Flowsnake should fail', () => {
    expect(() => Flowsnake.convert(1).to('°C') ).toThrow();
    expect(() => Flowsnake.convert(1).from('ft2').to('°C') ).toThrow();

    // Test that from fails because we already set a unit with convert(v)
    const v = Flowsnake.unit(1).as('°C');
    expect(() => Flowsnake.convert(v).with(Temperature).from('°C').to('K')).toThrow();
});

it('Flowsnake should create a unit object', () => {
    expect(Flowsnake.unit(1).as('°C').name).toBe('Celsius');
    expect(Flowsnake.unit(1).with(Temperature).as('°C').name).toBe('Celsius');
});

it('Flowsnake should convert a unit object', () => {
    const v = Flowsnake.unit(1).as('°C');
    expect(Flowsnake.convert(v).with(Temperature).to('K')).toBeDefined();
});

it('Flowsnake can compare units equality', () => {
    const a = Flowsnake.unit(1).as('GB');
    const b = Flowsnake.unit(1).as('GB');
    const c = Flowsnake.unit(2).as('GB');
    expect(a.equals(b)).toBeTruthy();
    expect(b.equals(a)).toBeTruthy();
    expect(a.equals(c)).toBeFalsy();
    expect(b.equals(c)).toBeFalsy();
});

// Issue #4
it('Flowsnake should generate correct names with prefixes', () => {
    expect(Flowsnake.unit(1).as('m3').name).toBe('CubicMeter');
    expect(Flowsnake.unit(1).as('km3').name).toBe('CubicKilometer');
});
