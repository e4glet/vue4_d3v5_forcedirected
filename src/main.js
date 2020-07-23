
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/**
 * 引入axios，并将axios注入到vue
 */
import './service'

/**
 * 引入全局序列号Qs * 
 */
import Qs from 'qs';
Vue.prototype.$qs = Qs;

Vue.config.productionTip = false
router.beforeEach(function (to, from, next) {
  
  var user = localStorage.getItem("Authorization");
    
  if(user!=null||to.path==='/login'){
    next();    
  }
  else { 

    if (user === null || user === '') {
      next('/login');
    } 
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
