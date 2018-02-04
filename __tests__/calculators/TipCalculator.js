import Flowsnake from '../../lib';

it('Flowsnake should calculate shared tip', () => {
    const values = {
        amount: 55,
        percent: 15,
        pax: 4
    };

    const res = Flowsnake.calculate('tip').of(values);
    expect(res.total.tip).toBeDecimal(8.25);
    expect(res.total.amount).toBeDecimal(63.25);
    expect(res.pax.tip).toBeDecimal(2.0625);
    expect(res.pax.amount).toBeDecimal(15.8125);
});

it('Flowsnake should calculate single tip', () => {
    const values = {
        amount: 55,
        percent: 15,
        pax: 1
    };

    const res = Flowsnake.calculate('tip').of(values);

    expect(res.total.tip).toBeDecimal(8.25);
    expect(res.total.amount).toBeDecimal(63.25);
    expect(res.pax.tip).toBeDecimal(8.25);
    expect(res.pax.amount).toBeDecimal(63.25);
});

it('Flowsnake should calculate a table of possible tips', () => {
    const values = {
        amount: 55
    };

    const res = Flowsnake.calculate('tip').of(values);
    expect(res[0].tip).toBe(5);
    expect(res[0].total).toBeDecimal(57.75);
    expect(res[9].tip).toBe(50);
    expect(res[9].total).toBeDecimal(82.50);
});
