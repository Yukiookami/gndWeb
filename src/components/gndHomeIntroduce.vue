<template>
  <div class="in-box">
    <div v-if="!(index % 2)" class="img-mask">
      <img class="imgB" :src="imgB" alt="">
      <gnd-mask :title="titleB" :img='imgB' :content='contentB'></gnd-mask>
    </div>
    <div class="text-main">
      <div class="text-box">
        <h3 class="inTitle">
          {{title}}
        </h3>
        <line-f></line-f>
        <div class="content" v-html="content"></div>
      </div>
      <div class="img-mask">
        <img class="imgM" :src="imgM" alt="">
        <gnd-mask :title='titleM' :img='imgM' :content='contentM'></gnd-mask>
      </div>
    </div>
    <div v-if="index % 2" class="img-mask">
      <img class="imgB" :src="imgB" alt="">
      <gnd-mask :title="titleB" :img='imgB' :content='contentB'></gnd-mask>
    </div>
  </div>
</template>

<script>
import gndMask from './gndMask'
import lineF from './lineF'

export default {
  props: ['title', 'imgM', 'imgB', 'content', 'titleM', 'titleB',
    'contentM', 'contentB', 'index'],
  data () {
    return {

    }
  },
  components: {
    gndMask,
    lineF
  }
}
</script>

<style scoped>
.in-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  width: 100%;
  margin: 3rem 0;
}

.inTitle {
  color: #666;
  font-size: 23px;
  letter-spacing: 2px;
  position: relative;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: normal;
  padding: 0;
  margin: 0;
}

.content {
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #666;
  font-size: 20px;
  letter-spacing: 2px;
}

.text-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 750px;
}

.text-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  justify-content: center;
  width: 580px;
  height: 318px;
}

.imgB {
  display: block;
  height: 750px;
  width: 580px;
  margin: 0 auto;
}

.imgM {
  height: 432px;
  width: 580px;
}

.left {
  margin-right: 3rem;
}

.right {
  margin-left: 3rem;
}

/* 遮罩效果代码 */
.img-mask {
  position: relative;
  line-height: 0;
}
</style>
