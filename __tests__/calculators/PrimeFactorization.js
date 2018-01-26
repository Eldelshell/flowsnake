import Flowsnake from '../../lib';

it('should calculate prime factors', () => {
    expect(Flowsnake.calculate('prime-factors').of(0) === null).toBeTruthy();
    expect(Flowsnake.calculate('prime-factors').of(null) === null).toBeTruthy();
    expect(Flowsnake.calculate('prime-factors').of(NaN) === null).toBeTruthy();
    expect(Flowsnake.calculate('prime-factors').of('foo') === null).toBeTruthy();
    expect(Flowsnake.calculate('prime-factors').of(17) === '17').toBeTruthy();
    expect(Flowsnake.calculate('prime-factors').of(12) === '2²×3').toBeTruthy();
    expect(Flowsnake.calculate('prime-factors').of(147) === '3×7²').toBeTruthy();
    expect(Flowsnake.calculate('prime-factors').of(187) === '11×17').toBeTruthy();
    expect(Flowsnake.calculate('prime-factors').of(5890) === '2×5×19×31').toBeTruthy();
    expect(Flowsnake.calculate('prime-factors').of(600851475143) === '71×839×1471×6857').toBeTruthy();
});
