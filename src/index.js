import Vue from 'vue'
import VueRouter from 'vue-router';
import Hello from '@/components/Hello.vue';
Vue.use(VueRouter);

var routes = [
  {
      path: '/', component: Hello,
  },
]
var router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

var vue = new Vue({
  router,
  render: function (h) {
      return h('router-view');
  },
}).$mount('#app');