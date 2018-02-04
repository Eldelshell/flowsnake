import Flowsnake from '../../lib';

it('Flowsnake should calculate a loan', () => {
    const values = {
        amount: 300,
        time: Flowsnake.unit(10).as('month'),
        interest: 1.5
    };

    const res = Flowsnake.calculate('loan').of(values);
    expect(res.month).toBeDecimal(30.21);
    expect(res.total).toBeDecimal(302.07);
    expect(res.interests).toBeDecimal(2.07);
    expect(res.payments === 10).toBeTruthy();
});

it('Flowsnake should calculate a loan in years', () => {
    const values = {
        amount: 45000,
        time: Flowsnake.unit(10).as('year'),
        interest: 8.5
    };

    const res = Flowsnake.calculate('loan').of(values);
    expect(res.month).toBeDecimal(557.94);
    expect(res.total).toBeDecimal(66952.27);
    expect(res.interests).toBeDecimal(21952.27);
    expect(res.payments === 120).toBeTruthy();
});
