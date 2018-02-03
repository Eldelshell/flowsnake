import Rhombus from '../../lib/geometry/Rhombus';

it('Solve a Rhombus', () => {
    let s = Rhombus.of(5, 30);
    expect(s.height.eq(2.5)).toBeTruthy();
    expect(s.area.eq(12.5)).toBeTruthy();
    expect(s.perimeter.eq(20)).toBeTruthy();
    expect(s.diagonals.a.toDP(2).eq(2.59)).toBeTruthy();
    expect(s.diagonals.b.toDP(2).eq(9.66)).toBeTruthy();
});

it('Fails to solve a Rhombus', () => {
    expect(() => Rhombus.of(null)).toThrow();
    expect(() => Rhombus.of(0)).toThrow();
    expect(() => Rhombus.of(-1)).toThrow();
    expect(() => Rhombus.of(-1.2)).toThrow();
});
