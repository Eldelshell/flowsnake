import Unit from '../Unit';
import System from '../System';

const TYPE = 'ShoeSize';

const SYSTEM = new System('Adult');

const Adult = {
    Europe: new Unit({
        id: 'eu-adult',
        name: 'Europe',
        type: TYPE,
        system: SYSTEM,
        values: [35, '35½', 36, 37, '37½', 38, '38½', 39, 40, 41, 42, 43, 44, 45, '46½', '48½']
    }),
    USMale: new Unit({
        id: 'us-adult-male',
        name: 'USMale',
        type: TYPE,
        system: SYSTEM,
        values: ['3½', 4, '4½', 5, '5½', 6, '6½', 7, '7½', 8, '8½', 9, '10½', '11½', '12½', 14]
    }),
    USFemale: new Unit({
        id: 'us-adult-female',
        name: 'USFemale',
        type: TYPE,
        system: SYSTEM,
        values: [5, '5½', 6, '6½', 7, '7½', 8, '8½', 9, '9½', 10, '10½', 12, 13, 14, '15½']
    }),
    UKMale: new Unit({
        id: 'uk-adult-male',
        name: 'UKMale',
        type: TYPE,
        system: SYSTEM,
        values: [3, '3½', 4, '4½', 5, '5½', 6, '6½', 7, '7½', 8, '8½', 10, 11, 12, '13½']
    }),
    UKFemale: new Unit({
        id: 'uk-adult-female',
        name: 'UKFemale',
        type: TYPE,
        system: SYSTEM,
        values: ['2½', 3, '3½', 4, '4½', 5, '5½', 6, '6½', 7, '7½', 8, '9½', '10½', '11½', 13]
    }),
    JapanMale: new Unit({
        id: 'jp-adult-male',
        name: 'JapanMale',
        type: TYPE,
        system: SYSTEM,
        values: ['21½', 22, '22½', 23, '23½', 24, '24½', 25, '25½', 26, '26½', '27½', '28½', '29½', '30½', '31½']
    }),
    JapanFemale: new Unit({
        id: 'jp-adult-female',
        name: 'JapanFemale',
        type: TYPE,
        system: SYSTEM,
        values: [21, '21½', 22, '22½', 23, '23½', 24, '24½', 25, '25½', 26, 27, 28, 29, 30, 31]
    }),
    Mexico: new Unit({
        id: 'mx-adult',
        name: 'Mexico',
        type: TYPE,
        system: SYSTEM,
        values: ['', '', '', '', '', '4½', 5, '5½', 6, '6½', 7, '7½', 9, 10, 11, '12½']
    }),
    Centimeter: new Unit({
        id: 'cm',
        name: 'Centimeter',
        type: TYPE,
        system: SYSTEM,
        values: [22.8, 23.1, 23.5, 23.8, 24.1, 24.5, 24.8, 25.1, 25.4, 25.7, 26, 26.7, 27.3, 27.9, 28.6, 29.2]
    }),
    Inch: new Unit({
        id: 'in',
        name: 'Inch',
        type: TYPE,
        system: SYSTEM,
        values: [9, '9⅛', '9¼', '9⅜', '9½', '9⅝', '9¾', '9⅞', 10, '10⅛', '10¼', '10½', '10¾', 11, '11¼', '11½']
    }),
    Mondopoint: new Unit({
        id: 'mondopoint',
        name: 'Mondopoint',
        type: TYPE,
        system: SYSTEM,
        values: [228, 231, 235, 238, 241, 245, 248, 251, 254, 257, 260, 267, 273, 279, 286, 292]
    })
};

export default Adult;
