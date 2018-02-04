# Geometry

## Triangle

You can solve a triangle by giving one of the following options:

* 3 Angles (AAA)
* 3 Sides (SSS)
* 2 angles and 1 side (AAS or ASA)
* 2 sides and 1 angle (SAS or SSA)
* 1 side and its base (HB)

Given this, all sides, angles and heights are calculated. Also the area, perimeter and the type of the triangle when possible.

A triangle sides and angles are described as:

```
  ▄
  ▍▚
  ▍c▚
  ▍  ▚
  ▍   ▚
  ▍    ▚ b
a ▍     ▚
  ▍      ▚
  ▍b    a ▚
  ▔▔▔▔▔▔▔▔▔
      c
```

For example:

```
const t = Triangle.of({
    sides: {
        a: 5,
        b: 5
    },
    angles: {
        c: 90
    }
});

JSON.stringify(t);

{
  "vertices": 3,
  "type": "right-isosceles",
  "area": {
    "value": "12.5"
  },
  "perimeter": {
    "value": "17.071080798612048104"
  },
  "sides": {
    "a": {
      "value": "5"
    },
    "b": {
      "value": "5"
    },
    "c": {
      "value": "7.0710807986120481043"
    }
  },
  "angles": {
    "c": {
      "value": "90"
    },
    "a": {
      "value": "44.9999"
    },
    "b": {
      "value": "45"
    }
  },
  "heights": {
    "a": {
      "value": "5"
    },
    "b": {
      "value": "3.53553"
    },
    "c": {
      "value": "3.53554"
    }
  }
}

```

## Quadrilaterals

You can solve different quadrilaterals by giving:

* Square: side length.
* Rectangular: two sides.
* Rhombus: side and one angle.
* Parallelogram: two sides and one angle.

Given this, all sides, angles, diagonals and heights are calculated. Also the area, perimeter and the type of the quadrilaterals when possible.

All quadrilaterals sides and angles are described as:

```
            a
    ┏━━━━┯━━━━━━━━━━━┓
    ┃ a  │h.a      b ┃
   c┃    │           ┃b
    ┃ c  │         d ┃
    ┗━━━━┷━━━━━━━━━━━┛
            d
```

So, for example, to solve a Parallelogram:

```
const p = Parallelogram.of(5, 10, 30);
// p.height -> 5
// p.area -> 25
// p.perimeter -> 30
```
