// create a obhect with following property
// name
// age
// gender
// collage Name

// key = "gender"

// read the data from this object usign descruturing approach
// read the data dynamiclly using key

const user = {
  name: "Yagnesh Modh",
  age: 36,
  gender: "Male",
  collageName: "Nirma",
};

const { age, name, ...xyz } = user;

console.log(xyz);

// const key = "gender"

// const {[key]: abc, name}  = user

// console.log(abc);

// console.log(name);
