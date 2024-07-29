const users = [
  {
    name: "Alice Johnson",
    age: 28,
    gender: "Female",
  },
  {
    name: "Michael Smith",
    age: 35,
    gender: "Male",
  },
  {
    name: "Emma Brown",
    age: 22,
    gender: "Female",
  },
  {
    name: "Daniel Wilson",
    age: 30,
    gender: "Male",
  },
  {
    name: "Olivia Davis",
    age: 26,
    gender: "Female",
  },
  {
    name: "James Martinez",
    age: 40,
    gender: "Male",
  },
  {
    name: "Sophia Garcia",
    age: 33,
    gender: "Female",
  },
  {
    name: "Benjamin Lee",
    age: 27,
    gender: "Male",
  },
  {
    name: "Ava White",
    age: 29,
    gender: "Female",
  },
  {
    name: "Henry Harris",
    age: 31,
    gender: "Male",
  },
];

// O(N)
// const index = users.findIndex(item => item.name === "Emma Brown");

// const index = users.findIndex((element) => {
//   return element.name === "Emma Brown"
// });

// console.log(index);

// O(N)
const data = users.find((element) => {
  return element.name === "Yagnesh Modh";
});

console.log(data);

const maleRecords = users.filter((item) => {
  return item.gender === "Male";
});

const isChildExist = users.some((element) => {
  return element.age < 18;
});

const isEveryAdult = users.every((item) => item.age >= 18);

console.log(isChildExist);

console.log(isEveryAdult);

console.log(maleRecords);

// findIndex
// Find
// filter
// some
// every
