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
    expect(a.eq(75.5225)).toBeTruthyWithMessage(`Failed ${a} !== 75.5225`);
    expect(b.eq(46.5675)).toBeTruthyWithMessage(`Failed ${b} !== 46.5675`);
    expect(c.eq(57.91)).toBeTruthyWithMessage(`Failed ${c} !== 57.91`);
    expect(t.area.eq(20.3332)).toBeTruthyWithMessage(`Failed ${t.area} !== 20.3332`);
});

it('Solve a AAS triangle', () => {
    let t = new Triangle({ angles: {a: 35, c: 62}, sides: { c: 7 } });
    expect(t.isAAS()).toBeTruthy();
    t.solve();
    expect(t.angles.b.eq(83)).toBeTruthyWithMessage(`Failed ${t.angles.b} !== 83`);
    expect(t.sides.a.toDP(2).eq(4.55)).toBeTruthyWithMessage(`Failed ${t.sides.a.toDP(2)} !== 4.55`);
    expect(t.sides.b.toDP(2).eq(7.87)).toBeTruthyWithMessage(`Failed ${t.sides.b.toDP(2)} !== 7.87`);
    expect(t.area.eq(15.797)).toBeTruthyWithMessage(`Failed ${t.area} !== 15.797`);
});

it('Solve a ASA triangle', () => {
    let t = new Triangle({ angles: {a: 76, b: 34}, sides: { c: 9 } });
    expect(t.isASA()).toBeTruthy();
    t.solve();
    expect(t.angles.c.eq(70)).toBeTruthyWithMessage(`Failed ${t.angles.c} !== 70`);
    expect(t.sides.a.toDP(2).eq(9.29)).toBeTruthyWithMessage(`Failed ${t.sides.a.toDP(2)} !== 9.29`);
    expect(t.sides.b.toDP(2).eq(5.36)).toBeTruthyWithMessage(`Failed ${t.sides.b.toDP(2)} !== 5.36`);
    expect(t.area.eq(23.3849)).toBeTruthyWithMessage(`Failed ${t.area} !== 23.3849`);
});

it('Solve a SAS triangle', () => {
    let t = new Triangle({ angles: {a: 49}, sides: { b: 5, c: 7 } });
    expect(t.isSAS()).toBeTruthy();
    t.solve();
    expect(t.angles.b.eq(45.4116)).toBeTruthyWithMessage(`Failed ${t.angles.b} !== 45.4116`);
    expect(t.angles.c.eq(85.5884)).toBeTruthyWithMessage(`Failed ${t.angles.c} !== 85.5884`);
    expect(t.sides.a.toDP(2).eq(5.30)).toBeTruthyWithMessage(`Failed ${t.sides.a.toDP(2)} !== 5.30`);
    expect(t.area.eq(13.2075)).toBeTruthyWithMessage(`Failed ${t.area} !== 13.2075`);

    t = new Triangle({ angles: {b: 49}, sides: { a: 5, c: 7 } });
    expect(t.isSAS()).toBeTruthy();
    t.solve();
    expect(t.area.eq(13.2075)).toBeTruthyWithMessage(`Failed ${t.area} !== 13.2075`);

    t = new Triangle({ angles: {c: 49}, sides: { a: 5, b: 7 } });
    expect(t.isSAS()).toBeTruthy();
    t.solve();
    expect(t.area.eq(13.2074)).toBeTruthyWithMessage(`Failed ${t.area} !== 13.2074`);
});

it('Solve a SSA triangle', () => {
    let t = new Triangle({ angles: {b: 31}, sides: { b: 8, c: 13 } });
    expect(t.isSSA()).toBeTruthy();
    t.solve();
    expect(t.angles.a.eq(92.182)).toBeTruthyWithMessage(`Failed ${t.angles.a} !== 92.182`);
    expect(t.angles.c.eq(56.818 )).toBeTruthyWithMessage(`Failed ${t.angles.c} !== 56.818`);
    expect(t.sides.a.toDP(2).eq(15.52)).toBeTruthyWithMessage(`Failed ${t.sides.a.toDP(2)} !== 15.52`);
    expect(t.area.eq(51.9625)).toBeTruthyWithMessage(`Failed ${t.area} !== 51.9625`);
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
