//1 sort()
const test1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(test1.sort());

//2 reverse()
console.log(test1.reverse());

//3 toSorted()
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(sorted);

//4
const reversed = months.toReversed();
console.log(reversed);

//5 数値ソート
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);