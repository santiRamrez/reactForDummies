const add2 = (x) => +2;
const subtrac1 = (x) => x - 1;
const multiplyBy5 = (x) => x * 5;

const result = multiplyBy5(subtrac1(add2()));

console.log(result);
