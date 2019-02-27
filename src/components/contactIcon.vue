<template>
  <div @mousedown="change(index)" @mouseup="change(index)"
  @mouseover="hoverChange(index)" @mouseout="hoverChange(-1)"
  @click="showV()"
   class="icon-box" :class="{'text-box': text !== undefined,
   'text-color': color !== undefined && text !== undefined,
   'icon-color': color !== undefined && text === undefined,
   'big': size === 1}">
    <div class="hide-mask"
    :class="{'show-mask': show && index === selectN,
    'hover-mask': hoverN === index && color === undefined,
    'hover-mask-color-2': hoverN === index && color === 2,
    'hover-mask-color': hoverN === index && color === 1,
    'hide-text': text !== undefined && color === undefined}"></div>
    <img v-if="img !== undefined" class="icon-img" :src="imgR" alt="">
    <span v-if="text !== undefined" class="icon-text"
    :class="{'show-text': show && index === selectN && color === undefined && text !== undefined,
    'show-text-color': show && index === selectN && color !== undefined && text !== undefined}">{{text}}</span>
  </div>
</template>

<script>
export default {
  // 原显示图标与覆盖图标
  props: ['img', 'imgF', 'index', 'text', 'color', 'size'],
  data () {
    return {
      imgR: '',
      show: false,
      selectN: '',
      hoverN: ''
    }
  },
  mounted () {
    this.imgR = this.img
  },
  methods: {
    change (index) {
      this.show = !this.show
      this.selectN = index
      if (this.imgR === this.img) {
        this.imgR = this.imgF
      } else {
        this.imgR = this.img
      }
    },
    hoverChange (index) {
      this.hoverN = index
    },
    // showMask 不收录到组件代码 特殊需要添加的
    showV () {
      this.$emit('showMask')
    }
  }
}
</script>

<style scoped>
.icon-box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, .3);
  height: 40px;
  width: 40px;
  cursor: pointer;
}

.icon-color {
  border: 1px solid #FFF;
}

.text-box {
  font-size: 1rem;
  padding: .2rem .5rem;
  border: 1px solid #FFF;
  height: auto;
  width: auto;
  z-index: 999;
}

.icon-box img {
  display: block;
  height: 23px;
  width: 23px;
  z-index: 999;
}

.big {
  height: 60px;
  width: 60px;
}

.big img {
  height: 30px;
  width: 30px;
}

.hide-mask {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
  height: 100%;
  width: 100%;
  transform: scaleY(0);
  transform-origin: 100% 100%;
  z-index: 10;
}

.hide-text {
  background-color: #FFF;
  transform-origin: 105% 105%;
}

.hover-mask {
  transform: scaleY(.1);
}

.hover-mask-color,
.hover-mask-color-2 {
  transform: scaleY(.1);
  background-color: #FFF;
}

.hover-mask-color-2 {
  background-color: rgba(0, 0, 0, .3);
}

.show-mask {
  transform: scaleY(1);
}

.show-text {
  color: rgba(0, 0, 0, .5);
  z-index: 99999;
}

.hover-mask,
.hide-mask,
.show-mask,
.hover-mask-color,
.icon-box img {
  transition: all .13s ease-in-out;
}

.text-color {
  border: 1px solid rgba(0, 0, 0, .3);
}

.show-text-color {
  z-index: 99999;
  color: #FFF;
}
</style>
