// cant have duplicate property name
const obj = {
  a: 1,
  b: 2,
  c: 3,
  a: 4,
};

// primitive data type

// string
// boolean
// number
// bigInt
// symbol

// nonpremitive data type

// object
// array

const user = {
  name: "Yagnesh Modh",
  age: 36,
  gender: "male",
};

// descructuring

const name = "rohit sharma";

const key = "name";

const { age, [key]: userName } = user;

console.log(age);
console.log(name);
console.log(userName);

// dot notation
// console.log(user.age);
// console.log(user.name);
// console.log(user.gender);

// array notation
console.log(user[key]);

// const arr = [1,2,4,5];

// arr.push(6);

// mutable
// immutable

// const newUser = { ...user, profession: "teacher", age: 37 }

console.log(newUser);
console.log(user);
