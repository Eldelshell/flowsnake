import _ from 'lodash';
import Flowsnake from '../../../lib';
import Resistance from '../../../lib/units/electricity/Resistance';

const gigaOhm = Resistance.of(1, 'GΩ')

it('Flowsnake should calculate the resistance for a 3 bands resistor', () => {
    const res = Flowsnake.calculate('resistor').of(['brown', 'brown', 'black']);
    expect(res.resistance).toBeUnit(11, 'Ω');
    expect(res.tolerance).toBe(20);
});

it('Flowsnake should calculate the colors for a 3 bands resistor', () => {
    const colors = ['brown', 'brown', 'black'];
    const values = {
        resistance: Resistance.of(11, 'Ω'),
        bands: 3
    };

    const c = Flowsnake.calculate('resistor').of(values);
    expect(_.isEqual(c, colors)).toBeTruthy();
});

it('Flowsnake should calculate the resistance for a 4 bands resistor', () => {
    const res = Flowsnake.calculate('resistor').of(['blue', 'grey', 'yellow', 'black']);
    expect(res.resistance).toBeUnit(680000, 'Ω');
    expect(res.tolerance).toBe(1);
});

it('Flowsnake should calculate the colors for a 4 bands resistor', () => {
    const colors = ['blue', 'grey', 'yellow', 'black'];
    const values = {
        resistance: Resistance.of(680000, 'Ω'),
        bands: 4,
        tolerance: 1
    };

    const c = Flowsnake.calculate('resistor').of(values);
    expect(_.isEqual(c, colors)).toBeTruthy();
});

it('Flowsnake should calculate the resistance for a 5 bands resistor', () => {
    const res = Flowsnake.calculate('resistor').of(['yellow', 'red', 'green', 'violet', 'gold']);
    expect(res.resistance).toBeUnit(4250000000, 'Ω');
    expect(res.resistance.to(gigaOhm)).toBeDecimal(4.25);
    expect(res.tolerance).toBe(5);
});

it('Flowsnake should calculate the colors for a 5 bands resistor', () => {
    const colors = ['yellow', 'red', 'green', 'violet', 'gold'];
    const values = {
        resistance: Resistance.of(4.25, 'GΩ'),
        bands: 5,
        tolerance: 5
    };

    const c = Flowsnake.calculate('resistor').of(values);
    expect(_.isEqual(c, colors)).toBeTruthy();
});

it('Flowsnake should calculate the resistance for a 6 bands resistor', () => {
    const res = Flowsnake.calculate('resistor').of(['white', 'black', 'black', 'grey', 'blue', 'orange']);
    expect(res.resistance).toBeUnit(90000000000, 'Ω');
    expect(res.resistance.to(gigaOhm)).toBeDecimal(90);
    expect(res.tolerance).toBe(0.25);
    expect(res.tcr).toBe(25);
});

it('Flowsnake should calculate the E-series for a resistor', () => {
    const res = Flowsnake.calculate('resistor').of(['black', 'brown', 'black']);
    expect(res.decade).toBe(6);
});

it('Flowsnake should calculate the tolerance range for a resistor', () => {
    const res = Flowsnake.calculate('resistor').of(['brown', 'black', 'brown', 'silver']);
    expect(res.range.min).toBeUnit(90, 'Ω');
    expect(res.range.max).toBeUnit(110, 'Ω');
});
