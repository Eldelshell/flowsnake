import Circle from '../../lib/geometry/Circle';
import Angle from '../../lib/units/Angle';

it('Solve a Circle by radius', () => {
    const s = Circle.of({radius: 50});
    expect(s.diameter).toBeDecimal(100);
    expect(s.area).toBeDecimal(7853.98, 2);
    expect(s.circumference).toBeDecimal(314.16, 2);
});

it('Solve a Circle by diameter', () => {
    const s = Circle.of({diameter: 100});
    expect(s.radius).toBeDecimal(50);
    expect(s.area).toBeDecimal(7853.98, 2);
    expect(s.circumference).toBeDecimal(314.16, 2);
});

it('Solve a Circle by area', () => {
    const s = Circle.of({area: 50.5});
    expect(s.radius).toBeDecimal(4, 0);
    expect(s.diameter).toBeDecimal(8, 0);
    expect(s.circumference).toBeDecimal(25.19, 2);
});

it('Solve a Circle by circumference', () => {
    const s = Circle.of({circumference: 50.5});
    expect(s.radius).toBeDecimal(8, 0);
    expect(s.diameter).toBeDecimal(16, 0);
    expect(s.area).toBeDecimal(202.94, 2);
});

it('Fails to solve a Circle', () => {
    expect(() => Circle.of(null)).toThrow();
    expect(() => Circle.of(0)).toThrow();
    expect(() => Circle.of(-1)).toThrow();
    expect(() => Circle.of(-1.2)).toThrow();
});

it('Calculates a sector', () => {
    const s = Circle.of({radius: 1});
    const sector = s.sector(56);
    expect(sector.arc).toBeDecimal(0.98, 2);
    expect(sector.area).toBeDecimal(0.49, 2);
    expect(sector.perimeter).toBeDecimal(2.98, 2);
});

it('Calculates a segment with angle', () => {
    const s = Circle.of({radius: 20});
    const segment = s.segment({angle: 60});
    expect(segment.chord).toBeDecimal(20, 0);
    expect(segment.height).toBeDecimal(2.68, 2);
    expect(segment.arc).toBeDecimal(20.94, 2);
    expect(segment.area).toBeDecimal(36.23, 2);
    expect(segment.perimeter).toBeDecimal(40.94, 2);
});

it('Calculates a segment with chord', () => {
    const s = Circle.of({radius: 20});
    const segment = s.segment({chord: 20});
    expect(segment.chord).toBeDecimal(20, 0);
    expect(segment.height).toBeDecimal(2.68, 2);
    expect(segment.arc).toBeDecimal(20.94, 2);
    expect(segment.area).toBeDecimal(36.23, 2);
    expect(segment.perimeter).toBeDecimal(40.94, 2);
});

it('Circles can be compared', () => {
    const s1 = Circle.of({radius: 50});
    const s2 = Circle.of({radius: 50});
    const s3 = Circle.of({radius: 100});
    expect(s1.equals(s2)).toBeTruthy();
    expect(s1.equals(s3)).toBeFalsy();
});
