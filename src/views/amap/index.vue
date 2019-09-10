<template>
  <div class="amap">
    <h1>This is an amap page</h1>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
  </div>
</template>

<style lang="scss">
.amap {
  width: 100%;
  .amap-wrapper {
    width: 500px;
    height: 500px;
  }
}
</style>
