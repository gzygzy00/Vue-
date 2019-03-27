<template>
  <div>
    <h2>这是子组件</h2>
    <button @click="sendMsgToParent">向父组件传递数据</button> <br>
    <p>{{msg}}</p>
    <p>子组件中全局状态：{{getNum}}</p>
    <button @click="add">子组件全局状态改变</button>
    <button @click="minus">子组件全局状态改变(action)</button>
  </div>
</template>

<script>

  export default {
    name: "son",
    props: {
      msg: {
        type: String,
        default: ''
      }
    },
    data: function(){
      return {
        sendMsg: '这里是子组件传给父组件的动态数据'
      }
    },
    methods: {
      sendMsgToParent: function () {
        this.$emit('handle', this.sendMsg)
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
        return this.$store.state.num
      }
    }
  }
</script>

<style scoped>

</style>
