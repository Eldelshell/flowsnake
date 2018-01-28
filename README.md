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

```
npm install -s flowsnake
```

For example to convert from Miles to Kilometers use:

```
import Flowsnake from 'flowsnake';
const res = Flowsnake.convert(1).from('°C').to('K');
res.eq(274.15) // true!
```

## Calculators

Flowsnake includes some easy to use calculators:

* Download time calculator.
* Tip calculator.
* Prime factorization.
* BMI calculator.
* Ohm's Law.

### Usage

For example:

```
import Flowsnake from 'flowsnake';

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

// Bill calculator.
const values = {
    amount: 55,  // Bill amout
    percent: 15, // Tip percent
    pax: 4       // People to split the bill with
};

const res = Flowsnake.calculate('tip').of(values);
// {
//     total: {
//         tip: 8.25,
//         amount: 63.25
//     },
//     pax: {
//         tip: 2.06,
//         amount: 15.81
//     }
// }

```

## Contribute

You want to add a new system of units (for example, Imperial Frequency) it's very easy. First read [this](https://github.com/MarcDiethelm/contributing/blob/master/README.md) guide.

Make sure that all tests (including yours) and lint run correctly  with `npm test`.

## TODO

* Support on-the-fly units.
* Support configuration of Math.js
* More and more units!!!
 * Numeral systems
 * Charge
 * Field strength
 * Heat
 * Magnetism
 * Radiation
 * Inductance
 * Electric
   * Resistivity
 * Electrostatic capacitance
 * Linear charge/current density
 * Surface charge/current density
 * Volume charge density
 * Airflow
 * Density & Specific Volume
 * Inertia
 * Sound
 * Computers
   * Resolution
   * Pixel density
   * Typography


### Supported Units (462)

#### Linearacceleration
* MeterPerSquareSecond (m/s2)
* Decameterpersquaresecond (dam/s2)
* Hectometerpersquaresecond (hm/s2)
* Kilometerpersquaresecond (km/s2)
* Megameterpersquaresecond (Mm/s2)
* Gigameterpersquaresecond (Gm/s2)
* Terameterpersquaresecond (Tm/s2)
* Petameterpersquaresecond (Pm/s2)
* Exameterpersquaresecond (Em/s2)
* Zettameterpersquaresecond (Zm/s2)
* Yottameterpersquaresecond (Ym/s2)
* Decimeterpersquaresecond (dm/s2)
* Centimeterpersquaresecond (cm/s2)
* Millimeterpersquaresecond (mm/s2)
* Micrometerpersquaresecond (um/s2)
* MicroSImeterpersquaresecond (µm/s2)
* Nanometerpersquaresecond (nm/s2)
* Picometerpersquaresecond (pm/s2)
* Femtometerpersquaresecond (fm/s2)
* Attometerpersquaresecond (am/s2)
* Zeptometerpersquaresecond (zm/s2)
* Yoctometerpersquaresecond (ym/s2)
* Gravity (g)
* Gal (Gal)
* FootPerSquareSecond (ft/s2)
* MilePerSquareSecond (mi/s2)
* InchPerSquareSecond (in/s2)
* YardPerSquareSecond (yd/s2)

#### Angularacceleration
* RadianPerSquareSecond (rad/s2)
* RadianPerSquareMinute (rad/min2)
* RevolutionPerSquareSecond (r/s2)
* RevolutionPerSquareMinute (r/min2)

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

#### Storage
* BaseBit (b)
* Kilobasebit (Kb)
* Megabasebit (Mb)
* Gigabasebit (Gb)
* Terabasebit (Tb)
* Petabasebit (Pb)
* Exabasebit (Eb)
* Zettabasebit (Zb)
* Yottabasebit (Yb)
* Bit (bit)
* BaseByte (B)
* Kilobasebyte (KB)
* Megabasebyte (MB)
* Gigabasebyte (GB)
* Terabasebyte (TB)
* Petabasebyte (PB)
* Exabasebyte (EB)
* Zettabasebyte (ZB)
* Yottabasebyte (YB)
* Byte (byte)
* Bibit (i)
* Kibibibit (Ki)
* Mebibibit (Mi)
* Gibibibit (Gi)
* Tebibibit (Ti)
* Pebibibit (Pi)
* Exibibit (Ei)
* Zebibibit (Zi)
* Yobibibit (Yi)
* Bibyte (iB)
* Kibibibyte (KiB)
* Mebibibyte (MiB)
* Gibibibyte (GiB)
* Tebibibyte (TiB)
* Pebibibyte (PiB)
* Exibibyte (EiB)
* Zebibibyte (ZiB)
* Yobibibyte (YiB)

#### Distance
* Meter (m)
* Decameter (dam)
* Hectometer (hm)
* Kilometer (km)
* Megameter (Mm)
* Gigameter (Gm)
* Terameter (Tm)
* Petameter (Pm)
* Exameter (Em)
* Zettameter (Zm)
* Yottameter (Ym)
* Decimeter (dm)
* Centimeter (cm)
* Millimeter (mm)
* Micrometer (um)
* MicroSImeter (µm)
* Nanometer (nm)
* Picometer (pm)
* Femtometer (fm)
* Attometer (am)
* Zeptometer (zm)
* Yoctometer (ym)
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
* Decavoltampere (daVA)
* Hectovoltampere (hVA)
* Kilovoltampere (kVA)
* Megavoltampere (MVA)
* Gigavoltampere (GVA)
* Teravoltampere (TVA)
* Petavoltampere (PVA)
* Exavoltampere (EVA)
* Zettavoltampere (ZVA)
* Yottavoltampere (YVA)
* Decivoltampere (dVA)
* Centivoltampere (cVA)
* Millivoltampere (mVA)
* Microvoltampere (uVA)
* MicroSIvoltampere (µVA)
* Nanovoltampere (nVA)
* Picovoltampere (pVA)
* Femtovoltampere (fVA)
* Attovoltampere (aVA)
* Zeptovoltampere (zVA)
* Yoctovoltampere (yVA)

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
* Decaliter (dal)
* Hectoliter (hl)
* Kiloliter (kl)
* Megaliter (Ml)
* Gigaliter (Gl)
* Teraliter (Tl)
* Petaliter (Pl)
* Exaliter (El)
* Zettaliter (Zl)
* Yottaliter (Yl)
* Deciliter (dl)
* Centiliter (cl)
* Milliliter (ml)
* Microliter (ul)
* MicroSIliter (µl)
* Nanoliter (nl)
* Picoliter (pl)
* Femtoliter (fl)
* Attoliter (al)
* Zeptoliter (zl)
* Yoctoliter (yl)
* CubicMeter (m3)
* Decacubicmeter (dam3)
* Hectocubicmeter (hm3)
* Kilocubicmeter (km3)
* Megacubicmeter (Mm3)
* Gigacubicmeter (Gm3)
* Teracubicmeter (Tm3)
* Petacubicmeter (Pm3)
* Exacubicmeter (Em3)
* Zettacubicmeter (Zm3)
* Yottacubicmeter (Ym3)
* Decicubicmeter (dm3)
* Centicubicmeter (cm3)
* Millicubicmeter (mm3)
* Microcubicmeter (um3)
* MicroSIcubicmeter (µm3)
* Nanocubicmeter (nm3)
* Picocubicmeter (pm3)
* Femtocubicmeter (fm3)
* Attocubicmeter (am3)
* Zeptocubicmeter (zm3)
* Yoctocubicmeter (ym3)
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
* Decahertz (daHz)
* Hectohertz (hHz)
* Kilohertz (kHz)
* Megahertz (MHz)
* Gigahertz (GHz)
* Terahertz (THz)
* Petahertz (PHz)
* Exahertz (EHz)
* Zettahertz (ZHz)
* Yottahertz (YHz)
* Decihertz (dHz)
* Centihertz (cHz)
* Millihertz (mHz)
* Microhertz (uHz)
* MicroSIhertz (µHz)
* Nanohertz (nHz)
* Picohertz (pHz)
* Femtohertz (fHz)
* Attohertz (aHz)
* Zeptohertz (zHz)
* Yoctohertz (yHz)
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

#### Mass
* Gram (g)
* Decagram (dag)
* Hectogram (hg)
* Kilogram (kg)
* Megagram (Mg)
* Gigagram (Gg)
* Teragram (Tg)
* Petagram (Pg)
* Exagram (Eg)
* Zettagram (Zg)
* Yottagram (Yg)
* Decigram (dg)
* Centigram (cg)
* Milligram (mg)
* Microgram (ug)
* MicroSIgram (µg)
* Nanogram (ng)
* Picogram (pg)
* Femtogram (fg)
* Attogram (ag)
* Zeptogram (zg)
* Yoctogram (yg)
* Ton (mt)
* Mcg (mcg)
* Pound (lb)
* Ounce (oz)
* Ton (t)
* Stone (stone)
* Quarter (qr)

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

#### Transfer
* BitSecond (bps)
* KilobitSecond (kbps)
* MegabitSecond (Mbps)
* GigabitSecond (Gbps)
* TerabitSecond (Tbps)
* ByteSecond (b/s)
* KilobyteSecond (kB/s)
* MegabyteSecond (MB/s)
* GigabyteSecond (GB/s)
* TerabyteSecond (TB/s)

#### Speed
* KilometerPerHour (km/h)
* MeterPerSecond (m/s)
* MilePerHour (m/h)
* KnotUS (kt-us)
* KnotUK (kt-uk)
* FootPerSecond (ft/s)

#### Power
* Watt (W)
* Decawatt (daW)
* Hectowatt (hW)
* Kilowatt (kW)
* Megawatt (MW)
* Gigawatt (GW)
* Terawatt (TW)
* Petawatt (PW)
* Exawatt (EW)
* Zettawatt (ZW)
* Yottawatt (YW)
* Deciwatt (dW)
* Centiwatt (cW)
* Milliwatt (mW)
* Microwatt (uW)
* MicroSIwatt (µW)
* Nanowatt (nW)
* Picowatt (pW)
* Femtowatt (fW)
* Attowatt (aW)
* Zeptowatt (zW)
* Yoctowatt (yW)
* JoulePerSecond (J/s)
* HorsePower (HP)
* BTUHour (btu/h)
* CaloriePerHour (cal/h)
* ErgPerSecond (erg/s)

#### Pressure
* Pascal (Pa)
* Decapascal (daPa)
* Hectopascal (hPa)
* Kilopascal (kPa)
* Megapascal (MPa)
* Gigapascal (GPa)
* Terapascal (TPa)
* Petapascal (PPa)
* Exapascal (EPa)
* Zettapascal (ZPa)
* Yottapascal (YPa)
* Decipascal (dPa)
* Centipascal (cPa)
* Millipascal (mPa)
* Micropascal (uPa)
* MicroSIpascal (µPa)
* Nanopascal (nPa)
* Picopascal (pPa)
* Femtopascal (fPa)
* Attopascal (aPa)
* Zeptopascal (zPa)
* Yoctopascal (yPa)
* Bar (bar)
* Torr (torr)
* MillimeterMercury (mmHg)
* KilogramsPerSquareMeter (kg/m2)
* NewtonsPerSquareMeter (N/m2)
* Atmosphere (atm)
* PoundPerSquareInch (psi)
* KiloPoundPerSquareInch (ksi)
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

#### Roman
* Arabic (arabic)
* Roman (roman)

#### Torque
* NewtonMeter (N·m)
* Decanewtonmeter (daN·m)
* Hectonewtonmeter (hN·m)
* Kilonewtonmeter (kN·m)
* Meganewtonmeter (MN·m)
* Giganewtonmeter (GN·m)
* Teranewtonmeter (TN·m)
* Petanewtonmeter (PN·m)
* Exanewtonmeter (EN·m)
* Zettanewtonmeter (ZN·m)
* Yottanewtonmeter (YN·m)
* Decinewtonmeter (dN·m)
* Centinewtonmeter (cN·m)
* Millinewtonmeter (mN·m)
* Micronewtonmeter (uN·m)
* MicroSInewtonmeter (µN·m)
* Nanonewtonmeter (nN·m)
* Piconewtonmeter (pN·m)
* Femtonewtonmeter (fN·m)
* Attonewtonmeter (aN·m)
* Zeptonewtonmeter (zN·m)
* Yoctonewtonmeter (yN·m)
* DyneMeter (dyn·m)
* PoundForceFoot (lbf·ft)
* OunceForceFoot (ozf·ft)
* PoundalFoot (pdl·ft)
* GramForceMeter (gf·m)
* KilogramForceMeter (kgf·m)

#### Force
* Newton (N)
* Decanewton (daN)
* Hectonewton (hN)
* Kilonewton (kN)
* Meganewton (MN)
* Giganewton (GN)
* Teranewton (TN)
* Petanewton (PN)
* Exanewton (EN)
* Zettanewton (ZN)
* Yottanewton (YN)
* Decinewton (dN)
* Centinewton (cN)
* Millinewton (mN)
* Micronewton (uN)
* MicroSInewton (µN)
* Nanonewton (nN)
* Piconewton (pN)
* Femtonewton (fN)
* Attonewton (aN)
* Zeptonewton (zN)
* Yoctonewton (yN)
* Dyne (dyn)
* JoulePerMeter (J/m)
* PoundForce (lbf)
* OunceForce (ozf)
* Poundal (pdl)
* GramForce (gf)
* KilogramForce (kgf)
* Pond (pond)
