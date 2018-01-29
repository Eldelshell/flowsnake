import Flowsnake from '../../lib';

it('Flowsnake should calculate a lease', () => {
    const values = {
        cost: 40500,
        msrp: 40500,
        depreciation: 65,
        time: Flowsnake.unit(36).as('month'),
        charge: 5.4
    };

    const res = Flowsnake.calculate('lease').of(values);
    expect(res.toDP(0).eq(544)).toBeTruthy();
});

it('Flowsnake should calculate a lease', () => {
    const values = {
        cost: 37500,
        msrp: 40500,
        depreciation: 65,
        time: Flowsnake.unit(36).as('month'),
        charge: 5.4
    };

    const res = Flowsnake.calculate('lease').of(values);
    expect(res.toDP(0).eq(454)).toBeTruthy();
});

it('Flowsnake should calculate a lease', () => {
    const values = {
        cost: 37500,
        msrp: 40500,
        depreciation: 65,
        time: Flowsnake.unit(36).as('month'),
        charge: 3.67
    };

    const res = Flowsnake.calculate('lease').of(values);
    expect(res.toDP(0).eq(408)).toBeTruthy();
});

it('Flowsnake should calculate a lease', () => {
    const values = {
        cost: 37500,
        msrp: 40500,
        depreciation: 68,
        time: Flowsnake.unit(36).as('month'),
        charge: 3.96
    };

    const res = Flowsnake.calculate('lease').of(values);
    expect(res.toDP(0).eq(384)).toBeTruthy();
});
