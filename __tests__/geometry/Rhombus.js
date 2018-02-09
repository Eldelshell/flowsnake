import Rhombus from '../../lib/geometry/Rhombus';

it('Solve a Rhombus', () => {
    let s = Rhombus.of(5, 30);
    expect(s.height).toBeDecimal(2.5, 2);
    expect(s.area).toBeDecimal(12.5, 2);
    expect(s.perimeter).toBeDecimal(20);
    expect(s.diagonals.a).toBeDecimal(2.59, 2);
    expect(s.diagonals.b).toBeDecimal(9.66, 2);
});

it('Fails to solve a Rhombus', () => {
    expect(() => Rhombus.of(null)).toThrow();
    expect(() => Rhombus.of(0)).toThrow();
    expect(() => Rhombus.of(-1)).toThrow();
    expect(() => Rhombus.of(-1.2)).toThrow();
});
