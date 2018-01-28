import Flowsnake from '../../../lib';

it('Flowsnake should simplify a fraction', () => {
    const values = {
        numerator: 96,
        denominator: 15
    };

    const res = Flowsnake.calculate('fraction-simplifier').of(values);
    expect(res.numerator === 32).toBeTruthy();
    expect(res.denominator   === 5).toBeTruthy();
});

it('Flowsnake should simplify a fraction', () => {
    const values = {
        numerator: 15,
        denominator: 96
    };

    const res = Flowsnake.calculate('fraction-simplifier').of(values);
    expect(res.numerator === 5).toBeTruthy();
    expect(res.denominator   === 32).toBeTruthy();
});
