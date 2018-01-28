import Flowsnake from '../../../lib';

it('Flowsnake should calculate GCD & LCM', () => {
    const values = {
        min: 120,
        max: 350
    };

    const res = Flowsnake.calculate('gcd-lcm').of(values);
    expect(res.gcd === 10).toBeTruthy();
    expect(res.lcm === 4200).toBeTruthy();
});
