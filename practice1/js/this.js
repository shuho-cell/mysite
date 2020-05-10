console.log("-----------------");
console.log(this);
console.log("-----------------");
this.sample = 'こんにちは';
console.log(window.sample);
// thisのデフォルトの設定は、Windows
function sample2() {
  console.log(this);
}
sample2();
// functionでも呼び出せる。
console.log("-----------------");
var myObj = {
  name: this,
}
console.log(myObj.name);
// methodsでも呼び出せる
console.log("-----------------");
var myObj = {
  name: "シマウマ",
  myFunc: function() {
    console.log(this);
  }
}
// methodsの中にfunctionをいれる
myObj.myFunc();
console.log("-----------------");
function Human(name, age) {
  this.name = name;
  this.age = age;
}
var human =new Human('しまうま', 15);
console.log(human);
// コンストラクタ使用 インスタンスプロパティ(先に定義された物)であり、自身のHumanプロパティを指している。
console.log("-----------------");
