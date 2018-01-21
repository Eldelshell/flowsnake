#!/usr/bin/env node

const _ = require('lodash');
const Flowsnake = require('../dist/flowsnake.min.js');

// Print the units for documentation.
const descs = Flowsnake.convert().getDescriptors();
const text = [];
let total = 0;
for (var k in descs) {
    if (!descs.hasOwnProperty(k)) {
        continue;
    }

    const desc = descs[k];
    text.push(`\n#### ${_.capitalize(k)}`);
    desc.describe().forEach((unit) => {
        text.push(`* ${unit.name} (${unit.id})`);
        total++;
    });
}
text.unshift(`### Supported Units (${total})`);
console.log(text.join('\n'));
