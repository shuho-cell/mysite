<template>
  <div>
    <h3>slot1の勉強</h3>
    <slot name="title"></slot>
    <slot name="title"></slot>
    <slot name="footer"></slot>
    <slot :user="user">
      {{user.username}}
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user:{
        username: "jack",
        username2: "queen",
        username3: "king"
      }
    }
  }
}
</script>