<template>
  <div class="header" :class="{'header-change': check === 1,
  'header-fix': selectNum !== 0, 'head-fixed': selectNum !== 0}">
    <div>
      <img class="logo" src="../assets/logo1.png" alt="">
    </div>
    <nav>
      <router-link v-for="(item, index) in pageList"
      :key="index" :to="item.goTo"
      :class="{'select-a': selectNum === index}">
        <span @mouseover="showMaskFun(index)"  @mouseout="hideShowMask(index)">
          {{item.pageName}}
        </span>
      </router-link>
    </nav>
    <div class="find-box">
      <img @click="showInput()" class="find" src="../assets/find.svg" alt="">
      <input :class="{'find-input-show': show}" class="find-input" type="text">
    </div>
    <div class="project-mask" :class="{'mask-change': check === 1,
    'project-mask-show': showMask}">
      <div class="triangle"></div>
      <div class="project-item-box" @mouseleave="hideMask()">
        <span v-for="(item, index) in projectList" :key="index"
        class="project-item" @click="changeColor(index)"
        :class="{'select-item': select === index}">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['selectNum'],
  data () {
    return {
      show: false,
      showMask: false,
      showMaskNum: -1,
      hideMaskNum: -1,
      check: 0,
      select: 0,
      pageList: [
        {
          pageName: '首页',
          goTo: '/'
        },
        {
          pageName: '关于我们',
          goTo: '/gndAbout'
        },
        {
          pageName: '项目精选',
          goTo: '/gndProject'
        },
        {
          pageName: '媒体之声',
          goTo: '/gndVideo'
        },
        {
          pageName: '新闻资讯',
          goTo: ''
        },
        {
          pageName: '招贤纳士',
          goTo: '/gndJoinUs'
        },
        {
          pageName: '联系我们',
          goTo: '/gndContactUs'
        }
      ],
      projectList: [
        {
          name: 'GND软装设计'
        },
        {
          name: 'GND景观设计'
        },
        {
          name: 'GND室内设计'
        }
      ]
    }
  },
  mounted: function () {
    var that = this
    // // 初始化nav选定
    // if (isNaN(parseInt(sessionStorage.getItem('selectNum')))) {
    //   sessionStorage.setItem('selectNum', 0)
    // }
    // this.selectNumL = parseInt(sessionStorage.getItem('selectNum'))
    // 判断页面是否在顶端是否固定header
    if (this.selectNum === 0) {
      window.onscroll = function () {
        if (document.body.scrollTop === 0 &&
        document.documentElement.scrollTop <= window.innerHeight) {
          that.check = 0
        } else {
          that.check = 1
        }
      }
    }
  },
  methods: {
    // /**
    //  * 更改nav选定
    //  * @param {Number} index
    //  */
    // change: function (index) {
    //   this.selectNum = index
    //   sessionStorage.setItem('selectNum', this.selectNum)
    //   this.selectNumL = parseInt(sessionStorage.getItem('selectNum'))
    // },
    /**
     * 显示搜索框
     */
    showInput: function () {
      this.show = !this.show
    },
    changeColor (index) {
      this.select = index
    },
    showMaskFun (index) {
      this.showMaskNum = index
      if (this.showMaskNum === 2) {
        this.showMask = true
      }
    },
    hideShowMask (index) {
      this.hideMaskNum = index
      if (this.hideMaskNum !== 2) {
        this.showMask = false
      }
    },
    hideMask () {
      this.showMask = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*:focus {
  outline: none;
}

.header {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10rem;
  z-index: 999;
  background-color: #fff;
}

.head-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.header-fix {
  position: absolute;
}

.header-change {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 6rem;
  transition: all ease-in-out .35s
}

.header {
  transition: all ease-in-out .2s
}

.logo {
  width: 95px;
}

.find {
  width: 25px;
  margin-right: .5rem;
  cursor: pointer;
}

.find-input {
  width: 0;
  border: none;
  color: #999;
  transform: scaleX(0);
}

.find-input-show {
  width: 9rem;
  transform: scaleX(1);
}

.find-input,
.find-input-show {
  transition: all ease-in-out .5s;
  transform-origin: 100% 100%;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 35%;
  font-size: 18px;
}

.select-a {
  color: rgba(0, 0, 0, .65);
}

.find-box {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 10rem;
}

nav a {
  font-family:'Microsoft YaHei';
  text-decoration: none;
  color: #999;
}

input::-webkit-input-placeholder{
    color:#999;
}
input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#999;
}
input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#999;
}
input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    color:#999;
}

.project-mask {
  position: absolute;
  display: flex;
  opacity: 0;
  transform: translateY(2rem);
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 9.4rem;
  left: 36%;
  z-index: -2147483648;
}

.project-mask-show {
  opacity: 1;
  transform: translateY(0);
  z-index: 999;
}

.triangle {
  height: 0;
  width: 0;
  border-width: 0 8px 10px 8px;
  border-style: solid;
  border-color: transparent transparent #222;
}

.project-item-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 14rem;
  padding: 1rem 2rem;
  background-color: #222;
}

.project-item {
  color: #999;
  display: block;
  margin: 1rem 0;
  cursor: pointer;
  font-size: 1.1rem !important;
}

.project-item:hover {
  color: #FFF;
}

.project-item,
.project-item:hover {
  transition: all ease-in-out .4s;
}

.mask-change {
  top: 5.4rem;
}

.mask-change,
.project-mask {
  transition: all ease-in-out .1s
}

.select-item {
  color: #FFF;
}

@media screen and (max-width: 1500px) {
  nav {
    width: 50%
  }

  .project-mask {
    left: 31%;
  }
}
</style>
