import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //  멤버 추가(전역번수)
  state: {  
    // user:{
    //   username: 'hong',
    //   email: 'hong@gmail.com'
    // }
  },
  // computed와 같은 개념
  getters:{
    isLogin(state){
      return !!state.user
      // return Boolean(state.user)
    }
  },
  // 등록된 함수만 state 값 변경 가능, 동기함수만 가능(비동기함수, 서버 api 호출x)
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
