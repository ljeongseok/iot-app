<template>
    <div class="mb-10 pa-3">
        <page-title icon="mdi-access-point-network">MQTT 모니터링</page-title>
        <div class="my-3">
            <div v-for="(devices, place) in sensors" :key="place">
                <m-title icon="fas fa-map-marker-alt"> {{place}}</m-title>

                <hr class="mt-1 mb-3">

                <v-row >  
                    <v-col class="pa-3" cols="6" sm="4" 
                        v-for="(value, device) in devices" :key="device">
                        <temperature v-if="device==='temp'" :value="value"></temperature>
                        <humidity v-if="device==='humi'" :value="value"></humidity>
                        <illusion v-if="device==='illu'" :value="value"></illusion>

                    </v-col>
                </v-row>
            </div>

            <m-title class="mt-5" icon="mdi-devices"> 장치 제어</m-title>
            <hr class="my-3">
            <v-row>
                <v-col cols="6" sm="4" v-for="(led, ix) in leds" :key="ix">
                <led :led="led" :topic="topic"></led>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import Temperature from '../components/sensors/Temperature.vue';
import Humidity from '../components/sensors/Humidity.vue';
import Illusion from '../components/sensors/Illusion.vue';
export default {
    components:{Temperature,Humidity,Illusion},
    name: 'Mqtt',
    data() {
        return {
            sensors:{
                    'room1':{
                        'temp':12,
                        'humi':54,
                        'illu':80,
                    },
                },
            topic: 'iot/hong/control',
            leds:[
                { place: 'livingroom', placeTitle: '거실', color: 'red', state: false},
                { place: 'kitchen', placeTitle: '부엌', color: 'green', state: true},
                { place: 'bedroom', placeTitle: '침실', color: 'blue', state: false},
            ],

        };
    },
    mqtt: {
        'iot/hong/sensors/#': function(value, topic) {
            let [,,,place,device] = topic.split('/')
            // 처음 인식된 장소면 빈 객체 추가
            !this.sensors[place] && (this.sensors[place] = {})
            this.sensors[place][device] = value
            
            this.sensors={ ...this.sensors  }
            console.log(place)
            
        }
    },
    mounted() {
        // 구독 신청
        this.$mqtt.subscribe('iot/hong/sensors/#')
    },
    unmounted() {
        // 구독 해제
        this.$mqtt.unsubscribe('iot/hong/sensors/#')
    },
}
</script>

<style>

</style>