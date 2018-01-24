import _ from 'lodash';
import mathjs from 'mathjs';

const math = mathjs.create({number: 'BigNumber', precision: 6});

export default class Calculator {

    constructor(name){
        this.name = name;
    }

    evaluate(exp){
        try {
            return math.eval(exp);
        } catch (e) {
            // console.error(`Failed to evaluate ${exp}`, e);
            return exp;
        }
    }

}
