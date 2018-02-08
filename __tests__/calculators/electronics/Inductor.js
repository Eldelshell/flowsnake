import _ from 'lodash';
import Flowsnake from '../../../lib';
import Inductance from '../../../lib/units/electricity/Inductance';

it('Flowsnake should calculate the colors for a 4 bands inductor', () => {
    const colors = ['brown', 'brown', 'black', 'gold'];
    const values = {
        inductance: Inductance.of(11, 'µH'),
        tolerance: 5
    };

    let res = Flowsnake.calculate('inductor').of(colors);
    expect(res.inductance).toBeUnit(11, 'µH');
    expect(res.tolerance).toBe(5);

    res = Flowsnake.calculate('inductor').of(values);
    expect(_.isEqual(res, colors)).toBeTruthy();
});
