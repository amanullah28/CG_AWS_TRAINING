const num1 = Math.floor(Math.random()*10+1);
const num2 = Math.floor(Math.random()*10+1);

const {sum} = require('./operations/sum');
const {subs} = require('./operations/subs');
const {mul} = require('./operations/mul');
console.log(`num1 = ${num1}, And num2 = ${num2}`);
sum(num1, num2);
subs(num1, num2);
mul(num1, num2);

