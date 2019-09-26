<template>
  <div>
    <input
      type="text"
      v-model="text"
      v-debounce="search"
    >
  </div>
</template>
<script>
export default {
  name: 'debounce',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text: '',
      count: 1
    }
  },
  directives: {
    debounce: {
      inserted: function (el, binding) {
        // console.log('el', el, binding)
        let timer
        el.addEventListener('keyup', () => {
          if (timer) {
            clearTimeout(timer)
          }
          timer = setTimeout(() => {
            binding.value()
          }, 300)
        })
      }
    }
  },
  methods: {
    search () {
      // 实际要进行的操作 axios.get('')之类的
      // this.count++
      // console.log('count is:' + this.count)
      this.$fun.throttle(this.scrollHander)
    },
    scrollHander (arg) {
      console.log(`${arg}--被执行了111`)
    }
  },
  created () {
    // console.log('this.$fun', this.$fun.shuffle([1, 2, 3, 4, 5]))
    // console.log('this.$fun', this.$fun.throttle(this.scrollHander))

  }
}
</script>
