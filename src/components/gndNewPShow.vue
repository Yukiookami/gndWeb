<template>
  <div class="project-mask">
    <div class="text-sec">
      <span class="mask-title">{{title}}</span>
      <span class="mask-text" v-html="content"></span>
    </div>
    <img :src="img" alt="" class="img-back">
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
.project-mask {
  overflow: hidden;
  position: relative;
  width: 33%;
  height: 30rem;
  background-color: rgba(77,124,142,0.7);
  cursor: pointer;
}

.project-mask::before,
.project-mask::after {
  content: '';
  position: absolute;
  display: block;
  top: 8%;
  left: 8%;
  width: 80%;
  height: 82%;
  transition: all ease-in-out .5s;
}

.project-mask::after {
  transform: scale(1, 0);
  border-left: #fff solid 1px;
  border-right: #fff solid 1px;
}

.project-mask::before {
  transform: scale(0, 1);
  border-top: #fff solid 1px;
  border-bottom: #fff solid 1px;
}

.project-mask:hover.project-mask::after,
.project-mask:hover.project-mask::before {
  transform: scale(1, 1)
}

.img-back {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

.mask-title {
  display: block;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #fff;
  transform: translateY(-1.5rem);
}

.mask-text {
  font-size: .8rem;
  color: #fff;
  transform: translateY(2rem);
  opacity: 0;
}

.mask-title,
.mask-text {
  transition: all ease-in-out .3s;
}

.project-mask:hover .mask-text,
.project-mask:hover .mask-title {
  transform: translateY(0);
  opacity: 1;
}

.text-sec {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 13% auto 0;
  width: 60%;
}
</style>
