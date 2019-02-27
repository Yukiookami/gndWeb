<template>
  <div class="home">
    <gnd-header :selectNum="selectNum"></gnd-header>
    <gnd-silde class="slide" :imgList='imgList'></gnd-silde>
    <div class="in-main">
      <gnd-home-introduce v-for="(item, index) in inList" :key="index" :title='item.title'
      :content='item.content' :titleM='item.titleM' :pos='item.pos'
      :contentM='item.contentM' :titleB="item.titleB" :contentB='item.contentB'
      :imgM='item.imgM' :imgB='item.imgB'></gnd-home-introduce>
    </div>
    <div class="line-home"></div>
    <div class="ex-sec">
      <div class="text-box">
        <span class="ex-title">{{exTitle}}</span>
        <line-f></line-f>
        <h3 class="ex-con">{{exCon}}</h3>
      </div>
      <div class="ex-box-sec">
        <gnd-home-ex v-for="(item, index) in exList" :key="index"
        :img='item.img' :content='item.content' :title="item.title"></gnd-home-ex>
      </div>
    </div>
    <div class="maker-sec">
      <div class="text-box">
        <span class="ex-title">{{markerTitle}}</span>
        <line-f></line-f>
        <div class="maker-box">
          <gnd-maker v-for="(item, index) in makerList" :key="index"
          :title='item.makerTitle' :content='item.makerContent' :index='index'
          :img='item.makerImg' v-on:changeShow='changeShow(index)'
          :show='show'></gnd-maker>
        </div>
      </div>
    </div>
    <div class="maker-sec">
      <div class="text-box">
        <span class="ex-title">{{contentTitle}}</span>
        <line-f></line-f>
        <contact-us :selectNum="selectNum"></contact-us>
      </div>
    </div>
  </div>
</template>

<script>
import gndSilde from './gndSlide'
import gndHomeIntroduce from './gndHomeIntroduce'
import lineF from './lineF'
import gndHomeEx from './gndHomeEx'
import contactUs from './contactUs'
import gndMaker from './gndMaker'
import gndHeader from './gndHeader'

export default {
  data () {
    return {
      selectNum: 0,
      imgList: [
        {
          slide: require('../assets/testSilde/60082303_p0.png')
        },
        {
          slide: require('../assets/testSilde/60207370_p0.png')
        },
        {
          slide: require('../assets/testSilde/64035231_p0.png')
        },
        {
          slide: require('../assets/testSilde/64265540_p0.png')
        }
      ],
      inList: [
        {
          title: 'GND景观设计',
          content: '主营业务开发商展示区景观，景观标准化定制，全周期景观规划',
          imgM: 'http://www.gnd.hk/images/G_W_show_r/GND_W_0/2.jpg',
          titleM: '浪漫奢华',
          contentM: '欧式风格',
          imgB: 'http://www.gnd.hk/images/new/jingguan/920.jpeg',
          titleB: '浪漫奢华',
          contentB: '欧式风格',
          pos: 'left'
        },
        {
          title: 'GND景观设计',
          content: '主营业务开发商展示区景观，景观标准化定制，全周期景观规划',
          imgM: 'http://www.gnd.hk/images/G_W_show_r/GND_W_0/2.jpg',
          titleM: '浪漫奢华',
          contentM: '欧式风格',
          imgB: 'http://www.gnd.hk/images/new/jingguan/920.jpeg',
          titleB: '浪漫奢华',
          contentB: '欧式风格',
          pos: 'right'
        }
      ],
      exList: [
        {
          title: '室内产品研发',
          content: '设计师运用物质技术手段和建筑设计原理,创造既具有使用价值，满足相应的功能要求，同时也反映了历史文脉、建筑风格、环境气 氛等精神因素',
          img: 'http://www.gnd.hk/images/675.jpg'
        },
        {
          title: '室内产品研发',
          content: 'GND结合一线开发商超过60个主流住宅产品的调研，形成了一套严谨的产品逻辑和设计思路。 根据不同地产商的产品类型与开发需求，结合设计，成本，营销，工程，物业能不同的部门的联动，能够最大化的保证不同产品类型的有效系列化和高品质高效率落地',
          img: 'http://www.gnd.hk/images/675.jpg'
        },
        {
          title: '室内产品研发',
          content: '设计师运用物质技术手段和建筑设计原理,创造既具有使用价值，满足相应的功能要求，同时也反映了历史文脉、建筑风格、环境气 氛等精神因素',
          img: 'http://www.gnd.hk/images/675.jpg'
        }
      ],
      makerList: [
        {
          makerTitle: 'GND景观设计 创始人丘戈',
          makerContent: `GND景观设计 项目总监/董事<br>
曾在万科深圳地产公司主持参与超过40个项目<br>
跨行业设计经验丰富，带领公司景观产品创新与研发`,
          makerImg: 'http://www.gnd.hk/images/new/810.jpg'
        },
        {
          makerTitle: 'GND景观设计 创始人李冰',
          makerContent: `GND景观设计 项目总监/联合创始人<br>
美国ASLA景观学会会员,14年完成了多项项目设计<br>
设计风格纯粹朴素`,
          makerImg: 'http://www.gnd.hk/images/new/502.jpg'
        },
        {
          makerTitle: 'GND软装设计 创始人 宁睿',
          makerContent: `GND软装设计 设计总监/董事<br>
深圳市室内设计协会理事、 深圳市陈设艺术协会理事<br>
前深圳万科地产室内设计部负责人`,
          makerImg: 'http://www.gnd.hk/images/new/101.jpg'
        },
        {
          makerTitle: 'GND景观设计 创始人钟永成',
          makerContent: `GND景观设计 设计总监/联合创始人<br>
美国ASLA景观学会会员，ASLA注册景观建筑师<br>
拥有15年设计经验，擅长豪华住宅与奢侈酒店景观设计
`,
          makerImg: 'http://www.gnd.hk/images/new/910.jpg'
        }
      ],
      exTitle: '公司特色',
      exCon: '标准化设计施工',
      markerTitle: 'GND全体主创',
      contentTitle: '联系我们 ',
      // 控制gndMaker组件
      show: 0
    }
  },
  methods: {
    changeShow (index) {
      this.show = index
    }
  },
  components: {
    gndSilde,
    gndHomeIntroduce,
    lineF,
    gndHomeEx,
    contactUs,
    gndMaker,
    gndHeader
  }
}
</script>

<style scoped>
* {
  font-family: 微软雅黑, Arial, sans-serif
}

.home {
  margin-top: 6rem;
}

.slide {
  height: 948px;
}

.in-main {
  width: 63%;
  margin: 4rem auto;
}

.line-home {
  width: 100%;
  height: 30rem;
  background-image: url('../assets/back-home.jpg');
  background-size: 100%;
}

.ex-title {
  color: rgb(180, 180, 180);
  font-weight: normal;
  font-size: 1.4rem;
}

.ex-con {
  font-size: 2rem;
  font-weight: normal;
}

.text-box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}

.ex-sec {
  padding: 8rem 0;
  background-color: rgba(0, 0, 0, .02);
}

.maker-sec {
  padding: 4rem 0;
}

.ex-box-sec {
  width: 63%;
  margin: 4rem auto 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.maker-box {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 63%;
}
</style>
