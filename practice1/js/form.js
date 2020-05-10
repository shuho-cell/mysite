console.log("----------------------");
function check() {
  var rCheck = document.formChecker.rBtn[0].checked;
  // rCheckはyesのほうが選択されているかどうかを確認
  if(rCheck){
    // yesが選択されているとき：true
    document.location = "../practice1.html";
  }else {
    // no が選択されているとき
    alert('戻れません');
  }
}

