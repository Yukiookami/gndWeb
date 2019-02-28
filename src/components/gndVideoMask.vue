<template>
  <div class="homeMask">
    <video autoplay muted class="video-back" loop
    src="http://www.gnd.hk/administrator/Video/video_one.mp4"></video>
    <div v-for="(item, index) in imgList" :key="index"
    class="text-slide" :class="{'show-text': textNum === index}">
      <span class="slide-title">{{item.slideTitle}}</span>
      <span class="slide-text">{{item.slideText}}</span>
    </div>
    <div class="icon-mask">
      <span class="dot" :class="{'dot-move': dotMove}"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imgList'],
  data () {
    return {
      textNum: 0,
      timeSet: '',
      dotTimeSet: '',
      dotMove: false,
      dotTimeSetRemove: ''
    }
  },
  mounted () {
    const that = this
    that.timeSet = setInterval(() => {
      if (that.textNum >= that.imgList.length - 1) {
        that.textNum = 0
      } else {
        that.textNum++
      }
    }, 6000)
    that.dotTimeSet = setInterval(() => {
      that.dotMove = true
      that.dotTimeSetRemove = setTimeout(() => {
        that.dotMove = false
      }, 1500)
    }, 2000)
  },
  methods: {

  }
}
</script>

<style scoped>
.homeMask {
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 10rem;
  height: 100vh;
  width: 100vw;
  background: rgba(77,124,142,0.7);
}

.text-slide {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  width: 60%;
  align-items: center;
  text-align: center;
  color: #fff;
  opacity: 0;
}

.slide-title {
  font-size: 2rem;
  font-weight: bold;
  line-height: 3rem;
}

.slide-text {
  font-size: 1.5rem;
}

.show-text {
  opacity: 1;
}

.show-text,
.text-slide {
  transition: all ease-in-out 1s;
}

.icon-mask {
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  padding: .5rem 0;
  bottom: 2rem;
  height: 3.5rem;
  width: 2rem;
  border: #fff solid 2px;
  border-radius: 15px;
  cursor: pointer;
}

.dot {
  display: block;
  background-color: #fff;
  height: .5rem;
  width: .5rem;
  border-radius: 50%;
}

.dot-move {
  transform: translateY(1.5rem);
  opacity: 0;
}

.dot-move {
  transition: all ease-in-out 1s;
}

.video-back {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -1;
}
</style>
