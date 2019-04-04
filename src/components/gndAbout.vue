<template>
  <div class="home">
    <gnd-header :selectNum="selectNum"></gnd-header>
    <gnd-slide class="slide" :imgList='imgList'></gnd-slide>
    <div>
      <div class="k-box">
        <h3 class="title-k">{{titleK}}</h3>
        <line-f></line-f>
        <span class="content-k">{{contentK}}</span>
      </div>
      <div class="text-k-sec">
        <div class="text-k-l" v-html="textL"></div>
        <div class="text-k-r" v-html="textR"></div>
      </div>
    </div>
    <div class="img-k">
      <div v-for="(item, index) in imgListK" :key="index" class="img-k-x">
        <img :src="item.img" alt="">
        <gnd-mask :title="item.title"></gnd-mask>
      </div>
    </div>
    <!-- <div class="con-box">
      <contact-us :selectNum="selectNum"></contact-us>
    </div> -->
    <div class="hezuo">
      <h3 class="title-h">{{titleH}}</h3>
      <span class="content-h">{{contentH}}</span>
      <img :src="contentImg" alt="">
    </div>
    <img class="map" src="http://www.gnd.hk/images/map_6.jpg" alt="">
  </div>
</template>

<script>
import gndHeader from './gndHeader'
import gndSlide from './gndSlide'
import lineF from './lineF'
import gndMask from './gndMask'
import contactUs from './contactUs'

export default {
  data () {
    return {
      selectNum: 1,
      titleK: '公司背景',
      contentK: 'GND DESIGN LIMITED设计集团',
      titleH: '合作单位',
      contentImg: require('../assets/hezuo.png'),
      contentH: '与国内知名设计战略供应商、著名房地产商战略合作',
      textL: `公司简介<br><br>
GND DESIGN LIMITED 设计集团旗下由室内设计、软装设计、景观设计三大品牌构成。GND设计集团秉承全球化设计定位，近百人的专业设计团队服务具有卓越追求的地产商及政府部门，提供景观设计、室内设计、软装设计服务，设计产业类型包含:开发商展示区策划、售楼处与会所、高端住宅地产、住宅产业标准化、城市综合体、教育机构、星级酒店和精品酒店等，致力于实现品质化人居生活。
<br><br>
主营业务<br><br>
开发商展示区景观、室内、软装全方位设计，住宅及酒店室内设计，精装修标准化定制，软装设计及实践，景观标准化定制，全周期景观策划。
<br><br>
公司使命<br><br>
做城市人居环境筑梦者与先行者
<br><br>
品牌愿景<br><br>
做一个受人尊敬的设计公司`,
      textR: `经营范围<br><br>
我们主要服务对象为政府部门及对品质有卓越追求的地产商。针对不同客户，公司以严谨的设计逻辑及专业整合能力协助他们确定产品的具体定位，在成本可控的前提下，最大程度满足客户的需求。同时，公司会根据客户的不同情况定制适合他们的标准化体系，协助其建立完善的室内及景观的设计项目与运营标准。并针对展示区样板房打造私人订制的产品方案，实现用户商家双赢最大化。
<br><br>
服务优势<br><br>
● 通过整合景观、室内、软装全方位设计，提供开发商展示区策划，包含展示区流线策划、呈现符合项目定位和调性设计。<br>
● 售楼处与会所、高端住宅地产、城市综合体、教育机构、星级酒店和精品酒店等景观、室内及软装一体化设计。<br>
● 住宅产业标准化，我们根据客户的不同情况，制定标准化体系，协助其建立或完善室内及景观设计的设计管理及运营标准。<br>
品牌价值观<br><br>
秉承全球化设计定位 实现品质化人居生活`,
      imgList: [
        {
          slide: 'http://www.gnd.hk/images/gnd/about/about01.jpg'
        },
        {
          slide: 'http://www.gnd.hk/images/gnd/about/about02.jpg'
        },
        {
          slide: 'http://www.gnd.hk/images/gnd/about/about03.jpg'
        }
      ],
      imgListK: [
        {
          img: 'http://www.gnd.hk/images/gnd/about/team-01.jpg',
          title: 'Office areas '
        },
        {
          img: 'http://www.gnd.hk/images/gnd/about/team-02.jpg',
          title: 'Office areas '
        },
        {
          img: 'http://www.gnd.hk/images/gnd/about/team-03.jpg',
          title: 'Office areas '
        },
        {
          img: 'http://www.gnd.hk/images/gnd/about/team-04.jpg',
          title: 'Office areas '
        },
        {
          img: 'http://www.gnd.hk/images/gnd/about/team-05.jpg',
          title: 'Office areas '
        }
      ]
    }
  },
  components: {
    gndHeader,
    gndSlide,
    lineF,
    gndMask,
    contactUs
  }
}
</script>

<style scoped>
* {
  font-family: 微软雅黑, Arial, sans-serif
}

.slide {
  margin-top: 10rem;
  height: 600px;
}

.title-k {
  font-size: 1.5rem;
  font-weight: normal;
  color: rgba(102, 102, 102, 0.5);
}

.k-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 6rem auto 2rem;
}

.content-k {
  font-size: 2rem;
  color: rgba(0, 0, 0, .7);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  letter-spacing: .15rem;
}

.img-k {
  display: flex;
  margin: 3rem 0;
  line-height: 0;
}

.img-k-x {
  position: relative;
  width: 20%;
}

.img-k-x img {
  width: 100%;
}

.con-box {
  position: relative;
  margin: 4rem 0 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.hezuo {
  padding: 5rem 0;
  width: 100%;
  text-align: center;
  background-color: #fafafa;
}

.title-h {
  font-weight: normal;
  font-size: 2.2rem;
  margin: .5rem 0;
}

.content-h {
  display: block;
  margin-bottom: 2rem;
  font-size: 1.4rem;
  letter-spacing: .1rem;
}

.map {
  width: 100%;
}

.text-k-sec {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  width: 63%;
  font-size: 1.3rem;
  font-family: 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif;
}

.text-k-l {
  padding-right: 2rem;
}

.text-k-r {
  padding-left: 2rem;
}
</style>
