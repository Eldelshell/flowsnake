import Flowsnake from '../../../lib';

it('Flowsnake should calculate a repeatable combination', () => {
    const values = {
        n: 10,
        r: 5,
        order: false,
        repeat: true
    };

    const res = Flowsnake.calculate('combinations').of(values);
    expect(res).toBeDecimal(2002);
});

it('Flowsnake should calculate a non-repeatable combination', () => {
    const values = {
        n: 10,
        r: 5,
        order: false,
        repeat: false
    };

    const res = Flowsnake.calculate('combinations').of(values);
    expect(res).toBeDecimal(252);
});

it('Flowsnake should calculate a repeatable permutation', () => {
    const values = {
        n: 10,
        r: 5,
        order: true,
        repeat: true
    };

    const res = Flowsnake.calculate('combinations').of(values);
    expect(res).toBeDecimal(100000);
});

it('Flowsnake should calculate a non-repeatable permutation', () => {
    const values = {
        n: 10,
        r: 5,
        order: true,
        repeat: false
    };

    const res = Flowsnake.calculate('combinations').of(values);
    expect(res).toBeDecimal(30240);
});
