import Flowsnake from '../../lib';

it('Flowsnake should calculate iPhone5 display resolution', () => {
    const values = {
        horizontal: 640,
        vertical: 1136,
        size: Flowsnake.unit(4).as('Inch')
    };

    const res = Flowsnake.calculate('display-resolution').of(values);
    expect(res.value.toDP(0).equals(326)).toBeTruthy();
});

it('Flowsnake should calculate MiA1 display resolution', () => {
    const values = {
        horizontal: 1080,
        vertical: 1920,
        size: Flowsnake.unit(5.5).as('Inch')
    };

    const res = Flowsnake.calculate('display-resolution').of(values);
    expect(res.value.toDP(0).equals(401)).toBeTruthy();
});

it('Flowsnake should calculate iPhoneX display resolution', () => {
    const values = {
        horizontal: 1125,
        vertical: 2436,
        size: Flowsnake.unit(5.8).as('Inch')
    };

    const res = Flowsnake.calculate('display-resolution').of(values);
    expect(res.value.toDP(0).equals(463)).toBeTruthy();
});

it('Flowsnake should calculate Galaxy S8 display resolution', () => {
    const values = {
        horizontal: 1440,
        vertical: 2960,
        size: Flowsnake.unit(5.8).as('Inch')
    };

    const res = Flowsnake.calculate('display-resolution').of(values);
    expect(res.value.toDP(0).equals(568)).toBeTruthy();
});
