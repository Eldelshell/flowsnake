import Roman from '../../lib/units/Roman';
import TestCase from './TestCase';

it('Should convert arabic to roman numbers', () => {
    expect(Roman.convert(3999, 'arabic', 'roman')).toBe('MMMCMXCIX');
    expect(Roman.convert(1, 'arabic', 'roman')).toBe('I');
});

it('Should convert roman to arabic numbers', () => {
    expect(Roman.convert('MMMCMXCIX', 'roman', 'arabic')).toBe(3999);
    expect(Roman.convert('I', 'roman', 'arabic')).toBe(1);
});
