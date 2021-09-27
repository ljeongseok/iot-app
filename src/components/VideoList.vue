<template>
  <div>
      <v-btn class="float-right" color="primary" icon @click="load">
          <v-icon>mdi-refresh</v-icon></v-btn>
      <ul class="mt-3">
          <li v-for="(file, ix) in fileList" :key="ix" @click="video=file"
          :class="{active: video === file}" >
              {{file.filename}}
          </li>
      </ul>
      <video v-if="video.video_file" :src="video.video_file" 
      class="video" controls autoplay max-width="640" contain></video>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name : 'VideoList',
    data(){
        return {
            video:{},
            fileList:[
                // { name: 'video.mp4', url: 'https://picsum.photos/640/480?random=5'},
                // { name: 'video.mp4', url: 'https://picsum.photos/640/480?random=6'},
                // { name: 'video.mp4', url: 'https://picsum.photos/640/480?random=7'},
                // { name: 'video.mp4', url: 'https://picsum.photos/640/480?random=8'},
            ]
        }
    },
    methods:{
        async load(){
            try{
            // let res = await axios.get('/api/board')
            let { data } = await axios.get('/api/video/')
            this.fileList = data
            console.log(this.fileList)
            // console.log(data.result)
            } catch(e){
                console.log('에러 : ',e)
            }
        },        
    },
    async mounted(){
            this.load()
        }
}
</script>

<style scope>

.active {
    color : red;
    font-weight: bolder;
}
</style>