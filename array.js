const arr = [1, 2, 3, 4, 5];

const index = 2;

const finalArr = [...arr.slice(0, index), ...arr.slice(index + 1)];

console.log(finalArr);

console.log(arr);

// const newArr = [0,...arr, 6]

// console.log(newArr);
