import Vue from "vue"

import PageTitle from '../components/PageTitle.vue'
import Weather from '../components/Weather.vue'
import Title from '@/components/Title.vue'
import Temperature from '@/components/sensors/Temperature.vue'
import Humidity from '@/components/sensors/Humidity.vue'
import Illusion from '@/components/sensors/Illusion.vue'
import Led from '@/components/devices/Led.vue'
import Vueknob from '@websanova/vue-knob'
import RemoteCamera from '@/components/devices/RemoteCamera.vue'
import SnapshotList from '@/components/SnapshotList.vue'
import VideoList from '@/components/VideoList.vue'
import DirectionPanel from '@/components/DirectionPanel.vue'


// 전역 컴포넌트 등록
Vue.component('PageTitle',PageTitle)
Vue.component('Weather',Weather)
Vue.component('m-title', Title)
Vue.component('temperature', Temperature)
Vue.component('humidity',Humidity)
Vue.component('illusion',Illusion)
Vue.component('led',Led)
Vue.component('knob',Vueknob)
Vue.component('remotecamera',RemoteCamera)
Vue.component('snapshot-list',SnapshotList)
Vue.component('video-list',VideoList)
Vue.component('direction-panel',DirectionPanel)
