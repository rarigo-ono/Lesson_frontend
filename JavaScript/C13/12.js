//Number
const numbers = [1, 1.41, Math.PI, Infinity];
for(let i in numbers){
    console.log('インデックス番号 '+ numbers[i] + 'の型：'+ typeof numbers[i]);
};

console.log('--------------------------------');
//String
const strings = ["", "abc", "123", (typeof 0)];
for(let i in strings){
    console.log('インデックス番号 '+ strings[i] + 'の型：'+ typeof strings[i]);
};
console.log('---------------------------------');

//Boolean
console.log(typeof true);
console.log(typeof false);

//Function
console.log(typeof function(){});