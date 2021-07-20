let date = new Date();
let labels = [];

function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

/* Currying */
const userLogs = (userName) => (message) =>
  console.log(`${userName} -> ${message}`);

const log = userLogs("grandpa23");
log("attempted to load 20 fake members");
