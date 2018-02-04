import Flowsnake from '../../lib';

it('Flowsnake should calculate shared tip', () => {
    const values = {
        amount: 55,
        percent: 15,
        method: 'add'
    };

    const res = Flowsnake.calculate('tax').of(values);
    expect(res.total).toBeDecimal(63.25);
    expect(res.tax).toBeDecimal(8.25);
});

it('Flowsnake should calculate shared tip', () => {
    const values = {
        amount: 55,
        percent: 15,
        method: 'extract'
    };

    const res = Flowsnake.calculate('tax').of(values);
    expect(res.total).toBeDecimal(47.8261, 4);
    expect(res.tax).toBeDecimal(7.1739, 4);
});
