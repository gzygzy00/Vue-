<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>传递参数：{{$route.params.earthMsg}}</h2>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloEarth',
  data () {
    return {
      msg: 'Hello Earth'
    }
  }
}
</script>

<style scoped>
  .hello {
    color: blue;
  }
</style>
