import _ from 'lodash';
import Decimal from 'decimal.js';

expect.extend({
    toBeTruthyWithMessage(received, errMsg) {
        const result = {
            pass: received,
            message: () => errMsg
        };
        return result;
    }
});

const TestCase = {
    units: function(descriptor, tests, idempotent) {
        tests.forEach(({from, to, values}) => {
            let testCase = _.isString(from) ? `${from} => ${to}` : `${from.name} => ${to.name}`;
            it(testCase, () => {
                values.forEach(({a,b}) => {
                    const result = _.isString(from) ? descriptor.convert(a, from, to) : descriptor.of(a, from).to(to);

                    let res = false;
                    if(_.isString(result)){
                        res = result == b;
                    }else{
                        res = new Decimal(result).eq(b);
                    }

                    expect(res).toBeTruthyWithMessage(`Failed ${testCase} ${a} !== ${b} results: ${result}`);
                });
            });

            if(!idempotent){
                return;
            }

            testCase = _.isString(from) ? `${to} => ${from}` : `${to.name} => ${from.name}`;
            it(testCase, () => {
                values.forEach(({a,b}) => {
                    const result = _.isString(from) ? descriptor.convert(b, to, from) : descriptor.of(b, to).to(from);

                    let res = false;
                    if(_.isString(result)){
                        res = result == a;
                    }else{
                        res = new Decimal(result).eq(a);
                    }

                    expect(res).toBeTruthyWithMessage(`Failed ${testCase} ${b} !== ${a} results: ${result}`);
                });
            });
        });
    }
};

export default TestCase;
