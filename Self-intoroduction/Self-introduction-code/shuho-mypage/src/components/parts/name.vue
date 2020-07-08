<template>
<div>
  <label for="name" >お名前</label>
  <input 
      type="text" id="name" 
      :value="value"
      @input="$emit('input', $event.target.value)"
      placeholder="お名前"
      required
      area-autocomplete="name">
      
      <pre>{{value}}</pre>
</div>
</template>
<script>
export default {
  props:["value"]
}
</script>