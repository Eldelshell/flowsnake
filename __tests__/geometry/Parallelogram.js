import Parallelogram from '../../lib/geometry/Parallelogram';

it('Solve a Parallelogram', () => {
    let s = Parallelogram.of(5, 10, 30);
    expect(s.height).toBeDecimal(5, 0);
    expect(s.area).toBeDecimal(25, 0);
    expect(s.perimeter).toBeDecimal(30, 0);
});

it('Fails to solve a Parallelogram', () => {
    expect(() => Parallelogram.of(null)).toThrow();
    expect(() => Parallelogram.of(0)).toThrow();
    expect(() => Parallelogram.of(-1)).toThrow();
    expect(() => Parallelogram.of(-1.2)).toThrow();
});
