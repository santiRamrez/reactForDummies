const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
const [first, ...others] = lakes;

let testing1 = others.join(", ");

const peaks = ["Tallac", "Ralston", "Rose"];
let copyPeaks = [...peaks];
let testing2 = copyPeaks.reverse();

function directions(...args) {
  let [start, ...remaining] = args;
  let [finish, ...stops] = remaining.reverse();
  console.log(`drive through ${args.length} towns`);
  console.log(`start in ${start}`);
  console.log(`the destination is ${finish}`);
  console.log(`stopping ${stops.length} times in between`);
  console.log(`This is ${stops}`);
}

const morning = {
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly",
};
const dinner = "mac and cheese";
const backpackingMeals = {
  ...morning,
  dinner,
};
