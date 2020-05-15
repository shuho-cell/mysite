console.log("----------------");
const checkClass = document.getElementsByClassName('checkId');
console.log(checkClass);
console.log(checkClass.length);
const checkFunction =()=>{
  for (var i = 0; i < checkClass.length; i++) {
    var rCheck =  document.formName.check[i].checked;
    // console.log(document.formName.check[i].checked);
    console.log(rCheck);
  }
}
// console.log(document.formName.check);
const clickedFunction = ()=>{
  for (var j = 0; j < checkClass.length; j++){
    console.log(checkClass[j]);
    console.log(j);
    checkClass[j].addEventListener('click' , ()=>{
      console.log(j +"番がclickされました");
      console.log(j);
    })
  }
}
const checkCheckBox = ()=>{
  // checkFunction();
  clickedFunction();
  // if (rCheck) {
  //   console.log("-true-");
  //   }else {
  //     console.log("-false-");
  //   }
}
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
