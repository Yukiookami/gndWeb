<template>
  <div>
    <div :class="{'color-change': changeTypeNum === index}" @click="changeColor()" class="class-button">
      <div>{{className}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['className', 'index', 'changeTypeNum'],
  data () {
    return {
      change: 0
    }
  },
  mounted: function () {

  },
  methods: {
    changeColor: function () {
      this.$emit('changeType', this.index)
    }
  }
}
</script>

<style scoped>
* {
  font-family: 微软雅黑, Arial, sans-serif;
}

.class-button {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: .3rem .8rem;
  margin: 0 1rem;
  border: 1px solid rgba(0, 0, 0, 0);
  color: #999;
  font-size: 1.1rem;
  cursor: pointer;
}

.back {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #999;
  -webkit-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
  -webkit-transform: scaleY(.1);
      -ms-transform: scaleY(.1);
          transform: scaleY(.1);
}

.back-f {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
  cursor: pointer;
  -webkit-transform: scaleY(1);
      -ms-transform: scaleY(1);
          transform: scaleY(1);
}

.back-f:hover {
  -webkit-transform: scaleY(2);
      -ms-transform: scaleY(2);
          transform: scaleY(2);
}

.back-f:hover,
.back-f {
  -webkit-transition: all .25s ease-in-out;
  -o-transition: all .25s ease-in-out;
  transition: all .25s ease-in-out;
}

.change-color {
  color: #FFF;
}

.full {
  -webkit-transform: scaleY(10);
      -ms-transform: scaleY(10);
          transform: scaleY(10);
}

.color-change {
  position: relative;
  border: 1px solid rgba(0, 0, 0, .7);
  color: rgba(0, 0, 0, .7);
}
</style>
