<template>
  <div class="maker-box">
    <div class="maker-text"
    :class="{'maker-text-show': show === index,
    'maker-text-hide-left': show > index,
    'maker-text-hide-right': show < index}">
      <h3>{{title}}</h3>
      <div v-html="content"></div>
    </div>
    <img @click="showImg()" class="maker-img"
    :class="{'maker-img-show': show === index}" :src="img" alt="">
  </div>
</template>

<script>
export default {
  // show控制图片与文字显隐
  props: ['title', 'content', 'img', 'index', 'show'],
  methods: {
    showImg () {
      this.$emit('changeShow')
    }
  }
}
</script>

<style scoped>
* {
  font-family: 微软雅黑, Arial, sans-serif;
  font-size: 1.1rem;
}

h3 {
  font-size: 1.4rem;
  display: block;
  margin-bottom: .5rem;
  font-weight: normal;
}

.maker-text {
  position: absolute;
  top: 6rem;
  right: 39%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  opacity: 0;
}

.maker-text-show-left,
.maker-text-show-right,
.maker-text-show {
  opacity: 1;
}

.maker-text-show-right,
.maker-text-hide-right {
  transform: translateX(50rem);
}

.maker-text-show-left,
.maker-text-hide-left {
  transform: translateX(-50rem);
}

.maker-text-show {
  transform: translateX(0rem);
}

.maker-text div {
  text-align: center;
}

.maker-box {
  display: flex;
  justify-content: flex-start;
  padding-top: 12rem;
  align-items: center;
  flex-direction: column;
  width: 23%;
}

.maker-img {
  width: 100%;
  cursor: pointer;
  filter: opacity(40%);
}

.maker-img:hover {
  filter: opacity(100%);
}

.maker-img,
.maker-img:hover {
  transition: all ease-in-out .3s;
}

.maker-text,
.maker-text-show {
  transition: all ease-in-out .25s;
}

.maker-img-show {
  filter: opacity(100%);
}
</style>
