<template>
  <div class="contact-us">
    <div class="contact-box">
      <h3>{{adsTitle}}</h3>
      <div v-html="ads"></div>
    </div>
    <div class="contact-box">
      <h3>{{workTitle}}</h3>
      <div v-html="work"></div>
    </div>
    <div class="contact-box multimedia">
      <h3>{{contactTitle}}</h3>
      <span>{{contactP}}</span>
      <span>{{contactC}}</span>
      <span>Email {{contactE}}</span>
    </div>
    <div v-if="selectNum === 0" class="contact-box">
      <h3>{{mapTitle}}</h3>
      <img :src="map" class="gnd-map" alt="">
    </div>
    <div v-if="selectNum !== 0" class="contact-box">
      <h3>{{lenlakuTitle}}</h3>
      <div class="icon-box">
        <contact-icon v-for="(item, index) in iconList" :key="index"
        :img='item.img' :imgF='item.imgF' :index='index'></contact-icon>
      </div>
    </div>
  </div>
</template>

<script>
import contactIcon from './contactIcon'
import {getAPI} from '../assets/js/API.js'

export default {
  props: ['selectNum'],
  data () {
    return {
      adsTitle: '地址',
      ads: '',
      workTitle: '办公时间',
      work: '周一 - 周五 上午9：00 - 下午5：00',
      contactTitle: '联系我们',
      contactP: '0755-23485888',
      contactC: '0755-82777520',
      contactE: 'GND@gnd.hk',
      mapTitle: '地图',
      map: 'http://www.gnd.hk/images/map_4.jpg',
      lenlakuTitle: '即时软件',
      iconList: [
        {
          img: require('../assets/icon/web-Facebook.svg'),
          imgF: require('../assets/icon/web-Facebook-x.svg')
        },
        {
          img: require('../assets/icon/T.svg'),
          imgF: require('../assets/icon/T-x.svg')
        },
        {
          img: require('../assets/icon/pinterest.svg'),
          imgF: require('../assets/icon/pinterest-x.svg')
        },
        {
          img: require('../assets/icon/gg.svg'),
          imgF: require('../assets/icon/gg-x.svg')
        },
        {
          img: require('../assets/icon/instagram.svg'),
          imgF: require('../assets/icon/instagram-x.svg')
        }
      ]
    }
  },
  mounted () {
    this.$http.get(`${getAPI()}/company/getCompanyContactInfo`).then(res => {
      let getData = res.data.data
      this.ads = getData.address
      this.contactE = getData.email
      this.contactC = getData.fax
      this.contactP = getData.phone
    })
  },
  components: {
    contactIcon
  }
}
</script>

<style scoped>
* {
  font-family: 微软雅黑, Arial, sans-serif;
  font-size: 1rem;
  line-height: 2.5rem;
}

h3 {
  display: block;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: normal;
}

.contact-us {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 63%;
}

.contact-box {
  width: 23%;
}

.gnd-map {
  width: 100%;
}

.multimedia {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.icon-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
