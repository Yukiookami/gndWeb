<template>
  <div class="line">
    <div class="line-x"></div>
    <img src="../assets/X.svg" class="X" alt="">
    <div class="line-x"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.line {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin: 1rem 0 1rem;
}

.line-x {
  height: 1px;
  width: 50px;
  background-color: rgba(102, 102, 102, 0.5);
}

.X {
  height: 10px;
  width: 10px;
  margin: 0 .5rem;
}
</style>
