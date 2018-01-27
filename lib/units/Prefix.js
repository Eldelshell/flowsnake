const Prefix = {
    METRIC: [
        // Macro
        {id: 'da', name: 'Deca', converter: 1*(10**1)},
        {id: 'h', name: 'Hecto', converter: 1*(10**2)},
        {id: 'k', name: 'Kilo', converter: 1*(10**3)},
        {id: 'M', name: 'Mega', converter: 1*(10**6)},
        {id: 'G', name: 'Giga', converter: 1*(10**9)},
        {id: 'T', name: 'Tera', converter: 1*(10**12)},
        {id: 'P', name: 'Peta', converter: 1*(10**15)},
        {id: 'E', name: 'Exa', converter: 1*(10**18)},
        {id: 'Z', name: 'Zetta', converter: 1*(10**21)},
        {id: 'Y', name: 'Yotta', converter: 1*(10**24)},
        // Micro
        {id: 'd', name: 'Deci', converter: 1/(10**1)},
        {id: 'c', name: 'Centi', converter: 1/(10**2)},
        {id: 'm', name: 'Milli', converter: 1/(10**3)},
        {id: 'u', name: 'Micro', converter: 1/(10**6)},
        {id: 'µ', name: 'MicroSI', converter: 1/(10**6)},
        {id: 'n', name: 'Nano', converter: 1/(10**9)},
        {id: 'p', name: 'Pico', converter: 1/(10**12)},
        {id: 'f', name: 'Femto', converter: 1/(10**15)},
        {id: 'a', name: 'Atto', converter: 1/(10**18)},
        {id: 'z', name: 'Zepto', converter: 1/(10**21)},
        {id: 'y', name: 'Yocto', converter: 1/(10**24)}
    ],

    DATA_DECIMAL: [
        // Decimal (KB, Kbit, etc)
        {id: 'K', name: 'Kilo', converter: 1*(10**3)},
        {id: 'M', name: 'Mega', converter: 1*(10**6)},
        {id: 'G', name: 'Giga', converter: 1*(10**9)},
        {id: 'T', name: 'Tera', converter: 1*(10**12)},
        {id: 'P', name: 'Peta', converter: 1*(10**15)},
        {id: 'E', name: 'Exa', converter: 1*(10**18)},
        {id: 'Z', name: 'Zetta', converter: 1*(10**21)},
        {id: 'Y', name: 'Yotta', converter: 1*(10**24)}
    ],

    DATA_BINARY: [
        // Binary (KiB, Kibit, etc)
        {id: 'K', name: 'Kibi', converter: 1024},
        {id: 'M', name: 'Mebi', converter: 1024**2},
        {id: 'G', name: 'Gibi', converter: 1024**3},
        {id: 'T', name: 'Tebi', converter: 1024**4},
        {id: 'P', name: 'Pebi', converter: 1024**5},
        {id: 'E', name: 'Exi', converter: 1024**6},
        {id: 'Z', name: 'Zebi', converter: 1024**7},
        {id: 'Y', name: 'Yobi', converter: 1024**8}
    ]
};

export default Prefix;
