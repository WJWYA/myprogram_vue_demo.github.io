import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入 Element_ui
import ElementUI from 'element-ui'
// 导入 Element-ui 样式
import 'element-ui/lib/theme-chalk/index.css'
// 插件 Element-ui
Vue.use(ElementUI)

//导入路由
import VueRouter from 'vue-router'
//use一下
Vue.use(VueRouter)
// 创建路由
const router = new VueRouter({
  // routes: [
  //     {//举个例子，若路由地址为····/test,则调用组件名为test的组件
  //     path:'/test', //路由地址
  //     component: test //组件名称

  //     },
  // ]
})
new Vue({
  render: h => h(App),
   // 挂载到Vue示例上
   router
}).$mount('#app')
