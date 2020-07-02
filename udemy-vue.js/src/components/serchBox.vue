<template>
  <div>
    <input type="text" v-model="keyword" />
    <table>
      <tr v-for="user in users" :key="user">
        <td v-text="user.id"></td>
        <td v-text="user.name"></td>
        <td v-text="user.email"></td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      users: [
        { keyword: "" },
        {
          id: 1,
          name: "shuho",
          message: "hello",
        },
        {
          id: 2,
          name: "maiku",
          message: "maiku",
        },
        {
          id: 3,
          name: "mario",
          message: "mario",
        },
      ],
    };
  },
};
</script>
