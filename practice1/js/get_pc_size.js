console.log("-------------------");
getScreenSize();
// 画面サイズの取得
getWindowSize();
// ウィンドウサイズを取得
function getScreenSize() {
  var s = `横幅= ${window.parent.screen.width}/高さ=${window.parent.screen.height}`;
  document.getElementById('SrcSize').innerHTML = s;
}

// ウィンドウサイズを取得
function testGetScreenSize() {
  // 省略 const width = window.parent.screen.width;
  // 省略 const hei = window.parent.screen.hei;
  const {width, height} = window.parent.screen;
  const srcSize = document.getElementById('SrcSize');
  const addDom = `横幅= ${width}/高さ=${height}`;
  srcSize.innerHTML = addDom;
}

testGetScreenSize();

function getWindowSize() {
  var sW,sH,s;
  sW = window.innerWidth;
  sH = window.innerHeight;

  s = `横幅${sW}/高さ${sH}`;
  document.getElementById('WinSize').innerHTML = s;
}
console.log("-------------------");
// 応用編
window_load();
// 読み込み時の表示
window.onresize = window_load;
function window_load() {
  document.winSize.sw.value = window.innerWidth;
  document.winSize.sh.value = window.innerHeight
}
console.log("-------------------");
// 応用編２
window2_load();

window.onresize = window2_load;
function window2_load() {
  var sw, sh, s;
  sw = window.innerWidth;
  sh = window.innerHeight;
  s = `ウィンドウサイズ：${sw}高さ：${sh}`;
  document.getElementById('WinSize2').innerHTML = s;
}
