<template>
  <div>
    <gnd-header :selectNum='selectNum'></gnd-header>
    <div class="join-title">
      <h3>{{joinT}}</h3>
      <span>{{joinC}}</span>
    </div>
    <section class="class-button-sec">
      <class-button v-on:changeType='changeType' :className='item.name' :index='index'
      v-for="(item, index) in newClass" :changeTypeNum='changeTypeNumL'
      :key="index"></class-button>
    </section>
    <div class="join-box">
      <div class="join-content" v-html="content"></div>
      <div class="join-img">
        <img :src="joinImg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import gndHeader from './gndHeader'
import classButton from './classButton'

export default {
  data () {
    return {
      selectNum: 5,
      changeTypeNum: 0,
      changeTypeNumL: 0,
      content: `GND软装<br>
● 软装设计师 招聘人数：2人<br>
1、本科及以上学历，室内设计、环境艺术、装饰艺术设计或美术类相关专业毕业。<br>
2、熟悉软装流程及市场，具备独立完成项目的设计、采购、摆场等能力，能带领和指导新人。<br>
3、具备较强的沟通及理解能力，善于分析项目及设计风格定位，善于控制成本和预算 。<br>
4、对时尚、艺术敏感，有较强的审美及操控能力 。<br>
5、有使自己沉溺其中的兴趣和爱好，热爱生活并懂得生活者优先考虑。热爱运动。<br>
<br>
● 软装设计助理 招聘人数：3人<br>
1、大专及以上学历，室内设计、环境艺术、装饰艺术设计或美术类相关专业毕业。<br>
2、有软装设计公司实习经历。（能力优秀可放宽）<br>
3、了解软装设计流程及市场，能协助设计师完成设计效果呈现及落地。<br>
4、对时尚、艺术敏感，有较强的审美能力。<br>
5、熟练操作CAD、PHOTOSHOP、PPT等各种制图软件，及EXCEL等办公软件。<br>
6、有使自己沉溺其中的兴趣和爱好，热爱运动，热爱生活并懂得生活者优先考虑。<br>`,
      joinImg: 'http://www.gnd.hk/images/GND_R_show/R_0_r/10.jpg',
      newClass: [
        {
          name: 'GND软装'
        },
        {
          name: 'GND景观设计'
        },
        {
          name: 'GND室内设计'
        }
      ],
      joinT: 'GND招贤纳士',
      joinC: '宽松的工作环境、充满激情的设计工作，期待富于挑战的你!'
    }
  },
  components: {
    gndHeader,
    classButton
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
  }
}
</script>

<style scoped>
* {
  font-family: 微软雅黑, Arial, sans-serif;
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

.join-title {
  padding-top: 5rem;
  text-align: center;
  margin-top: 8rem;
}

.join-title h3 {
  font-size: 2rem;
  margin: 1.5rem;
  font-weight: normal;
}

.join-title span {
  font-size: 1.6rem;
}

.join-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin: 0 auto 5rem;
  font-size: 1.2rem;
  line-height: 2rem;
}

.join-img img {
  width: 100%;
}

.join-img {
  width: 50%;
  line-height: 0;
}

.join-content {
  width: 45%;
}

.join-img img,
.join-content {
  transition: all ease-in-out .3s;
}
</style>
