import router from 'vue-router'
import Vue from "vue";
import HelloWorld from "../components/HelloWorld";
import HelloEarth from "../components/HelloEarth"

Vue.use(router)
// 配置路由
export default new router({
  routes: [{
    name: 'HelloWorld',
    // 指定要跳转的路径
    path: '/HelloWorld/:worldMsg',
    // 指定要跳转的组件
    component: HelloWorld
  },
    {
      name: 'HelloEarth',
      path: '/HelloEarth/:earthMsg',
      component: HelloEarth
    }]
})
