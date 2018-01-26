import Flowsnake from '../../lib';

it('Flowsnake should calculate shared tip', () => {
    const values = {
        amount: 55,
        percent: 15,
        method: 'add'
    };

    const res = Flowsnake.calculate('tax').of(values);
    expect(res.total.eq(63.25)).toBeTruthy();
    expect(res.tax.eq(8.25)).toBeTruthy();
});

it('Flowsnake should calculate shared tip', () => {
    const values = {
        amount: 55,
        percent: 15,
        method: 'extract'
    };

    const res = Flowsnake.calculate('tax').of(values);
    expect(res.total.eq(47.8261)).toBeTruthy();
    expect(res.tax.eq(7.17392)).toBeTruthy();
});
