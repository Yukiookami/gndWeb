<template>
  <div class="home">
    <gnd-silde class="slide" :imgList='imgList'></gnd-silde>
    <gnd-header :selectNum="selectNum"></gnd-header>
    <div class="in-main">
      <gnd-home-introduce v-for="(item, index) in inList" :key="index" :title='item.name'
      :content='item.content' :titleM='item.indexProject1' :index='index'
      :contentM='item.contentM' :titleB="item.indexProject2" :contentB='item.contentB'
      :imgM='item.indexProjectImage1' :imgB='item.indexProjectImage2'></gnd-home-introduce>
    </div>
    <div class="line-home"></div>
    <div class="ex-sec">
      <div class="text-box">
        <span class="ex-title">{{exTitle}}</span>
        <line-f></line-f>
        <h3 class="ex-con">{{exCon}}</h3>
      </div>
      <div class="project-sec">
        <gnd-new-p-show v-for="(item, index) in pShowList" :key="index"
        :title="item.title" :content="item.content" :img="item.img"></gnd-new-p-show>
      </div>
      <!-- <div class="ex-box-sec">
        <gnd-home-ex v-for="(item, index) in exList" :key="index"
        :img='item.img' :content='item.content' :title="item.title"></gnd-home-ex>
      </div> -->
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
import gndSilde from './gndVideoMask'
import gndHomeIntroduce from './gndHomeIntroduce'
import lineF from './lineF'
import gndHomeEx from './gndHomeEx'
import contactUs from './contactUs'
import gndMaker from './gndMaker'
import gndHeader from './gndHeader'
import gndNewPShow from './gndNewPShow'
import {getAPI} from '../assets/js/API.js'

export default {
  data () {
    return {
      selectNum: 0,
      imgList: [
        {
          slideTitle: 'BIG PICTURE PURPOSE',
          slideText: 'DISCOVERING THE HOLISTIC VALUE OF THE LAND AND CREATING MEANINGFUL EXPERIENCES AROUND IT',
          slide: require('../assets/testSilde/60082303_p0.png')
        },
        {
          slideTitle: 'DESIGNS THAT WORK',
          slideText: 'SOLVING PROBLEMS, OVERCOMING OBSTACLES AND CRAFTING ALTERNATIVES WHERE THERE APPEAR TO BE NONE',
          slide: require('../assets/testSilde/60207370_p0.png')
        },
        {
          slideTitle: 'CO-AUTHORS IN THE STORY OF PLACE',
          slideText: 'HARNESSING COLLECTIVE INNOVATION AND PIONEERING VIEWPOINTS TO ACHIEVE VALUE-BASED, FUNCTIONAL DESIGN',
          slide: require('../assets/testSilde/64035231_p0.png')
        }
      ],
      inList: [],
      pShowList: [
        {
          title: 'PLANNING',
          content: `Planning is a dynamic process of discovery. It entails translating our client's vision into an implementable strategy, providing a framework in which alternatives are evaluated, capacity is determined, feasibility is tested, and a course is set.
<br>
Site Selection<br>
Site Analysis<br>
Visioning Workshops<br>
Land Use Program/Feasibility Studies<br>
Site Specific Plans<br>
Design Guidelines<br>
Entitlements`,
          img: 'https://www.edsaplan.com/wp-content/uploads/2018/02/Planning-1-e1517790225506.jpg'
        },
        {
          title: 'LANDSCAPE ARCHITECTURE',
          content: `Exceptional design balances the past, present, and future. Our designs capture the spirit, culture, and existing environment of each locale, providing a foundation for memorable experiences.
<br>
Site Design<br>
Concept /Theming<br>
Design Development<br>
Hardscape/Water Feature Design<br>
Planting Design<br>
Construction Documents<br>
Construction Period Services`,
          img: 'https://www.edsaplan.com/wp-content/uploads/2018/02/Castiglion-del-Bosco-210_LandscapArchitecture-e1517793210776.jpg'
        },
        {
          title: 'URBAN DESIGN',
          content: `Through careful planning and analysis, our urban projects provide optimal benefits to the surrounding community while addressing the complexities and intricate relationships that tie our cities together.
<br>
Downtown Planning<br>
Mixed-Use Neighborhoods<br>
Open Space Design<br>
Public Participation / Consensus Building<br>
Retail Environments<br>
Streetscapes<br>
Transit Oriented Design<br>
Urban Parks and Plazas<br>
Vision Plans<br>
Waterfront Revitalization`,
          img: 'https://www.edsaplan.com/wp-content/uploads/2018/02/Al-Maryah-Central_UrbanDesign-e1517793178309.jpg'
        }
      ],
      exList: [
        {
          title: '室内产品研发1',
          content: '设计师运用物质技术手段和建筑设计原理,创造既具有使用价值，满足相应的功能要求，同时也反映了历史文脉、建筑风格、环境气 氛等精神因素',
          img: 'http://www.gnd.hk/images/675.jpg'
        },
        {
          title: '室内产品研发2',
          content: 'GND结合一线开发商超过60个主流住宅产品的调研，形成了一套严谨的产品逻辑和设计思路。 根据不同地产商的产品类型与开发需求，结合设计，成本，营销，工程，物业能不同的部门的联动，能够最大化的保证不同产品类型的有效系列化和高品质高效率落地',
          img: 'http://www.gnd.hk/images/675.jpg'
        },
        {
          title: '室内产品研发3',
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
      exCon: '项目精选',
      markerTitle: 'GND全体主创',
      contentTitle: '联系我们 ',
      // 控制gndMaker组件
      show: 0
    }
  },
  mounted () {
    this.$http.get(`${getAPI()}/department/getIndexDepartment`).then(res => {
      let getData = res.data.data
      this.inList = getData
    })

    function sortRandom (a, b) {
      return Math.random() > 0.5 ? 1 : -1
    }
    this.inList.sort(sortRandom)
    this.exList.sort(sortRandom)
    this.makerList.sort(sortRandom)
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
    gndHeader,
    gndNewPShow
  }
}
</script>

<style scoped>
* {
  font-family: 微软雅黑, Arial, sans-serif
}

/* .home {
  margin-top: 6rem;
} */

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

.project-sec {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}

@media screen and (max-width: 1500px) {
  .in-main {
    width: 85%;
  }
}
</style>
