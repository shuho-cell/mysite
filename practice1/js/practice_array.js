console.log("-------------------------------");
var addZero = function (num, digit) {
  var numString = String(num);
  while(numString.length < digit) {
    numString = '0' + numString;
    // string()は数値データを文字列データに変換する
  }
  return numString;

}
var songs = [
  'aaaaaaaaaaa',
  'bbbbbbbbbbbb',
  'cccccccccccc',
  'dddddddddddd',
  'eeeeeeeeeeeeee',
  'ffffffffffffff'
];
console.log(songs);
console.log(songs.length);
for (var i = 0; i < songs.length ; i++){
  var paragraph = document.createElement('p');
  paragraph.textContent = `${addZero(i + 1,3)} .${songs[i]}`;
  // paragraph.textContent = "text";
  var list = document.getElementById('list');
  list.appendChild(paragraph);

  // console.log(paragraph);
  // console.log(list);
}
console.log(addZero(1,2));
// var paragraph = document.createElement('p');
// console.log(paragraph);

