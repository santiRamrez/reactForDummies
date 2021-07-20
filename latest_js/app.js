/*
import { print, log } from "./export.js";
import * as ajax from "./example2.js";
print("qlq bebe");
*/

import { frederick } from "./objects.js";

const selfEducate = (person) => {
  person.canRead = true;
  person.canWrite = true;
  return person;
};

const selfEducate2 = (person) => ({
  ...person,
  canRead: true,
  canWrite: true,
});

let testing = selfEducate2(frederick);

console.log(frederick);
console.log(testing);

let original = frederick;
let copy = { ...frederick };

let test2 = original === frederick ? true : false;

console.log(copy);
