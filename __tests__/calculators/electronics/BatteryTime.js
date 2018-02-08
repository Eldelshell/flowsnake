import Flowsnake from '../../../lib';

it('Flowsnake should calculate battery time', () => {
    const values = {
        capacity: Flowsnake.unit(3000).as('mAh'),
        consumption: Flowsnake.unit(4.2).as('mA')
    };

    const res = Flowsnake.calculate('battery-time').of(values);
    expect(res.time).toBeUnit(500, 'h');
});

it('Flowsnake should calculate battery consumption', () => {
    const values = {
        capacity: Flowsnake.unit(3000).as('mAh'),
        time: Flowsnake.unit(500).as('h')
    };

    const res = Flowsnake.calculate('battery-time').of(values);
    expect(res.consumption).toBeUnit(4.2, 'mA');
});

it('Flowsnake should calculate battery charge', () => {
    const values = {
        consumption: Flowsnake.unit(4.2).as('mA'),
        time: Flowsnake.unit(500).as('h')
    };

    const res = Flowsnake.calculate('battery-time').of(values);
    expect(res.capacity).toBeUnit(3000, 'mAh');
});
