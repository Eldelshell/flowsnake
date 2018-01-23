# Flowsnake

Flowsnake is an Open Source library used by the Flowsnake mobile application.

Flowsnake is possible thanks to:
* [Math.js](http://mathjs.org/)
* [Decimal.js](https://github.com/MikeMcl/decimal.js/)
* [Jest](https://facebook.github.io/jest/)
* [Babel](https://babeljs.io)
* Many more...

# Features

## Unit Conversion

Flowsnake includes many many many unit conversions.

### Usage

For example to convert from Miles to Kilometers use:

```
import Flowsnake from 'flowsnake';
const res = Flowsnake.convert(1).from('C').to('K');
res.eq(274.15) // true!
```

## Contribute

You want to add a new system of units (for example, Imperial Frequency) it's very easy. First read [this](https://github.com/MarcDiethelm/contributing/blob/master/README.md) guide.

Make sure that all tests (including yours) and lint run correctly  with `npm test`.

## TODO

* Support on-the-fly units.
* Support configuration of Math.js
* More and more units!!!
 * Force
 * Numeral systems
 * Power
 * Acceleration Linear/Angular
 * Angular velocity
 * Pressure
 * Roman numbers
 * Shoe sizes
 * Charge
 * Field strength
 * Heat
 * Magnetism
 * Light
 * Radiation
 * Inductance
 * Electric
   * Conductance
   * Potential
   * Resistivity
   * Resistance
   * Conductivity
 * Electrostatic capacitance
 * Linear charge/current density
 * Surface charge/current density
 * Volume charge density
 * Airflow
 * Density & Specific Volume
 * Inertia
 * Torque
 * Sound
 * Computers
   * Resolution
   * Pixel density
   * Typography
   * Data Transmision


### Supported Units (148)

#### Area
* SquareMeter (m2)
* SquareMillimeter (mm2)
* SquareCentimeter (cm2)
* SquareKilometer (km2)
* Are (a)
* Hectare (ha)
* SquareFoot (ft2)
* SquareMile (mile2)
* SquareInch (in2)
* SquareYard (yd2)
* Acre (ac)

#### Data
* Bit (bit)
* Kilobit (Kb)
* Megabit (Mb)
* Gigabit (Gb)
* Terabit (Tb)
* Byte (byte)
* Kilobyte (kB)
* Megabyte (MB)
* Gigabyte (GB)
* Terabyte (TB)
* Bibit (bibit)
* Kibibit (Ki)
* Mebibit (Mi)
* Gibibit (Gi)
* Tebibit (Ti)
* Bibyte (bibyte)
* Kibibyte (KiB)
* Mebibyte (MiB)
* Gibibyte (GiB)
* Tebibyte (TiB)

#### Distance
* Meter (m)
* Millimeter (mm)
* Centimeter (cm)
* Kilometer (km)
* Foot (ft)
* Mile (mile)
* Inch (in)
* Yard (yd)
* NauticalMile (nmi)
* AstronomicalUnit (AU)
* Parsec (pc)
* LightYear (ly)

#### Aparentpower
* VoltAmpere (VA)
* MilliVoltAmpere (mVA)
* KiloVoltAmpere (kVA)
* MegaVoltAmpere (MVA)
* GigaVoltAmpere (GVA)

#### Current
* Ampere (A)
* Milliampere (mA)
* Kiloampere (kA)
* Microampere (µA)
* Abampere (abA)
* Biot (Bi)
* Statampere (statA)

#### Volume
* Liter (l)
* Deciliter (dl)
* Centiliter (cl)
* Mililiter (ml)
* CubicMeter (m3)
* CubicCentimeter (cm3)
* FluidOunce (fl-oz-uk)
* Gallon (gal-uk)
* Teaspoon (tsp-uk)
* Tablespoon (tbsp-uk)
* Pint (pint-uk)
* Quart (qt-uk)
* Barrel (bbl-uk)
* FluidOunce (fl-oz-us)
* Gallon (gal-us)
* Teaspoon (tsp-us)
* Tablespoon (tbsp-us)
* Cup (cup)
* Pint (pint-us)
* Quart (qt-us)
* Barrel (bbl-us)
* CubicYard (yd3)
* CubicInch (in3)
* CubicFoot (ft3)
* Kryddmatt (krm)
* Tesked (tsk)
* Matsked (msk)
* Kaffekopp (kkp)
* Glas (glas)
* Kanna (kanna)

#### Angle
* Degree (deg)
* Radian (rad)
* Gradian (grad)
* Arcmin (arcmin)
* Arcsec (arcsec)

#### Energy
* Joule (J)
* Kilojoule (kJ)
* Megajoule (MJ)
* WattHour (Wh)
* MilliwattHour (mWh)
* KilowattHour (kWh)
* MegawattHour (MWh)
* GigawattHour (GWh)
* BTU (btu)
* Calorie (cal)
* KilogramForceMeter (kgfm)
* GigaElectronVolt (GeV)

#### Frequency
* Hertz (Hz)
* Millihertz (mHz)
* Kilohertz (kHz)
* Megahertz (MHz)
* Gigahertz (GHz)
* Terahertz (THz)
* RPM (rpm)
* DegreePerSecond (deg/s)
* DegreePerMinute (deg/m)
* RadianPerSecond (rad/s)
* RadianPerMinute (rad/m)

#### Gas
* LitersPer100Km (l/100km)
* KmsPerLiter (km/l)
* MilesPerLiter (mi/l)
* MilesPerGallonUS (mpg-us)
* MilesPerGallonUK (mpg-uk)

#### Time
* Second (s)
* Millisecond (ms)
* Microsecond (mu)
* Nanosecond (MHz)
* Minute (min)
* Hour (h)
* Day (d)
* Week (week)
* Month (month)
* Year (year)

#### Temperature
* Celsius (C)
* Kelvin (K)
* Fahrenheit (F)
* Rankine (R)

#### Speed
* KilometerPerHour (km/h)
* MeterPerSecond (m/s)
* MilePerHour (m/h)
* KnotUS (kt-us)
* KnotUK (kt-uk)
* FootPerSecond (ft/s)

#### Power
* Watt (W)
* Milliwatt (mW)
* Kilowatt (kW)
* Megawatt (MW)
* Gigawatt (GW)
* JoulePerSecond (J/s)
* HorsePower (HP)
* BTUHour (btu/h)
* CaloriePerHour (cal/h)
* ErgPerSecond (erg/s)

#### Pressure
* Pascal (Pa)
* Kilopascal (kPa)
* Megapascal (MPa)
* Bar (bar)
* Torr (torr)
* MillimeterMercury (mmHg)
* KilogramsPerSquareMeter (kg/m2)
* NewtonsPerSquareMeter (N/m2)
* Atmosphere (atm)
* PoundPerSquareInch (psi)
* KilpoundPerSquareInch (ksi)
* PoundPerSquareFoot (psf)
* InchMercury (inHg)

#### Shoesize
* Europe (eu-adult)
* USMale (us-adult-male)
* USFemale (us-adult-female)
* UKMale (uk-adult-male)
* UKFemale (uk-adult-female)
* JapanMale (jp-adult-male)
* JapanFemale (jp-adult-female)
* Mexico (mx-adult)
* Centimeter (cm)
* Inch (in)
* Mondopoint (mondopoint)

#### Illuminance
* Lux (lx)
* Phot (ph)
* Nox (nx)
* MeterCandle (mc)
* LumenSquareMeter (lm/m2)
* WattSquareCentimeter (W/cm2)
* FootCandle (fc)
* LumenSquareFoot (lm/ft2)

#### Luminance
* CandelaSquareMeter (cd/m2)
* Nit (nt)
* Stilb (sb)
* Lambert (L)
* LumenSquareMeterSteradian (lm/m2/sr)
* CandelaSquareFoot (cd/ft2)
* FootLambert (fL)
* LumenSquareFootSteradian (lm/ft2/sr)
