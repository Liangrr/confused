<script>
export default {
  filters: {
    filterTime (para) {
      if (para) {
        return para.substr(0, 10)
      }
    }
  }
}
</script>
