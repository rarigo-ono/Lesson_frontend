for(let i = 5; i < 10; i++){
    console.log(i);
};

let y = 1;
while(y < 10){
    console.log(y);
    y++;
}

let x = [1,3,5,7,9];
x.forEach(function(value, index, array){
    console.log(value * value);
});

let x2 = [1,3,5,7,9];
let data = x2.map(function(value, index, array){
    return value * 2
})

console.log(data);

const person = {fnam:"John", lname:"Doe", age:25};
let text = "";
for(let x in person){
    text += person[x];
}
console.log(text);