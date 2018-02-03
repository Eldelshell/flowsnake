import Parallelogram from '../../lib/geometry/Parallelogram';

it('Solve a Parallelogram', () => {
    let s = Parallelogram.of(5, 10, 30);
    expect(s.height.eq(5)).toBeTruthy();
    expect(s.area.eq(25)).toBeTruthy();
    expect(s.perimeter.eq(30)).toBeTruthy();
});

it('Fails to solve a Parallelogram', () => {
    expect(() => Parallelogram.of(null)).toThrow();
    expect(() => Parallelogram.of(0)).toThrow();
    expect(() => Parallelogram.of(-1)).toThrow();
    expect(() => Parallelogram.of(-1.2)).toThrow();
});
