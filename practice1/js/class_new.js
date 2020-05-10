var today = new Date();

var year = today.getFullYear();
var day = today.getDate();
var time = today.getHours();

console.log(`今日の西暦:${year}`);
console.log(`今日は:${day}日です`);
console.log(`今は:${time}時です`);

console.log("----------------------");

var arr = new Array('りんご', 'みかん', 'もも', 'なし', 'さくらんぼ');
arr.sort();
console.log(arr);
console.log("----------------------");

var myObj = new Object;
myObj.name = "太郎";
myObj.age = 14;
console.log(myObj);
console.log("----------------------");

var myFunc = new Function('console.log("Hello")');
myFunc();
console.log("----------------------");

function Member(name, age) {
  'use strict'
  // newのつけ忘れた時にエラーを出すため
  this.name = name;
  this.age = age;
}
var member = new Member("太郎", 14)
console.log(member);