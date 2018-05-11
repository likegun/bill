'use strict';
const fs = require('fs');
const content = fs.readFileSync(process.argv[2]).toString().match(/---([\d\D]+)/)[1];
const regexp = /(\d+\.?\d*)/g;
let match;
let sum = 0;
while((match = regexp.exec(content))) {
    sum += Number(match[1]);
}
console.log(sum);
