import Flowsnake from '../../../lib';

it('Flowsnake should calculate a repeatable combination', () => {
    const values = {
        n: 10,
        r: 5,
        order: false,
        repeat: true
    };

    const res = Flowsnake.calculate('combinations').of(values);
    expect(res.eq(2002)).toBeTruthy();
});

it('Flowsnake should calculate a non-repeatable combination', () => {
    const values = {
        n: 10,
        r: 5,
        order: false,
        repeat: false
    };

    const res = Flowsnake.calculate('combinations').of(values);
    expect(res.eq(252)).toBeTruthy();
});

it('Flowsnake should calculate a repeatable permutation', () => {
    const values = {
        n: 10,
        r: 5,
        order: true,
        repeat: true
    };

    const res = Flowsnake.calculate('combinations').of(values);
    expect(res.eq(100000)).toBeTruthy();
});

it('Flowsnake should calculate a non-repeatable permutation', () => {
    const values = {
        n: 10,
        r: 5,
        order: true,
        repeat: false
    };

    const res = Flowsnake.calculate('combinations').of(values);
    expect(res.eq(30240)).toBeTruthy();
});
