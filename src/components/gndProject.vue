<template>
  <div>
    <gnd-header :selectNum='selectNum'></gnd-header>
    <div class="content-sec">
      <div class="gnd-new" v-if="gndTitle !== ''">
        <span>{{gndNew}}</span>
        <line-f></line-f>
        <h3>{{gndTitle}}</h3>
        <div v-html="gndContent" class="content-box"></div>
        <contact-icon :text='more' :color='2'></contact-icon>
      </div>
      <div class="video-box" v-if="gndVideo !== ''"
      :style="{backgroundImage: 'url(' + videoBack + ')'}">
        <contact-icon v-on:showMask='showMask' :img='playImg' :imgF='playImgSelect'
        :color='1' :size='1'></contact-icon>
        <img-mask v-on:showMask='showMask' :video='gndVideo' :value='value'></img-mask>
      </div>
      <div class="rua">
        <h3>{{pTitle}}</h3>
        <span>{{pContent}}</span>
      </div>
      <section class="class-button-sec">
        <class-button v-on:changeType='changeType' :className='item.name' :index='index'
        v-for="(item, index) in newClass" :changeTypeNum='changeTypeNumL'
        :key="index"></class-button>
      </section>
      <div class="pub-sec">
        <pubterest :arr='expList'></pubterest>
      </div>
    </div>
  </div>
</template>

<script>
import lineF from './lineF'
import gndHeader from './gndHeader'
import contactIcon from './contactIcon'
import imgMask from './imgMask'
import classButton from './classButton'
import pubterest from './pinterest'
import $ from 'jquery'

export default {
  data () {
    return {
      selectNum: 2,
      gndNew: 'GND最新力作',
      gndTitle: '天玑公馆',
      value: false,
      changeTypeNum: 0,
      changeTypeNumL: 0,
      pTitle: '软装项目精选',
      pContent: '作品涵盖了售楼处设计、会所设计、样板间设计',
      videoBack: 'http://www.gnd.hk/images/GND_R_show_r/GND_R_22/3.jpg',
      gndVideo: 'http://www.gnd.hk/administrator/Video/video_one.mp4',
      playImgSelect: require('../assets/play-select.svg'),
      playImg: require('../assets/play.svg'),
      gndContent: `天玑，是北斗七星的第三颗星，尊为禄存星，主理天上人间的财富，折射着人们心中的向往与尊崇。星球在时间长河里，循着特定的轨迹在宇宙间不停旋转，绘制着璀璨的星河。天玑公馆落址于繁华时尚的深圳龙华，汇集了众多的科技创新人才的新区，GND担当该售楼中心的软装设计。<br><br>

设计师宁睿希望在这年轻人的聚居之地，用设计构筑他们所向往的城市人居生活。空间各处充盈着时尚的现代艺术观感，她引入静谧又浩瀚无垠的宇宙星辰，试图唤醒他们在熙熙攘攘的时代潮流中、在日常的奔波劳碌之余，永远收藏着的温暖又光明的梦想，燃起他们仰望星空的诗心，用星际的璨丽光芒点缀生活。她创造性地将宇宙的斗转星移幻化入空间之中，在音乐的律动下，“星球”上下移动，起伏回旋。急剧的运动感与节奏的相结合，舒缓的旋律与轻柔的摆动相互契合中，动感活泼的韵律美悄然而生。在特定的角度与时间点，“星球”运转，在不断排列组合中，呈现出天玑公馆logo。四周仿佛是寂静无边的黑夜，“星球”上砂砾与肌理的质感，在灯光下闪烁着浪漫的气息。细砂在底部的圈圈圆圆，像是星河的轨迹，神秘曼妙。空间于此，是赋予感知的艺术品。当观者的目光在室内序列空间游移时，一场震撼的视听盛宴化作触感，犹如置身在静寥玄妙的宇宙星河中，大气舒展，浪漫柔雅。`,
      more: '了解更多',
      newClass: [
        {
          name: 'All'
        },
        {
          name: '会所'
        },
        {
          name: '售楼处'
        }
      ],
      expList: [
        {
          img: 'http://www.gnd.hk/images/GND_R_show_r/GND_R_22/1.jpg',
          name: '1'
        },
        {
          img: 'http://www.gnd.hk/images/GND_R_show_r/GND_R_0/R_0_s/1-1.jpg',
          name: '2'
        },
        {
          img: 'http://www.gnd.hk/images/GND_R_show_r/GND_R_1/R_1_s/1-1.jpg',
          name: '3'
        },
        {
          img: 'http://www.gnd.hk/images/GND_R_show/R_12/01-9798.jpg',
          name: '4'
        },
        {
          img: 'http://www.gnd.hk/images/GND_R_show_r/GND_R_5/R_5_2.0/4-1.jpg',
          name: '5'
        },
        {
          img: 'http://www.gnd.hk/images/GND_R_show_r/GND_R_5/R_5_2.0/4-1.jpg',
          name: '6'
        },
        {
          img: 'http://www.gnd.hk/images/GND_R_show_r/GND_R_5/R_5_2.0/4-1.jpg',
          name: '7'
        },
        {
          img: 'http://www.gnd.hk/images/GND_R_show_r/GND_R_5/R_5_2.0/4-1.jpg',
          name: '8'
        },
        {
          img: 'http://www.gnd.hk/images/GND_R_show_r/GND_R_22/1.jpg',
          name: '1'
        },
        {
          img: 'http://www.gnd.hk/images/GND_R_show_r/GND_R_0/R_0_s/1-1.jpg',
          name: '2'
        },
        {
          img: 'http://www.gnd.hk/images/GND_R_show_r/GND_R_5/R_5_2.0/4-1.jpg',
          name: '3'
        },
        {
          img: 'http://www.gnd.hk/images/GND_R_show_r/GND_R_5/R_5_2.0/4-1.jpg',
          name: '4'
        }
      ]
    }
  },
  methods: {
    showMask () {
      this.value = !this.value
      $(function () {
        var top = $(document).scrollTop()
        $(document).on('scroll.unable', function (e) {
          $(document).scrollTop(top)
        })
      })
    },
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
    lineF,
    gndHeader,
    contactIcon,
    imgMask,
    classButton,
    pubterest
  }
}
</script>

<style scoped>
* {
  font-family: 微软雅黑, Arial, sans-serif;
  font-size: 1.1rem;
}

.content-sec {
  margin-top: 10rem;
}

.gnd-new {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15rem auto 2rem;
  width: 100%;
}

.gnd-new h3 {
  font-size: 2rem;
  font-weight: normal;
}

.gnd-new span {
  font-size: 1.5rem;
  color: rgba(102, 102, 102, 0.5);
  letter-spacing: .1rem;
}

.content-box {
  font-size: 14px;
  line-height: 1.7rem;
  width: 48.5%;
  color: #7f7f7f;
  margin: 2rem auto;
  text-align: center;
}

.video-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  width: 100%;
  height: 30rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}

.rua {
  text-align: center;
  margin: 5rem auto 2rem;
}

.rua h3 {
  margin-bottom: .5rem;
  font-size: 2rem;
  font-weight: normal;
}

.rua span {
  font-size: 1.4rem;
}

.class-button-sec {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin: 2rem auto;
  width: 75%;
}

.pub-sec {
  width: 63%;
  margin: 3rem auto;
}
</style>
