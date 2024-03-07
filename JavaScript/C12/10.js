//1
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
console.log(position);

//2 lastIndexOf()
test2 = fruits
let ans2 = test2.lastIndexOf("Apple") + 1;
console.log(ans2);

//3 includes()
const test3 = ["Apple", "Orange", "Apple", "Mango"];
console.log(test3.includes("Mango"));

//4 find()
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
};

console.log(first);

//5 findIndex()
const test5 = numbers;
let ans5 = test5.findIndex(myFunction);

function myFunction(value, index, array) {
    return value > 18;
};
console.log(ans5);

//6 findLast()
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
console.log(high);

//7 findLastIndex()
let pos = temp.findLastIndex(x => x > 40);
console.log(pos);