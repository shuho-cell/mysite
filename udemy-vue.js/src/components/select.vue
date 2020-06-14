<template>
  <div>
    <select v-model="eventData.location" multiple>
      <option v-for="location in locations" :key="location">
        {{location}}
      </option>
    </select>
    <p>
        {{eventData.location}}
      </p>
  </div>
</template>
<script>
export default {
  data(){
    return{
      locations:["愛知","東京", "神奈川", "埼玉"],
      eventData: {
        location: [],
      }
    };
  }
}
</script>