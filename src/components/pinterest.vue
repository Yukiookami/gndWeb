<template>
  <div class="pinterest-sec">
    <div class="p-item">
      <div v-for="(item, index) in arr" :key="index"
      v-if="index % 3 === 0" class="p-img">
        <pro-box :proImg='item.img' :proTitle='item.name'
         :index='index'></pro-box>
      </div>
    </div>
    <div class="p-item">
      <div v-for="(item, index) in arr" :key="index"
       v-if="(index % 3) - 1 === 0" class="p-img">
        <pro-box :proImg='item.img' :proTitle='item.name'
         :index='index'></pro-box>
      </div>
    </div>
    <div class="p-item">
      <div v-for="(item, index) in arr" :key="index"
       v-if="(index % 3) - 2 === 0" class="p-img">
        <pro-box :proImg='item.img' :proTitle='item.name'
         :index='index'></pro-box>
      </div>
    </div>
  </div>
</template>

<script>
import proBox from './gndProjectItem'

export default {
  props: ['arr'],
  components: {
    proBox
  }
}
</script>

<style scoped>
.pinterest-sec {
  display: flex;
  justify-content: space-between;
}

.p-item {
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 32%;
}
</style>
