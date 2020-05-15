function replace() {
	
	var rCheck = document.formElement.check.checked;
	var rCheck2 = document.formElement.check2.checked;
	var rCheck3 = document.formElement.check3.checked;

  if(rCheck) {
    var newDiv = document.createElement('div');
		newDiv.setAttribute('id', 'newDiv');
		var newText = document.createTextNode("data1");
		// data1 = "新しいノード";
		newDiv.appendChild(newText);
		var oldDiv = document.getElementById('oldDiv');
		console.log(oldDiv);
		var parentNode = oldDiv.parentNode;
		console.log('------------------------------');
		console.log(parentNode);
		parentNode.replaceChild(newDiv, oldDiv);
  }else{
    var oldDiv = document.createElement('div');
		oldDiv.setAttribute('id', 'oldDiv');
		var oldText = document.createTextNode("data2");
		// data2 = "de-ta2";
		oldDiv.appendChild(oldText);
		var newDiv = document.getElementById('newDiv');
		var parentNode = document.getElementById('inputLabel');
		console.log(oldDiv);
		console.log(parentNode);
		console.log('------------------------------');
		console.log(oldDiv);
		console.log(newDiv);
		console.log('------------------------------');
		parentNode.replaceChild(oldDiv, newDiv);
	}
	if(rCheck2) {
    var newDiv = document.createElement('div');
		newDiv.setAttribute('id', 'newDiv');
		var newText = document.createTextNode("2-data1");
		// data1 = "新しいノード";
		newDiv.appendChild(newText);
		var oldDiv2 = document.getElementById('oldDiv2');
		console.log(oldDiv2);
		var parentNode2 = oldDiv2.parentNode;
		console.log('------------------------------')
		console.log(parentNode2);
		parentNode2.replaceChild(newDiv, oldDiv2);
  }else{
    var oldDiv2 = document.createElement('div');
		oldDiv2.setAttribute('id', 'oldDiv2');
		var oldText = document.createTextNode("data2");
		// data2 = "de-ta2";
		oldDiv2.appendChild(oldText);
		var newDiv = document.getElementById('newDiv');
		var parentNode2 = document.getElementById('inputLabel2');
		console.log(oldDiv2);
		console.log(parentNode2);
		parentNode2.replaceChild(oldDiv2, newDiv);
	}
	if(rCheck3) {
    var newDiv = document.createElement('div');
		newDiv.setAttribute('id', 'newDiv');
		var newText = document.createTextNode("data1");
		// data1 = "新しいノード";
		newDiv.appendChild(newText);
		var oldDiv3 = document.getElementById('oldDiv3');
		console.log(oldDiv3);
		var parentNode = oldDiv3.parentNode;
		console.log('------------------------------')
		console.log(parentNode);
		parentNode.replaceChild(newDiv, oldDiv3);
  }else{
    var oldDiv3 = document.createElement('div');
		oldDiv3.setAttribute('id', 'oldDiv');
		var oldText = document.createTextNode("data2");
		// data2 = "de-ta2";
		oldDiv3.appendChild(oldText);
		var newDiv = document.getElementById('newDiv');
		var parentNode3 = document.getElementById('inputLabel');
		console.log(oldDiv3);
		console.log(parentNode3);
		parentNode3.replaceChild(oldDiv3, newDiv);
	}
}
