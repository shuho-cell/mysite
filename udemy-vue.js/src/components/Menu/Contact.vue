<template>
  <div>
    <form>
      <name v-model="ContactData.name"></name>
      <!-- <input 
      type="text" id="name" 
      v-model="ContactData.name"
      placeholder="お名前"
      required
      area-autocomplete="name"> -->
      

      <label for="email">メールアドレス</label>
      <input 
      type="email" id="email" 
      v-model.lazy="ContactData.email"
      placeholder="e-mail"
      required
      area-autocomplete="email">
      <p>{{ContactData.email}}</p>

      <label for="TextAreaMessage"></label>
      <textarea 
      id="TextAreaMessage" cols="30" rows="10"
      v-model="ContactData.TextAreaMessage"></textarea>
      <p style="white-space: pre-line;">{{ ContactData.TextAreaMessage }}</p>
      <!-- 内容の確認 -->
      <template>
        <p>{{ContactData.name}}</p>
        <p>{{ContactData.email}}</p>
        <p style="white-space: pre-line;">{{ ContactData.TextAreaMessage }}</p>
      </template>
      
      <!-- ここから送信ボタン -->
      <button type="submit">送信</button>
    </form>

  </div>
</template>
<script>
import name from "./details/name"
// アラートメッセージ
// window.addEventListener("beforeunload", function(e) {
//   var confirmationMessage = "入力内容を破棄します。";
//   e.returnValue = confirmationMessage;
//   return confirmationMessage;
// });
// アラートメッセージ
export default {
  data(){
    return{
      ContactData:{
        name: "",
        email: "",
        TextAreaMessage: "",
      }
    }
  },
  components:{
    name,
  }
}
</script>