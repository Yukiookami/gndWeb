<template>
  <!-- <div id="slideBox">
    尺寸1900
    原轮播图代码
    <div class="slide-list">
      <img v-for="(item,imgIndex) in imgList" :key="imgIndex"
      :class="{'show-img': imgIndex === mark}" :src="item.slide" alt=""
      @mousemove="clearTime" @mouseout="goTime">
      <div class="dot-box">
        <span v-for="(item,dotIndex) in imgList" @click="changeTime(dotIndex)"
        @mousedown="changeShow(dotIndex)" @mouseup="changeShow(dotIndex)"
        :key="dotIndex" :class="{'select': dotIndex === mark}">
          <div :class="{'back-mask-show': show && Bgmark === dotIndex}" class="back-mask"></div>
        </span>
      </div>
    </div>
  </div> -->
  <div class="homeMask">
    <video autoplay muted class="video-back" loop
    src="http://www.gnd.hk/administrator/Video/video_one.mp4"></video>
    <div v-for="(item, index) in imgList" :key="index"
    class="text-slide" :class="{'show-text': textNum === index}">
      <span class="slide-title">{{item.slideTitle}}</span>
      <span class="slide-text">{{item.slideText}}</span>
    </div>
    <div class="icon-mask">
      <span class="dot" :class="{'dot-move': dotMove}"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imgList'],
  data () {
    return {
      textNum: 0,
      timeSet: '',
      dotTimeSet: '',
      dotMove: false,
      dotTimeSetRemove: ''
      // 原轮播图代码
      // mark: 0,
      // timeSet: '',
      // show: false,
      // dotIndex: ''
    }
  },
  mounted () {
    const that = this
    that.timeSet = setInterval(() => {
      if (that.textNum >= that.imgList.length - 1) {
        that.textNum = 0
      } else {
        that.textNum++
      }
    }, 6000)
    that.dotTimeSet = setInterval(() => {
      that.dotMove = true
      that.dotTimeSetRemove = setTimeout(() => {
        that.dotMove = false
      }, 1500)
    }, 2000)
    // 原轮播图代码
    // var that = this
    // that.timeSet = setInterval(function () {
    //   if (that.mark >= that.imgList.length - 1) {
    //     that.mark = 0
    //   } else {
    //     that.mark++
    //   }
    // }, 4000)
  },
  methods: {
  //   原轮播图代码
  //   clearTime: function () {
  //     clearInterval(this.timeSet)
  //   },
  //   goTime: function () {
  //     var _this = this
  //     this.timeSet = setInterval(function () {
  //       if (_this.mark >= _this.imgList.length - 1) {
  //         _this.mark = 0
  //       } else {
  //         _this.mark++
  //       }
  //     }, 4000)
  //   },
  //   changeTime: function (dotIndex) {
  //     this.mark = dotIndex
  //     var _this = this
  //     clearInterval(this.timeSet)
  //     this.timeSet = setInterval(function () {
  //       if (_this.mark >= _this.imgList.length - 1) {
  //         _this.mark = 0
  //       } else {
  //         _this.mark++
  //       }
  //     }, 4000)
  //   },
  //   changeShow: function (dotIndex) {
  //     this.Bgmark = dotIndex
  //     this.show = !this.show
  //   }
  }
}
</script>

<style scoped>
.homeMask {
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 10rem;
  height: 100vh;
  width: 100vw;
  background: rgba(77,124,142,0.7);
}

.text-slide {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  width: 60%;
  align-items: center;
  text-align: center;
  color: #fff;
  opacity: 0;
}

.slide-title {
  font-size: 2rem;
  font-weight: bold;
  line-height: 3rem;
}

.slide-text {
  font-size: 1.5rem;
}

.show-text {
  opacity: 1;
}

.show-text,
.text-slide {
  transition: all ease-in-out 1s;
}

.icon-mask {
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  padding: .5rem 0;
  bottom: 2rem;
  height: 3.5rem;
  width: 2rem;
  border: #fff solid 2px;
  border-radius: 15px;
  cursor: pointer;
}

.dot {
  display: block;
  background-color: #fff;
  height: .5rem;
  width: .5rem;
  border-radius: 50%;
}

.dot-move {
  transform: translateY(1.5rem);
  opacity: 0;
}

.dot-move {
  transition: all ease-in-out 1s;
}

.video-back {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -1;
}

/* 原轮播图代码 */
  /* #slideBox {
    overflow: hidden;
    position: relative;
    width: 100%;
    max-height: 948px;
  }

  .slide-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }

  .slide-list img {
    position: absolute;
    width: 100%;
    opacity: 0;
  }

  .dot-box {
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    bottom: 1rem;
  }

  .dot-box span {
    overflow: hidden;
    margin: 0 .5rem;
    height: 1.1rem;
    width: 1.1rem;
    border-radius: 50%;
    border: 1.5px solid #999;
    cursor: pointer;
  }

  .back-mask {
    height: .8rem;
    width: .8rem;
    background-color: #FFF;
    transform: scaleY(0);
  }

  .back-mask-show {
    transform: scaleY(1);
  }

  .back-mask,
  .back-mask-show {
    transition: all .1s ease-in-out;
    transform-origin: 100% 100%;
  }

  .show-img {
    opacity: 1 !important;
  }

  .slide-list img,
  .show-img {
    -webkit-transition: 1s all ease-in-out;
    -o-transition: 1s all ease-in-out;
    transition: 1s all ease-in-out;
  }

  .select,
  .dot-box span,
  .dot-box span:hover {
    transition: all .2s ease-in-out
  }

  .select,
  .dot-box span:hover {
    border: 2px solid #FFF !important;
  }

  .text-pos-box {
    text-align: center;
    position: absolute;
    color: #FFF;
    bottom: 8%;
    z-index: 2147483645;
    font-size: 3rem;
    font-family: SimHei;
  }

  .text-pos-box>:last-child {
    font-family: broadway;
    font-size: 6rem;
    font-weight: bold;
  }

  @media screen and (max-width: 1900px) {
    #slideBox {
      max-height: 848px;
    }
  }

  @media screen and (max-width: 1580px) {
    #slideBox {
      max-height: 748px;
    }
  }

  @media screen and (max-width: 1500px) {
    #slideBox {
      max-height: 648px;
    }
  }

  @media screen and (max-width: 1320px) {
    #slideBox {
      max-height: 548px;
    }

    .text-pos-box {
      font-size: 1.5rem;
    }

    .text-pos-box>:last-child  {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 1060px) {
    #slideBox {
      max-height: 348px;
    }

    .text-pos-box {
      font-size: 1rem;
      bottom: 15%;
    }

    .text-pos-box>:last-child  {
      font-size: 2rem;
    }

    .dot-box span {
      width: .5rem;
      height: .5rem;
    }
  }

  @media screen and (max-width: 750px) {
    #slideBox {
      max-height: 248px;
    }
  }

  @media screen and (max-width: 400px) {
    #slideBox {
      max-height: 200px;
    }

    .text-pos-box {
      font-size: .75rem;
      bottom: 15%;
    }

    .text-pos-box>:last-child  {
      font-size: 1.5rem;
    }
  } */
</style>
