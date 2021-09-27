<template>
  <v-app>
    <!-- 툴바 테마를 primary(파랑색)로 설정 -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer= !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>IoT Service</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      
    </v-app-bar>

    <!-- drawer이 True면 펼쳐짐, False면 닫힘 -->
    <v-navigation-drawer absolute v-model="drawer" temporary>
      <v-list-item two-line>
        <v-list-item-avatar v-if="isLogin">
          <!--portraits: 세로 이미지 -->
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{isLogin ? user.username: 'IoT서비스'}}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{isLogin ? user.email: ''}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="page in pages" :key="page.name"
             :to="{name: page.name}" exact>

          <v-list-item-icon>
            <v-icon>{{ page.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ page.title }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <!-- 내용 영역에 라우터 페이지 렌더링 -->
    <v-main class="mb-5">
      <v-slide-x-transition mode="out-in">  
        <router-view></router-view>
      </v-slide-x-transition>
    </v-main>

    <!-- 푸터 테마를 secondary로 설정 -->
    <v-footer color="secondary" fixed dark>
      <div class="mx-auto">created by iot class</div>
    </v-footer>


  </v-app>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'App',

  data: () => ({
    drawer: false,
    pages:[
      // name : router용 이름
      {title: 'Home', name: 'Home', icon: 'mdi-home'},
      {title: 'MQTT 모니터링', name: 'Mqtt', icon: 'mdi-access-point-network'},
      {title: '보안 카메라', name: 'SecureCamera', icon: 'mdi-video'},
      {title: '탐사 차량', name: 'ExplorationCar', icon: 'mdi-car'},
      {title: 'About', name: 'About', icon: 'mdi-information'},
    ]

  }),
  computed:{
    ...mapState(['user']),
    // computed:{
    //  user(){
    //  }
    // } 와 같음
    ...mapGetters(['isLogin'])
  },
};
</script>
