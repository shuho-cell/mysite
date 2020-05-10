console.log("----------");
function $submit() {
  var rCheck = document.quiz.rBtn[0].checked;
  if(rCheck) {
    // createNode1();
    create1();
  }else{
    // createNode2();
    create2();
  }
}
/*
var createNode1 = ()=> {
  var lists = document.getElementById('lists');
  // id要素を取得
  var li = document.createElement('li');
  // li 要素作成
  var text = document.createTextNode('正解');
  // text 作成(正解と表示される)
  li.appendChild(text);
  // liにtextを加える
  lists.appendChild(li);
}
var createNode2 = ()=> {
  var lists = document.getElementById('lists');
  // id要素を取得
  var li = document.createElement('li');
  // li 要素作成
  var text = document.createTextNode('不正解');
  // text 作成(不正解と表示される)
  li.appendChild(text);
  // liにtextを加える
  lists.appendChild(li);
}
*/

var create1 = ()=> { 
  createElement = document.getElementById('createP');
  const content = createElement.innerHTML
  createElement.innerHTML = "正解"
}
var create2 = ()=> { 
  createElement = document.getElementById('createP');
  const content = createElement.innerHTML
  createElement.innerHTML = "不正解"
}
