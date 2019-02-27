<template>
  <div @mouseover="change(index)" @mouseout="changeOver()" class="pro-item">
    <router-link to="#">
      <div class="hide-text" :class="{'hide-text-show': index === changeNum}">
        <h3>{{proTitle}}</h3>
        <span>{{proContent}}</span>
        <icon :text='buttonText'></icon>
      </div>
      <img class="img" :class="{'img-pro': index === changeNum}" :src="proImg" alt="">
    </router-link>
  </div>
</template>

<script>
import icon from './contactIcon'

export default {
  props: ['proImg', 'proTitle', 'proContent', 'proUrl', 'index'],
  data () {
    return {
      changeNum: '',
      buttonText: '详细内容'
    }
  },
  methods: {
    change (index) {
      this.changeNum = index
    },
    changeOver () {
      this.changeNum = -1
    }
  },
  components: {
    icon
  }
}
</script>

<style scoped>
.pro-item {
  position: relative;
  overflow: hidden;
  margin: 1rem 0;
  width: 23%;
}

.pro-item img {
  width: 100%;
}

.hide-text {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, .5);
  color: #FFF;
  opacity: 0;
  font-family: 微软雅黑, Arial, sans-serif;
  z-index: 999;
}

.hide-text h3 {
  display: block;
  font-size: 1.5rem;
  letter-spacing: .1rem;
  font-weight: normal;
}

.hide-text span {
  display: block;
  margin: .5rem 0 1.5rem;
  font-size: 1.3rem;
}

.hide-text-show {
  opacity: 1;
  z-index: 999;
}

.img-pro {
  transform: scale(1.1, 1.1);
  z-index: -1;
}

.hide-text,
.hide-text-show,
.img-pro,
.img  {
  -webkit-transition: .3s all ease-in-out;
  -o-transition: .3s all ease-in-out;
  transition: .3s all ease-in-out;
}

@media screen and (max-width: 1200px) {
  .pro-item {
    width: 47%;
  }
}

@media screen and (max-width: 700px) {
  .pro-item {
    width: 100%;
  }
}
</style>
