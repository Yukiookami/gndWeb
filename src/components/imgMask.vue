<template>
  <div>
    <div v-if="img !== undefined" @click="hide()" class="img-mask" :class="{'img-mask-show': value}">
      <div class="img-box" :class="{'show-img-go': value}">
        <img class="show-img" :src="img" alt="">
        <img class="close-img" src="../assets/close.svg">
      </div>
    </div>
    <div v-if="video !== undefined" class="img-mask" :class="{'img-mask-video': value}">
      <div class="video-box" :class="{'show-video-go': value}">
        <video id="videoPlay" class="video" :src="video" controls></video>
        <img class="close-img" @click="hide(),stopVideo()" src="../assets/close.svg">
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  // 从父组件传入需要显示的图片url和控制显影的值 value 还有视频链接地址
  props: ['img', 'value', 'video'],
  data () {
    return {

    }
  },
  methods: {
    hide () {
      this.$emit('showMask')
      // // 恢复页面锁定
      // document.documentElement.style.overflow = 'auto'
      // // 恢复页面锁定手机端
      // document.body.style.overflow = 'auto'
      // 恢复滚动条
      $(function () {
        $(document).unbind('scroll.unable')
      })
    },
    stopVideo () {
      let video = document.getElementById('videoPlay')
      video.pause()
    }
  }
}
</script>

<style scoped>
.img-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .2);
  opacity: 0;
  z-index: -2147483648;
}

.img-mask-show,
.img-mask-video {
  z-index: 2147483646;
  opacity: 1;
}

.img-mask,
.img-mask-show,
.img-mask-video {
  transition: all ease-in-out .3s;
}

.img-mask-video {
  background-color: rgba(0, 0, 0, .6)
}

.show-img {
  max-width: 100%;
}

.img-box,
.video-box,
.show-img-go,
.show-video-go {
  transition: all ease-in-out .3s;
}

.close-img {
  position: absolute;
  right: -.7rem;
  top: -.7rem;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background-color: #fff;
  padding: .5rem;
}

.close-img:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, .2);
}

.close-img,
.close-img:hover {
  transition: all ease-in-out .5s;
}

.img-box {
  position: relative;
  max-width: 35%;
  transform: translateY(-100px);
}

.video-box {
  transform: translateY(-100px);
  z-index: 2147483647;
}

.show-img-go,
.show-video-go {
  transform: translateY(0)
}
</style>
