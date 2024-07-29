const arr = [1, 2, 3, 4, 5];

// only update
const newArr = arr.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  }
  return item;
});

console.log(newArr);

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

const updatedUsers = users.map((item) => {
  if (item.name === "Emma Brown") {
    return { ...item, age: 24 };
  }
  return item;
});

console.log(updatedUsers);
console.log(users);
