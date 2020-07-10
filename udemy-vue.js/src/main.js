import Vue from 'vue';
import App from './App.vue';
import LikeNumber from "./components/LikeNumber";
import GlobalName from "./components/global";
import router from "./router"

Vue.config.productionTip = false;
Vue.component("LikeNumber", LikeNumber);
Vue.component("GlobalName", GlobalName);
/**
 * グローバル設定directive
 */
// Vue.directive('focus', function(el,binding ){
//   el.style.border="10px solid black";
//   el.style.borderWidth= binding.value.width;
//   el.style.borderColor= binding.value.color;
//   el.style.borderStyle=binding.arg;
//   if(binding.modifiers.round){
//     el.style.borderRadius= "0.5rem";
//   }
//   if(binding.modifiers.shadow){
//     el.style.boxShadow="0 2px 5px rgba(0, 0, 0, 0.5)";
//   }
// });
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')