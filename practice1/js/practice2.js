console.log("-------------------");
function append() {
  var lists = document.getElementById('lists');
  // id要素を取得
  var li = document.createElement('li');
  // li 要素作成
  var text = document.createTextNode('text');
  // text 作成(textと表示される)
  li.appendChild(text);
  // liにtextを加える
  lists.appendChild(li);
}
// 打たれたコードを読み込み表示する
console.log("-------------------");
function submit() {
  var appendLists = document.getElementById('appendLists');
  // id要素を取得
  var li = document.createElement('li');
  // li 要素作成
  var textBox = document.getElementById('textBox');
  // textBoxからdocument取得
  var text = document.createTextNode(textBox.value);
  // text 作成(textBoxのvalue(書かれた内容を取得)が表示される)
  li.appendChild(text);
  // liにtextを加える
  appendLists.appendChild(li);
}
console.log("-------------------");

const form = document.forms.MyForm;
form.removeText.addEventListener('submit', function(){
console.log("-------------------");
  var removeElement = document.getElementById("textBox");
  removeElement.removeChild(removeText.value);
});
