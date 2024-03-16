//データ削除
const mapDelete = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);
console.log(mapDelete);

mapDelete.delete('key1');
console.log(mapDelete.get('key1'));
console.log(mapDelete.get('key2'));

const objectMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
])

objectMap.forEach((value, key) => {
    console.log(`The value of ${key} is ${value}`);
})

//forEachメソッドのおさらい
//1基本構文
//forEach　配列の要素を順番に取り出し、記述したコールバック関数に沿って処理できる。
var array1 = new Array("要素1", "要素2", "要素3");

array1.forEach(function(value){
    console.log(value);
})

//2　引数
//value：要素を順番に格納　index：valueに格納されている要素のインデックスを格納
//array：forEachメソッドを呼び出している元の配列を格納
var array1 = new Array("要素1", "要素2", "要素3");
array1.forEach(function(value, index){
    console.log('value' + value + 'index' + index);
});

//w3schools

const fruits = new Map([
    ['apples', 500],
    ['bananas', 300],
    ['oranges', 200]
]);

console.log(fruits.get("apples"));
console.log(fruits.get("bananas"));
console.log(fruits.get("apples"));

const setMap = new Map();
setMap.set("りんご",400);
setMap.set("みかん",300);
setMap.set("キウイフルーツ", 150);
console.log(setMap);

setMap.set("りんご",800);
console.log(setMap);
console.log(setMap.get('りんご'));
console.log(setMap.get("みかん"));
console.log(setMap.size);
console.log(setMap.delete('みかん'));
console.log(setMap.get('みかん'));
console.log(setMap);
console.log('------------------------');
console.log(setMap.has('りんご'));
console.log(setMap.has('メロン'));
console.log('-----------------------------');
let text = '';
fruits.forEach(function(value, key){
    text += key + ' = ' + value + '  ';
})
console.log(text);