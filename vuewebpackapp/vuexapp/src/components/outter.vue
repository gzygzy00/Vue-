<template>
  <div>
    <p>outter组件中全局状态：{{getOutterNum}}</p>
    <button @click="add">outter组件全局状态改变</button>
    <button @click="minus">outter组件全局状态改变(action)</button>
  </div>
</template>

<script>
  export default {
    name: "outter",
    methods: {
      add(){
        this.$store.commit('increase')
      },
      minus(){
        this.$store.dispatch('deAction')
      }
    },
    computed: {
      getOutterNum: function () {
        return this.$store.state.num
      }
    }
  }

</script>

<style scoped>

</style>
