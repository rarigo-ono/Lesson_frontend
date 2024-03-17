console.log("4 ---------------------");
const pattern = /e/;
let result4 = pattern.test("The best things in life are free!");
console.log(result4);

console.log("3 ---------------------");
let text3 = "Visit Microsoft!"
let result3 = text3.replace(/microsoft/i, "W3Schools")
console.log(text3 + "を正規表現で" + result3 + "に置き換えました。");

console.log("2 ---------------------");
let text2 = "Visit Microsoft!"
let result = text2.replace("Microsoft", "W3Schools")
console.log(text2 + "を" + result + "に置き換えました。");


console.log("1 ---------------------");
let text = "Visit W3Schools!";

let n = text.search("W3Schools");

console.log(n);


console.log("5 ---------------------");
const pattern5 = /e/.exec;
let result5 = pattern.test("The best things in life are free!");
console.log(result5);