console.log("=================");
const checkClass = document.getElementsByClassName("checkClass");
const check = document.getElementsByName('check');
const divClass = document.getElementsByClassName('divClass');
console.log(checkClass);
console.log(check);
console.log(divClass);


rCheck1 = checkClass[0].checked;
rCheck2 = checkClass[1].checked;
rCheck3 = checkClass[2].checked;
rCheck4 = checkClass[3].checked;


checkClass[0].addEventListener('change', ()=> {
  if(rCheck1){
    console.log('-1-true-');
  }else{
    console.log('--1-false--');
  }
});