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
    expect(res).toBeDecimal(544, 0);
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
    expect(res).toBeDecimal(454, 0);
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
    expect(res).toBeDecimal(408, 0);
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
    expect(res).toBeDecimal(384, 0);
});
