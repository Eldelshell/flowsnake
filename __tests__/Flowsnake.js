import Flowsnake from '../lib';
import Temperature from '../lib/converters/temperature/Temperature';
import TemperatureMetric from '../lib/converters/temperature/Metric';

it('Flowsnake should convert without descriptor', () => {
    expect(Flowsnake.convert(1).from('C').to('K')).toBeDefined();
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
