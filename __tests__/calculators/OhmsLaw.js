import Flowsnake from '../../lib';

it('Flowsnake should calculate current & power', () => {
    const values = {
        voltage: Flowsnake.unit(10).as('V'),
        resistance: Flowsnake.unit(2.5).as('Ω')
    };

    const res = Flowsnake.calculate('ohms-law').of(values);
    expect(res.power.equals(40)).toBeTruthy();
    expect(res.current.equals(4)).toBeTruthy();
});

it('Flowsnake should calculate voltage & power', () => {
    const values = {
        current: Flowsnake.unit(4).as('A'),
        resistance: Flowsnake.unit(2.5).as('Ω')
    };

    const res = Flowsnake.calculate('ohms-law').of(values);
    expect(res.power.equals(40)).toBeTruthy();
    expect(res.voltage.equals(10)).toBeTruthy();
});

it('Flowsnake should calculate resistance & power', () => {
    const values = {
        current: Flowsnake.unit(4).as('A'),
        voltage: Flowsnake.unit(10).as('V')
    };

    const res = Flowsnake.calculate('ohms-law').of(values);
    expect(res.power.equals(40)).toBeTruthy();
    expect(res.resistance.equals(2.5)).toBeTruthy();
});

it('Flowsnake should fail for invalid arguments', () => {
    const values = {
        current: Flowsnake.unit(4).as('A')
    };

    expect(() => Flowsnake.calculate('ohms-law').of(values) ).toThrow();
});

it('Flowsnake should fail for invalid system', () => {
    const values = {
        current: Flowsnake.unit(4).as('C'), // Coulomb is not valid
        resistance: Flowsnake.unit(2.5).as('Ω')
    };

    expect(() => Flowsnake.calculate('ohms-law').of(values) ).toThrow();
});

it('Flowsnake should fail for invalid unit', () => {
    const values = {
        current: 4, // Not an unit.
        resistance: Flowsnake.unit(2.5).as('Ω')
    };

    expect(() => Flowsnake.calculate('ohms-law').of(values) ).toThrow();
});
