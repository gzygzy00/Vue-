<template>
  <div>
    <h2>这是父组件</h2>
    <span>{{fromSonMsg}}</span>
    <p>父组件中全局状态：{{getNum}}</p>
    <button @click="add">父组件全局状态改变</button>
    <button @click="minus">父组件全局状态改变(action)</button>
    <hr>
    <son :msg="toSonMsg" @handle="getMsgFromSon"></son>
  </div>

</template>

<script>
  import son from './son'

  export default {
    name: "parent",
    data: function () {
      return {
        toSonMsg: '来自父组件，动态的传递给子组件的数据',
        fromSonMsg: ''
      }
    },
    methods: {
      getMsgFromSon: function (value) {
        this.fromSonMsg = value
      },
      add(){
        this.$store.commit('increase')
      },
      minus(){
        this.$store.dispatch('deAction')
      }
    },
    computed: {
      getNum: function () {
        return this.$store.getters.getNum
      }
    },
    components: {
      son
    }
  }
</script>

<style scoped>

</style>
