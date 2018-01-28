import Flowsnake from '../../lib';

it('Flowsnake should calculate male BFP', () => {
    const values = {
        height: Flowsnake.unit(180).as('cm'),
        weight: Flowsnake.unit(70).as('kg'),
        age: 30,
        sex: 'male'
    };

    const res = Flowsnake.calculate('BFP').of(values);
    expect(res.eq(16.62)).toBeTruthy();
});

it('Flowsnake should calculate female BFP', () => {
    const values = {
        height: Flowsnake.unit(180).as('cm'),
        weight: Flowsnake.unit(70).as('kg'),
        age: 30,
        sex: 'female'
    };

    const res = Flowsnake.calculate('BFP').of(values);
    expect(res.eq(27.42)).toBeTruthy();
});
