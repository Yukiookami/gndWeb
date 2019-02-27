<template>
  <div>
    <gnd-header :selectNum='selectNum'></gnd-header>
    <contact-us class="con" :selectNum='selectNum'></contact-us>
  </div>
</template>

<script>
import gndHeader from './gndHeader'
import contactUs from './contactUs'

export default {
  data () {
    return {
      selectNum: 6
    }
  },
  components: {
    gndHeader,
    contactUs
  }
}
</script>

<style scoped>
.con {
  margin: 15rem auto 14.55rem;
}
</style>
