import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDjFq7ICpIRcl2Tm91IuYlKP0V-oQRzdQE",
    authDomain: "my-address-pj-65164.firebaseapp.com",
    databaseURL: "https://my-address-pj-65164.firebaseio.com",
    projectId: "my-address-pj-65164",
    storageBucket: "my-address-pj-65164.appspot.com",
    messagingSenderId: "230308974696",
    appId: "1:230308974696:web:b0a049d2f1401f2a"
  };
  firebase.initializeApp(firebaseConfig);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
