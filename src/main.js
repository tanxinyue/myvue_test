// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入国际化组件
import VueI18 from 'vue-i18n'

Vue.config.productionTip = false
Vue.use(VueI18)
const i18n=new VueI18({
  // 默认语言包
  locale:'cn',
  // 导入语言包
  messages:{
    'cn':require('./lang/cn'),
    'en':require('./lang/en'),
  }
})


require('!style-loader!css-loader!./assets/bootstrap/css/bootstrap.css');
require('!style-loader!css-loader!./assets/bootstrap/css/style.css');
require('!style-loader!css-loader!./assets/index.css');

/*引入axios*/
import Axios from 'axios'
Vue.prototype.axios = Axios;

// Axios.defaults.withCredentials = true;

import QS from 'qs'
Vue.prototype.qs = QS;

import HeyUI from 'heyui';
Vue.use(HeyUI);

new Vue({
  el: '#app',
  router,
  // 装载语言包
  i18n,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
