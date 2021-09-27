<template>
  <div @click="changeState">
      <v-icon class="float-left mr-3" 
        x-large :color="stateColor">fas fa-lightbulb</v-icon>
        
      <div>{{led.placeTitle}}</div>
      
      <v-icon :color="iconColor">{{icon}}</v-icon>
      {{state}}

  </div>
</template>

<script>
export default {
  name: 'led',
  props:['led','topic'],
  data(){
    return{
      
    }
  },
  computed:{
    stateColor() {
          return this.led.state ? this.led.color: 'gray'
      },
      icon () {
          return this.led.state ? 
              'mdi-checkbox-marked-outline' : 'mdi-checkbox-blank-outline'
      },
      iconColor() {
          return this.led.state ? 'indigo': 'gray' 
      },
      state() {
          return this.led.state ? 'On' : 'Off'
      }
  },
  methods:{
    changeState(){
      // publish 
      // let topic = `${this.topic}/${this.led.place}`
      // let value = this.led.state ? 'off' : 'on'
      // this.$mqtt.publish(topic, value)
      this.led.state = !this.led.state

      let place = this.led.place
      let value = this.led.state ? 'on' : 'off'
      let message = {place, value}
      this.$mqtt.publish(this.topic, JSON.stringify(message))

    }
  }
}
</script>

<style>

</style>