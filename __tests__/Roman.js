import Roman from '../lib/converters/Roman';
import TestCase from './TestCase';

it('Should convert arabic to roman numbers', () => {
    expect(Roman.convert(3999, 'arabic', 'roman')).toBe('MMMCMXCIX');
    expect(Roman.convert(1, 'arabic', 'roman')).toBe('I');
});

it('Should convert roman to arabic numbers', () => {
    expect(Roman.convert('MMMCMXCIX', 'roman', 'arabic').eq(3999)).toBeTruthy();
    expect(Roman.convert('I', 'roman', 'arabic').eq(1)).toBeTruthy();
});
