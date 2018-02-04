import Rectangle from '../../lib/geometry/Rectangle';

it('Solve a Rectangle', () => {
    let s = Rectangle.of(5, 10);
    expect(s.diagonals.a.toDP(2).eq(11.18)).toBeTruthy();
    expect(s.diagonals.b.toDP(2).eq(11.18)).toBeTruthy();
    expect(s.area.eq(50)).toBeTruthy();
    expect(s.perimeter.eq(30)).toBeTruthy();
});

it('Fails to solve a Rectangle', () => {
    expect(() => Rectangle.of(null)).toThrow();
    expect(() => Rectangle.of(0)).toThrow();
    expect(() => Rectangle.of(-1)).toThrow();
    expect(() => Rectangle.of(-1.2)).toThrow();
});
