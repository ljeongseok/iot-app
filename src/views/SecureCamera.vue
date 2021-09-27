<template>
    <div class="pa-1">
        <page-title icon="mdi-video" class="mb-3">보안 카메라</page-title>

        <v-tabs class="mt-3" v-model="tab">
            <v-tab >
                <m-title icon="mdi-camera" class="my-3">실시간</m-title>
            </v-tab>
            <v-tab >
                <m-title icon="mdi-camera" class="my-3">스냅샷</m-title>
            </v-tab>
            <v-tab >
                <m-title icon="mdi-file-video" class="my-3">녹화영상</m-title>
            </v-tab>
        </v-tabs>
        <remotecamera v-if="tab==0" url="http://192.168.35.71:8000/mjpeg/stream/" 
         max-width="640"></remotecamera>
        <snapshot-list v-if="tab==1"></snapshot-list>
        <video-list v-if="tab==2"></video-list>

    </div>
</template>

<script>
export default {
    name: 'SecureCamera',
    data() {
        return {
            tab: 0,
        }
    },
    methods:{
        onPictureList(){

        },
        onVideoList(){

        }
    },
}
</script>

<style>

</style>