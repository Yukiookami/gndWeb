<template>
  <div>
    <gnd-header :selectNum='selectNum'></gnd-header>
    <section class="class-button-sec">
      <class-button v-on:changeType='changeType' :className='item.name' :index='index'
      v-for="(item, index) in newClass" :changeTypeNum='changeTypeNumL'
      :key="index"></class-button>
    </section>
    <div class="pro-box">
      <pro-box v-for="(item, index) in expList" :key="index"
      :proImg='item.img' :proTitle='item.name' :proContent='item.content'
       :index='index'></pro-box>
    </div>
  </div>
</template>

<script>
import gndHeader from './gndHeader'
import classButton from './classButton'
import proBox from './gndNewsBox'

export default {
  data () {
    return {
      selectNum: 3,
      changeTypeNum: 0,
      changeTypeNumL: 0,
      newClass: [
        {
          name: 'All'
        },
        {
          name: '杂志'
        },
        {
          name: '著作'
        }
      ],
      expList: [
        {
          img: 'http://www.gnd.hk/images/gnd/media/2017.1.jpg',
          name: '2017年1月刊',
          content: '择色而居'
        },
        {
          img: 'http://www.gnd.hk/images/gnd/media/2017.1.jpg',
          name: '2017年1月刊',
          content: '择色而居'
        },
        {
          img: 'http://www.gnd.hk/images/gnd/media/2017.1.jpg',
          name: '2017年1月刊',
          content: '择色而居'
        },
        {
          img: 'http://www.gnd.hk/images/gnd/media/2017.1.jpg',
          name: '2017年1月刊',
          content: '择色而居'
        },
        {
          img: 'http://www.gnd.hk/images/gnd/media/2017.1.jpg',
          name: '2017年1月刊',
          content: '择色而居'
        },
        {
          img: 'http://www.gnd.hk/images/gnd/media/2017.1.jpg',
          name: '2017年1月刊',
          content: '择色而居'
        },
        {
          img: 'http://www.gnd.hk/images/gnd/media/2017.1.jpg',
          name: '2017年1月刊',
          content: '择色而居'
        },
        {
          img: 'http://www.gnd.hk/images/gnd/media/2017.1.jpg',
          name: '2017年1月刊',
          content: '择色而居'
        }
      ]
    }
  },
  methods: {
    changeType: function (type) {
      // 更改新闻类型按钮样式
      this.changeTypeNum = type
      sessionStorage.setItem('changeTypeNum', this.changeTypeNum)
      this.changeTypeNumL = parseInt(sessionStorage.getItem('changeTypeNum'))
      // // 获得当前类型新闻
      // this.$http.get('http://47.107.163.62:8089/news/getNewsInfoByTypeId?typeid=' + (type + 1))
      //   .then((res) => {
      //     this.expList = res.data.data
      //   })
    }
  },
  components: {
    gndHeader,
    classButton,
    proBox
  }
}
</script>

<style scoped>
.class-button-sec {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin: 10rem auto 2rem;
  width: 75%;
}

.pro-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin: 0 auto;
  width: 68%;
}
</style>
