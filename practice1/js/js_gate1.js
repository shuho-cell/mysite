console.log("-----------------");
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
  console.log("クリックされました");
});

const form = document.forms.myForm;
const error = document.getElementById('error');
form.btn1.addEventListener('click', function(event){
  if(!form.mail.validity.valid){
    event.preventDefault();
    error.innerHTML = 'メールアドレスが正しくありません';
  }
})

