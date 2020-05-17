const checkClass = document.getElementsByClassName("checkId");
const check = document.getElementsByName('check');
console.log(document.formName.check.length);
console.log(check);
const checkLength = document.formName.check.length;
function attachAddEvent(j) {
    checkClass[j].addEventListener("change", () => {
    const label = j + 1;
    console.log(label + "番がclickされました");
    var rCheck = document.formName.check[j].checked;
    console.log(document.formName.check[j].checked);
    if (rCheck) {
      checkTrue(j);
    }else {
      console.log("-false-");
      console.log(label);
    }
  });
}

// console.log(document.formName.check);
const clickedFunction = () => {
  for (var j = 0; j < checkClass.length; j++) {
    attachAddEvent(j);
  }
};

  clickedFunction();

function checkTrue(j) {
  console.log(document.formName.check[j]);
  replace(j);
  
}
function replace(j) {
	var newDiv = document.createElement('div');
	newDiv.setAttribute('id', 'newList');
	var newText = document.createTextNode('新しいノードです。');
	newDiv.appendChild(newText);
  var pClass = document.getElementsByClassName('pClass');
  console.log(pClass[j]);
	var parentNode = pClass[j].parentNode;
	parentNode.replaceChild(newDiv, pClass[j]);
}
