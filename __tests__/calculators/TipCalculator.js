import Flowsnake from '../../lib';

it('Flowsnake should calculate shared tip', () => {
    const values = {
        amount: 55,
        percent: 15,
        pax: 4
    };

    const res = Flowsnake.calculate('tip').of(values);
    expect(res.total.tip.eq(8.25)).toBeTruthy();
    expect(res.total.amount.eq(63.25)).toBeTruthy();
    expect(res.pax.tip.eq(2.0625)).toBeTruthy();
    expect(res.pax.amount.eq(15.8125)).toBeTruthy();
});

it('Flowsnake should calculate single tip', () => {
    const values = {
        amount: 55,
        percent: 15,
        pax: 1
    };

    const res = Flowsnake.calculate('tip').of(values);

    expect(res.total.tip.eq(8.25)).toBeTruthy();
    expect(res.total.amount.eq(63.25)).toBeTruthy();
    expect(res.pax.tip.eq(8.25)).toBeTruthy();
    expect(res.pax.amount.eq(63.25)).toBeTruthy();
});

it('Flowsnake should calculate a table of possible tips', () => {
    const values = {
        amount: 55
    };

    const res = Flowsnake.calculate('tip').of(values);
    expect(res[0].tip).toBe(5);
    expect(res[0].total.eq(57.75)).toBeTruthy();
    expect(res[9].tip).toBe(50);
    expect(res[9].total.eq(82.50)).toBeTruthy();
});
