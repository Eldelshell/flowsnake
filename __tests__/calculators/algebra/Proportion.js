import Flowsnake from '../../../lib';

it('Flowsnake should calculate a directly proportional proportion', () => {
    const values = {
        a: 300,
        b: 100,
        c: 10,
        inverse: false
    };

    const res = Flowsnake.calculate('proportion').of(values);
    expect(res).toBeDecimal(3.33, 2);
});

it('Flowsnake should calculate an inversely proportional proportion', () => {
    const values = {
        a: 300,
        b: 100,
        c: 10,
        inverse: true
    };

    const res = Flowsnake.calculate('proportion').of(values);
    expect(res).toBeDecimal(3000);
});
