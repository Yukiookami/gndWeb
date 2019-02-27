<template>
  <div id="app">
    <router-view></router-view>
    <gnd-footer></gnd-footer>
  </div>
</template>

<script>
import gndFooter from './components/gndFooter'

export default {
  name: 'App',
  components: {
    gndFooter
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
