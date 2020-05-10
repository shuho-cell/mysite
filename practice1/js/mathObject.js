console.log("---------------------");
console.log(Math.PI);
console.log(Math.floor(Math.PI));

var point = function(num, digit) {
  var time = Math.pow(10, digit);
  return Math.floor(num * time) / time;
}
// digit 切り捨てない小数点の数 と 10をかけて314.15のようにする
//  floorで314にして10 * digit で割る
const decimal = Math.PI;
console.log(point(decimal, 4));
// 円周率を小数点4桁まで算出
console.dir(Math);