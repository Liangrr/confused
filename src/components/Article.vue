<template>
  <article>
    <h2></h2>
  </article>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {
    this.$axios.post('/article')
  }
}
</script>

<style lang="scss">

</style>
