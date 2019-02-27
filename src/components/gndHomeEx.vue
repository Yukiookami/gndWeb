<template>
  <div class="ex-box">
    <img :src="img" alt="">
    <h3>{{title}}</h3>
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  props: ['title', 'content', 'img'],
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.ex-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 31%;
}

.ex-box img {
  width: 100%
}

.ex-box h3 {
  display: block;
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: normal;
  font-family: 微软雅黑, Arial, sans-serif;
}

.ex-box div {
  font-family: 微软雅黑, Arial, sans-serif;
  font-size: 1.1rem;
  text-align: center;
}
</style>
