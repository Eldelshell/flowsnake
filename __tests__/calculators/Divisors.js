import _ from 'lodash';
import Flowsnake from '../../lib';

it('should calculate divisors', () => {
    expect(Flowsnake.calculate('divisors').of(0) === null).toBeTruthy();
    expect(Flowsnake.calculate('divisors').of(null) === null).toBeTruthy();
    expect(Flowsnake.calculate('divisors').of(NaN) === null).toBeTruthy();
    expect(Flowsnake.calculate('divisors').of('foo') === null).toBeTruthy();

    expect(
        _.isEqual(
            Flowsnake.calculate('divisors').of(90),
            [1,2,3,5,6,9,10,15,18,30,45,90]
        )
    ).toBeTruthy();

    expect(
        _.isEqual(
            Flowsnake.calculate('divisors').of(81),
            [1,3,9,27,81]
        )
    ).toBeTruthy();

    expect(
        _.isEqual(
            Flowsnake.calculate('divisors').of(47),
            [1,47]
        )
    ).toBeTruthy();

});
