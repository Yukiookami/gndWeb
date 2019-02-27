<template>
  <div>
    <div @click="showMask()" class="mask">
      <h3 :class="{'clear': content === undefined}">{{title}}</h3>
      <span>{{content}}</span>
    </div>
    <img-mask v-if="img !== undefined" v-on:showMask='showMask' :img='img' :value='value'></img-mask>
  </div>
</template>

<script>
import imgMask from './imgMask'
import $ from 'jquery'

export default {
  // img参数是为了使用子组件imgMask接收
  props: ['title', 'content', 'img'],
  data () {
    return {
      value: false
    }
  },
  methods: {
    showMask () {
      this.value = !this.value
      // 能锁定页面但有页面抖动
      // // 在显示子组件时锁定页面滚动
      // document.documentElement.style.overflow = 'hidden'
      // // 手机版设置这个
      // document.body.style.overflow = 'hidden'
      // 利用jq锁定滚动条,无副作用
      if (this.img !== undefined) {
        $(function () {
          var top = $(document).scrollTop()
          $(document).on('scroll.unable', function (e) {
            $(document).scrollTop(top)
          })
        })
      }
    }
  },
  components: {
    imgMask
  }
}
</script>

<style scoped>
.mask {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #FFF;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(36, 36, 36, 0.6);
  opacity: 0;
  font-size: 1.2rem;
  cursor: pointer;
}

.mask h3 {
  display: block;
  margin-bottom: 2.5rem;
  font-weight: normal;
  font-size: 1.5rem;
}

.mask:hover {
  opacity: 1;
}

.mask:hover.mask::before {
  transform: scaleX(1);
}
.mask:hover.mask::after {
  transform: scaleY(1);
}

.mask,
.mask:hover {
  transition: .3s all ease-in-out
}

.mask::before {
  content: ' ';
  display: block;
  position: absolute;
  top: 40px;
  bottom: 40px;
  right: 20px;
  left: 20px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  transform: scaleX(0);
  transform-origin: 0 100%;
}

.mask::after {
  content: ' ';
  display: block;
  position: absolute;
  bottom: 20px;
  right: 40px;
  left: 40px;
  top: 20px;
  border-left: 1px solid #fff;;
  border-right: 1px solid #fff;
  transform: scaleY(0);
  transform-origin: 0 0;
}

.mask::after,
.mask::before {
  transition: all .4s ease-in-out;
}

.clear {
  margin: 0 !important;
}
</style>
