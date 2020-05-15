const checkClass = document.getElementsByClassName("checkId");
const checkFunction = () => {
  for (var i = 0; i < checkClass.length; i++) {
    var rCheck = document.formName.check[i].checked;
    // console.log(document.formName.check[i].checked);
  }
};

function attachAddEvent(j) {
    checkClass[j].addEventListener("click", () => {
    const label = j + 1;
    console.log(label + "番がclickされました");
  });
}

// console.log(document.formName.check);
const clickedFunction = () => {
  for (var j = 0; j < checkClass.length; j++) {
    attachAddEvent(j);
  }
};
const checkCheckBox = () => {
  // checkFunction();
  clickedFunction();
  // if (rCheck) {
  //   console.log("-true-");
  //   }else {
  //     console.log("-false-");
  //   }
};
checkCheckBox();

/*
checkId[1].addEventListener('click' , ()=>{
  console.log("clickされました");
})
*/

// if (rCheck) {
// console.log("-true-");
// }else {
//   console.log("-false-");
// }
