import Flowsnake from '../../lib';

it('Flowsnake should calculate a loan', () => {
    const values = {
        amount: 300,
        time: Flowsnake.unit(10).as('month'),
        interest: 1.5
    };

    const res = Flowsnake.calculate('loan').of(values);
    expect(res.month.eq(30.21)).toBeTruthy();
    expect(res.total.eq(302.07)).toBeTruthy();
    expect(res.payments === 10).toBeTruthy();
});

it('Flowsnake should calculate a loan in years', () => {
    const values = {
        amount: 45000,
        time: Flowsnake.unit(10).as('year'),
        interest: 8.5
    };

    const res = Flowsnake.calculate('loan').of(values);
    expect(res.month.eq(557.94)).toBeTruthy();
    expect(res.total.eq(66952.27)).toBeTruthy();
    expect(res.payments === 120).toBeTruthy();
});
