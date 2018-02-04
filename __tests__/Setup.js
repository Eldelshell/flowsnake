import Decimal from 'decimal.js';
import _ from 'lodash';

expect.extend({
    toBeDecimal(received, expected, precision) {
        if(!Decimal.isDecimal(received)){
            return {
                pass: false,
                message: () => `Expected a Decimal number. Received ${typeof(received)}`
            };
        }

        const r = _.isFinite(precision) ? received.toDP(precision) : received;

        if(r.eq(expected)){
            return {
                pass: true,
                message: () => `Expected ${r} to be ${expected}`
            };
        }

        return {
            pass: false,
            message: () => `Expected ${r} to be ${expected}`
        };
    },
    toBeTruthyWithMessage(received, errMsg) {
        const result = {
            pass: received,
            message: () => errMsg
        };
        return result;
    }
});
