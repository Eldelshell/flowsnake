import Square from '../../lib/geometry/Square';

it('Solve a square', () => {
    let s = Square.of(5);
    expect(s.diagonal.toDP(3).eq(7.071)).toBeTruthy();
    expect(s.area.eq(25)).toBeTruthy();
    expect(s.perimeter.eq(20)).toBeTruthy();
});

it('Fails to solve a square', () => {
    expect(() => Square.of(null)).toThrow();
    expect(() => Square.of(0)).toThrow();
    expect(() => Square.of(-1)).toThrow();
    expect(() => Square.of(-1.2)).toThrow();
});
