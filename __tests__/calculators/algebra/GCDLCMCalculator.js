import Flowsnake from '../../../lib';

it('Flowsnake should calculate GCD & LCM', () => {
    const values = {
        min: 120,
        max: 350
    };

    const res = Flowsnake.calculate('gcd-lcm').of(values);
    expect(res.gcd).toBe(10);
    expect(res.lcm).toBe(4200);
});
