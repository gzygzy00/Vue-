<template>
  <div class="hello">
    <h2>我是axiosAPP，用来发送请求，拦截响应</h2>
    <button @click="getData">getData发送请求</button>
    <button @click="postData">postData发送请求</button>
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import qs from 'qs'

  Vue.prototype.$http = axios;

  export default {
    name: 'HelloWorld',
    data() {
      return {
        items: []
      }
    },
    methods: {
      getData: function () {
        this.$http.get('https://cnodejs.org/api/v1/topics', {
          params: {
            page: 1,
            limit: 10
          }
        })
          .then(res => {
            this.items = res.data.data
            console.log(res)
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      postData: function () {
        this.$http.post(url, qs.stringify({
          page: 1,
          limit: 10
        }))
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
