// Create a Set
const letters = new Set(["a", "b", "c"]);
// List all Elements
let text = "";
letters.forEach(function(value){
    text = value;
    console.log(text);
})
console.log(text);

test = letters.values();
console.log(test);