<template>
  <div>
      <ul class="mt-3">
          <li v-for="(file,ix) in fileList" :key="ix" @click="image=file"
            :class="{active: image === file}">
              {{file.filename}}
          </li>
      </ul>
      <v-img :src="image.image_file" max-width="640" contain />
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SnapshotList',
    data(){
        return{
            image: {},
            fileList: [
                // { name: 'picture1.jpg', url: 'https://picsum.photos/640/480?random=1'},
                // { name: 'picture2.jpg', url: 'https://picsum.photos/640/480?random=2'},
                // { name: 'picture3.jpg', url: 'https://picsum.photos/640/480?random=3'},
                // { name: 'picture4.jpg', url: 'https://picsum.photos/640/480?random=4'},
            ]
        }
    },
    methods:{

    },
    async mounted(){
        // 서버로 부터 목록 얻어야 함
        try{
            // let res = await axios.get('/api/board')
            let { data } = await axios.get('/api/snapshot/')
            this.fileList = data
            console.log(this.fileList)
            // console.log(data.result)
        } catch(e){
            console.log('에러 : ',e)
        }
    }
}
</script>

<style scoped>
.active {
    color : red;
    font-weight: bolder;
}

</style>