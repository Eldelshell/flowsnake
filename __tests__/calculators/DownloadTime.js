import Flowsnake from '../../lib';

it('Flowsnake should calculate download time', () => {
    const values = {
        size: Flowsnake.unit(28).as('GB'),
        speed: Flowsnake.unit(300).as('Mbps')
    };

    const seconds = Flowsnake.calculate('download-time').of(values);
    expect(seconds.equals(746.667)).toBeTruthy();

    const minutes = Flowsnake.convert(seconds).to('min');
    expect(minutes.equals(12.4445)).toBeTruthy();
});
