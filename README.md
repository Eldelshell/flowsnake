# Flowsnake

Flowsnake is an Open Source library used by the Flowsnake mobile application. It's a ES6 library so it can also be
used with NodeJS, React Native and on modern browsers.

Flowsnake is possible thanks to:
* [Decimal.js](https://github.com/MikeMcl/decimal.js/)
* [Jest](https://facebook.github.io/jest/)
* [Babel](https://babeljs.io)
* Many more...

## Install & usage

```
npm install -s flowsnake
```

For example to convert from Celsius to Kelvin use:

```
import Flowsnake from 'flowsnake'; // ES6
const Flowsnake = require('flowsnake'); // NodeJS

const res = Flowsnake.convert(1).from('°C').to('K');
res.eq(274.15) // true!
```

# Features

## Unit Conversion

Flowsnake includes many many many unit conversions. Check the [units README](https://github.com/Eldelshell/flowsnake/blob/master/lib/units/README.md) for a complete list.

### Example

For example to convert from Celsius to Kelvin use:

```
const res = Flowsnake.convert(1).from('°C').to('K');
res.eq(274.15) // true!
```

## Calculators

Flowsnake includes some easy to use calculators:

* Download time calculator.
* Tip calculator.
* Prime factorization.
* Divisors.
* Body Mass Index (BMI).
* Body Fat Percentage (BFP).
* Ohm's Law.
* Electricity Cost.
* Loan Calculator.
* Resistor color code calculator (from colors to resistance [Ω] and viceversa).
* Inductor color code calculator (from colors to inductance [µH] and viceversa).

### Algebra

* Combinations & permutations
* Greatest Common Denominator & Lowest Common Multiplier
* Fraction Simplifier
* Proportions

### Example

```
// Calculate Download Time
const values = {
    size: Flowsnake.unit(28).as('GB'),
    speed: Flowsnake.unit(300).as('Mbps')
};
const seconds = Flowsnake.calculate('download-time').of(values);
const minutes = Flowsnake.convert(seconds).to('min');
minutes.equals(12.4445); // true!

// Prime factors
Flowsnake.calculate('prime-factors').of(147); // '3×7²'
```

### Geometry

* Triangle
* Square
* Rectangle
* Rhombus
* Parallelogram
* Circle

Check the [Geometry README](https://github.com/Eldelshell/flowsnake/blob/master/lib/geometry/README.md) for more information.

### Example

```
// Solve a circle
const s = Circle.of({radius: 50});

s.diameter -> 100
s.area -> 7853.98
s.circumference -> 314.16
```

## Contribute

You want to add a new system of units (for example, Imperial Frequency) it's very easy. First read [this](https://github.com/MarcDiethelm/contributing/blob/master/README.md) guide.

Make sure that all tests (including yours) and lint run correctly  with `npm test`.

Checkout the list of issues and vote for the next features to add.

## TODO

* Support on-the-fly units.
* Support configuration of Math.js
* More and more units!!!
 * Numeral systems
 * Field strength
 * Heat
 * Magnetism
 * Radiation
 * Electric
   * Resistivity
 * Linear charge/current density
 * Surface charge/current density
 * Volume charge density
 * Airflow
 * Specific Volume
 * Inertia
 * Computers
   * Typography
