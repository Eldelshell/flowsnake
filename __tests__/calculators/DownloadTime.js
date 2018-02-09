import Flowsnake from '../../lib';

it('Flowsnake should calculate download time', () => {
    const values = {
        size: Flowsnake.unit(28).as('GB'),
        speed: Flowsnake.unit(300).as('Mbps')
    };

    const seconds = Flowsnake.calculate('download-time').of(values);
    expect(seconds).toBeUnit(746.6666667, 's');

    const minutes = Flowsnake.convert(seconds).to('min');
    expect(minutes).toBeDecimal(12.44, 2);
});
