var num = 123;
var result = String(num);
console.log(result);
console.log(typeof result);

var str = "123";
var result = Number(str);
console.log(result);
console.log(typeof result);

var num = 12500;
var result = num.toLocaleString();
console.log(result);

d = new Date();
console.log(Number(d));
console.log(d.getTime());

console.log(Number(false));
console.log(Number(true));