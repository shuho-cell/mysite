function replace() {
	
	var rCheck = document.formElement.check.checked;

  if(rCheck) {
    var newDiv = document.createElement('div');
		newDiv.setAttribute('id', 'newDiv');
		var newText = document.createTextNode("data1");
		// data1 = "新しいノード";
		newDiv.appendChild(newText);
		var oldDiv = document.getElementById('oldDiv');
		var parentNode = oldDiv.parentNode;
		parentNode.replaceChild(newDiv, oldDiv);
  }else{
    var oldDiv = document.createElement('div');
		oldDiv.setAttribute('id', 'oldDiv');
		var oldText = document.createTextNode("data2");
		// data2 = "de-ta2";
		oldDiv.appendChild(oldText);
		var newDiv = document.getElementById('newDiv');
		var parentNode = oldDiv.parentNode;
		parentNode.replaceChild(oldDiv, newDiv);
  }
}
