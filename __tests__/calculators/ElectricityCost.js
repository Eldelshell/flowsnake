import Flowsnake from '../../lib';

it('Flowsnake should calculate electricity cost', () => {
    const values = {
        power: Flowsnake.unit(300).as('W'),
        time: Flowsnake.unit(30).as('d'),
        price: 1.26
    };

    const res = Flowsnake.calculate('electricity-cost').of(values);
    expect(res.cost === 272.16).toBeTruthy();
    expect(res.consumption.equals(216)).toBeTruthy();
});
