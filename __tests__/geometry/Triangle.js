import Triangle from '../../lib/geometry/Triangle';

expect.extend({
    toBeTruthyWithMessage(received, errMsg) {
        const result = {
            pass: received,
            message: () => errMsg
        };
        return result;
    }
});

it('Detect a AAA triangle', () => {
    let t = new Triangle({ angles: { a: 30, b: 30 } });
    expect(t.isAAA()).toBeTruthy();

    t = new Triangle({ angles: { a: 30, b: 30, c: 120 } });
    expect(t.isAAA()).toBeTruthy();

    t = new Triangle({ angles: { a: 30 } });
    expect(t.isAAA()).toBeFalsy();
});

it('Detect a SSS triangle', () => {
    let t = new Triangle({ sides: { a: 30, b: 30 } });
    expect(t.isSSS()).toBeTruthy();

    t = new Triangle({ sides: { a: 30, b: 30, c: 120 } });
    expect(t.isSSS()).toBeTruthy();

    t = new Triangle({ sides: { a: 30 } });
    expect(t.isSSS()).toBeFalsy();
});

it('Detect a AAS triangle', () => {
    const truthy = [
        { angles: {a: 30, c: 30}, sides: { c: 30 } },
        { angles: {a: 30, c: 30}, sides: { a: 30 } },
        { angles: {a: 30, b: 30}, sides: { b: 30 } },
        { angles: {a: 30, b: 30}, sides: { a: 30 } },
        { angles: {c: 30, b: 30}, sides: { b: 30 } },
        { angles: {c: 30, b: 30}, sides: { c: 30 } }
    ];

    truthy.forEach((test) => {
        const triangle = new Triangle(test);
        expect(triangle.isAAS()).toBeTruthy();
    });

    const falsy = [
        { angles: {a: 30}, sides: { b: 30 } },
        { angles: {a: 30, c: 30, b: 120}, sides: { b: 30 } },
        { angles: {a: 30, c: 30}, sides: { b: 30, c: 20 } },
        { angles: {a: 30, c: 30}, sides: { b: 30, c: 20, a: 30 } },
        { angles: {a: 30, c: 30}, sides: { b: 30 } },
        { angles: {a: 30, b: 30}, sides: { c: 30 } },
        { angles: {c: 30, b: 30}, sides: { a: 30 } }
    ];

    falsy.forEach((test) => {
        const triangle = new Triangle(test);
        expect(triangle.isAAS()).toBeFalsy();
    });
});

it('Detect a ASA triangle', () => {
    const truthy = [
        { angles: {a: 30, c: 30}, sides: { b: 30 } },
        { angles: {a: 30, b: 30}, sides: { c: 30 } },
        { angles: {c: 30, b: 30}, sides: { a: 30 } }
    ];

    truthy.forEach((test) => {
        const triangle = new Triangle(test);
        expect(triangle.isASA()).toBeTruthy();
    });
});

it('Detect a SAS triangle', () => {
    const truthy = [
        { sides: {a: 30, c: 30}, angles: { b: 30 } },
        { sides: {a: 30, b: 30}, angles: { c: 30 } },
        { sides: {c: 30, b: 30}, angles: { a: 30 } }
    ];

    truthy.forEach((test) => {
        const triangle = new Triangle(test);
        expect(triangle.isSAS()).toBeTruthy();
    });
});

it('Detect a SSA triangle', () => {
    const truthy = [
        { sides: {a: 30, c: 30}, angles: { c: 30 } },
        { sides: {a: 30, c: 30}, angles: { a: 30 } },
        { sides: {a: 30, b: 30}, angles: { b: 30 } },
        { sides: {a: 30, b: 30}, angles: { a: 30 } },
        { sides: {c: 30, b: 30}, angles: { b: 30 } },
        { sides: {c: 30, b: 30}, angles: { c: 30 } }
    ];

    truthy.forEach((test) => {
        const triangle = new Triangle(test);
        expect(triangle.isSSA()).toBeTruthy();
    });

    const falsy = [
        { sides: {a: 30}, angles: { b: 30 } },
        { sides: {a: 30, c: 30, b: 120}, angles: { b: 30 } },
        { sides: {a: 30, c: 30}, angles: { b: 30, c: 20 } },
        { sides: {a: 30, c: 30}, angles: { b: 30, c: 20, a: 30 } },
        { sides: {a: 30, c: 30}, angles: { b: 30 } },
        { sides: {a: 30, b: 30}, angles: { c: 30 } },
        { sides: {c: 30, b: 30}, angles: { a: 30 } }
    ];

    falsy.forEach((test) => {
        const triangle = new Triangle(test);
        expect(triangle.isSSA()).toBeFalsy();
    });
});

it('Detect & solve a HB triangle', () => {
    let t = new Triangle({ sides: { a: 30 }, heights: { a: 25 } });
    expect(t.isHB()).toBeTruthy();
    t.solve();
});

it('Solve a AAA triangle', () => {
    let t = new Triangle({ angles: { a: 30, b: 30 } });
    t.solve();
    expect(t.isAAA()).toBeTruthy();
    expect(t.angles.c.eq(120)).toBeTruthy();
    expect(t.sides.a).toBeUndefined();
});

it('Solve a SSS triangle', () => {
    let t = new Triangle({ sides: { a: 8, b: 6, c: 7 } });
    expect(t.isSSS()).toBeTruthy();
    t.solve();
    const {a,b,c} = t.angles;
    expect(a).toBeDecimal(75.52, 2);
    expect(b).toBeDecimal(46.57, 2);
    expect(c).toBeDecimal(57.91, 2);
    expect(t.area).toBeDecimal(20.33, 2);
});

it('Solve a AAS triangle', () => {
    let t = new Triangle({ angles: {a: 35, c: 62}, sides: { c: 7 } });
    expect(t.isAAS()).toBeTruthy();
    t.solve();
    expect(t.angles.b).toBeDecimal(83);
    expect(t.sides.a).toBeDecimal(4.55, 2);
    expect(t.sides.b).toBeDecimal(7.87, 2);
    expect(t.area).toBeDecimal(15.80, 2);
});

it('Solve a ASA triangle', () => {
    let t = new Triangle({ angles: {a: 76, b: 34}, sides: { c: 9 } });
    expect(t.isASA()).toBeTruthy();
    t.solve();
    expect(t.angles.c).toBeDecimal(70);
    expect(t.sides.a).toBeDecimal(9.29, 2);
    expect(t.sides.b).toBeDecimal(5.36, 2);
    expect(t.area).toBeDecimal(23.38, 2);
});

it('Solve a SAS triangle', () => {
    let t = new Triangle({ angles: {a: 49}, sides: { b: 5, c: 7 } });
    expect(t.isSAS()).toBeTruthy();
    t.solve();
    expect(t.angles.b).toBeDecimal(45.41, 2);
    expect(t.angles.c).toBeDecimal(85.59, 2);
    expect(t.sides.a).toBeDecimal(5.30, 2);
    expect(t.area).toBeDecimal(13.21, 2);

    t = new Triangle({ angles: {b: 49}, sides: { a: 5, c: 7 } });
    expect(t.isSAS()).toBeTruthy();
    t.solve();
    expect(t.area).toBeDecimal(13.21, 2);

    t = new Triangle({ angles: {c: 49}, sides: { a: 5, b: 7 } });
    expect(t.isSAS()).toBeTruthy();
    t.solve();
    expect(t.area).toBeDecimal(13.21, 2);
});

it('Solve a SSA triangle', () => {
    let t = new Triangle({ angles: {b: 31}, sides: { b: 8, c: 13 } });
    expect(t.isSSA()).toBeTruthy();
    t.solve();
    expect(t.angles.a).toBeDecimal(92.18, 2);
    expect(t.angles.c).toBeDecimal(56.82, 2);
    expect(t.sides.a).toBeDecimal(15.52, 2);
    expect(t.area).toBeDecimal(51.96, 2);
});

it('Triangles can be compared', () => {
    const t1 = new Triangle({ angles: {a: 49}, sides: { b: 5, c: 7 } });
    t1.solve();

    const t2 = new Triangle({ angles: {a: 49}, sides: { b: 5, c: 7 } });
    t2.solve();

    const t3 = new Triangle({ angles: {a: 50}, sides: { b: 5, c: 7 } });
    t3.solve();

    expect(t1.equals(t2)).toBeTruthy();
    expect(t2.equals(t1)).toBeTruthy();
    expect(t1.equals(t3)).toBeFalsy();
    expect(t2.equals(t3)).toBeFalsy();
});

it('Triangles can be of type acute, right or obtuse and equilateral, isosceles or scalene.', () => {
    let t1 = Triangle.of({ sides: { a: 5, b: 5, c: 5 } });
    expect(t1.type === 'acute-equilateral').toBeTruthy();

    t1 = Triangle.of({ angles: { a: 60, b: 60, c: 60 } });
    expect(t1.type === 'acute-equilateral').toBeTruthy();

    t1 = Triangle.of({ sides: { a: 5, b: 5, c: 6 } });
    expect(t1.type === 'acute-isosceles').toBeTruthy();

    t1 = Triangle.of({ sides: { a: 50, b: 55, c: 60 } });
    expect(t1.type === 'acute-scalene').toBeTruthy();

    t1 = Triangle.of({ sides: { a: 5, b: 5 }, angles: { c: 90 } });
    expect(t1.type === 'right-isosceles').toBeTruthy();

    t1 = Triangle.of({ sides: { a: 5, b: 7 }, angles: { c: 90 } });
    expect(t1.type === 'right-scalene').toBeTruthy();
});

// const triangles = [
//     {sides: {a: 1, b: 1, c: 1}}
// ];
//
// it('Random Triangles', () => {
//     triangles.forEach((t) => {
//         const triangle = Triangle.of(t);
//         console.log(JSON.stringify(triangle));
//
//     });
// });
