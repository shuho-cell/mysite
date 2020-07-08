<template>
  <div>
    <h1>～Contact～</h1>
    <form>
      <div>
        <label for="name">お名前</label>
        <input
          type="text"
          id="name"
          v-model="ContactData.name"
          placeholder="お名前"
          required
          area-autocomplete="name"
        />
      </div>
      <div>
        <label for="email">メールアドレス</label>
        <input
          type="email"
          id="email"
          v-model.lazy="ContactData.email"
          placeholder="e-mail"
          required
          area-autocomplete="email"
        />
      </div>
      <div>
        <label for="TextAreaMessage"></label>
        <textarea
          id="TextAreaMessage"
          cols="30"
          rows="10"
          v-model="ContactData.TextAreaMessage"
        ></textarea>
      </div>
    </form>
  </div>
</template>
<script>
// import name from "../../parts/name";
export default {
  data() {
    return {
      ContactData: {
        name: "",
        email: "",
        TextAreaMessage: "",
      },
    };
  },
  // components: {
  //   name,
  // },
};
</script>
