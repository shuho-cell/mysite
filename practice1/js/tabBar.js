const checkClass = document.getElementsByClassName("checkClass");
/**
 * 柔軟に表示を変更する要素の親要素のid
 */
const mainBlockId = "main-block";

/**
 * 各チェックボックスごとに変更させる領域のid
 */
const childBlockId = "child-block";

/**
 * 各チェックボックスの値それぞれに固有の表示を
 * main-blockに行う。
 * そのために、チェックボックスが変更された場合、
 * 子要素を一旦削除して、再生成を行う処理を
 * この関数では担う。
 */
var text = [text1, text2, text3, text4];
function reCreateChildDom() {
  const mainBlockDom = document.getElementById(mainBlockId);
  const childBlockDom = document.getElementById(childBlockId);
  // main-blockの子要素を削除
  mainBlockDom.removeChild(childBlockDom);
  // main-blockの子要素を生成
  const nextChildDom = document.createElement("div");
  nextChildDom.setAttribute("id", childBlockId);
  mainBlockDom.appendChild(nextChildDom);
  return nextChildDom;
}

function addChildDom(childBlockDom, index) {
  const li = document.createElement("li");
  const text = document.createTextNode(`${index}: この文が追加されます`);
  li.appendChild(text);
  childBlockDom.appendChild(li);
}

function append(index) {
  const ChildBlockDom = reCreateChildDom();
  addChildDom(ChildBlockDom, index);
}

function attachAddEvent(index) {
  checkClass[index].addEventListener("change", () => {
    const label = index + 1;
    console.log(label + "番がclickされました");
    append(label);
  });
}

function clickedFunction() {
  for (let i = 0; i < checkClass.length; i++) {
    attachAddEvent(i);
  }
}

clickedFunction();
