import Flowsnake from '../../lib';

it('Flowsnake should calculate BMI', () => {
    const values = {
        height: Flowsnake.unit(180).as('cm'),
        weight: Flowsnake.unit(70).as('kg')
    };

    const res = Flowsnake.calculate('BMI').of(values);
    expect(res.eq(21.6)).toBeTruthy();
});
