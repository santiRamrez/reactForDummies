const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];

const wSchools = schools.filter((school) => school[0] === "W");
const cutSchool = (cut, list) => list.filter((school) => school !== cut);

cutSchool("Yorktown", schools).join(", ");

const highSchool = schools.map((school) => `${school} High School`);

const editName = (oldName, name, arr) =>
  arr.map((item) => (item.name === oldName ? { name } : item));

let schools2 = [
  { name: "Yorktown" },
  { name: "Stratford" },
  { name: "Washington & Liberty" },
  { name: "Wakefield" },
];
let updatedSchools = editName("Stratford", "HB Woodlawn", schools2);

const ages = [21, 18, 42, 40, 64, 63, 34];
const maxAge = ages.reduce((max, age) => {
  console.log(`${age} > ${max} = ${age > max}`);
  if (age > max) {
    return age;
  } else {
    return max;
  }
}, 0);

const colors = [
  {
    id: "xekare",
    title: "rad red",
    rating: 3,
  },
  {
    id: "jbwsof",
    title: "big blue",
    rating: 2,
  },
  {
    id: "prigbj",
    title: "grizzly grey",
    rating: 5,
  },
  {
    id: "ryhbhsl",
    title: "banana",
    rating: 1,
  },
];
const hashColors = colors.reduce((hash, { id, title, rating }) => {
  hash[id] = { title, rating };
  return hash;
}, {});
