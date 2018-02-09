import Flowsnake from '../../lib';

it('Flowsnake should calculate male BFP', () => {
    const values = {
        height: Flowsnake.unit(180).as('cm'),
        weight: Flowsnake.unit(70).as('kg'),
        age: 30,
        sex: 'male'
    };

    expect(Flowsnake.calculate('BFP').of(values)).toBeDecimal(16.63, 2);
});

it('Flowsnake should calculate female BFP', () => {
    const values = {
        height: Flowsnake.unit(180).as('cm'),
        weight: Flowsnake.unit(70).as('kg'),
        age: 30,
        sex: 'female'
    };

    expect(Flowsnake.calculate('BFP').of(values)).toBeDecimal(27.43, 2);
});
