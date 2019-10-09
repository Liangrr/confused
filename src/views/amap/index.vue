<template>
  <div class="amap">
    <head-top></head-top>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
  </div>
</template>

<script>
import headTop from '@/components/headTop'
export default {
  components: {
    headTop
  }
}
</script>

<style lang="scss">
.amap {
  width: 100%;
  .amap-wrapper {
    width: 500px;
    height: 500px;
  }
}
</style>
