<template>
  <div class="pa-3">
    <page-title>
      오늘의 날씨
      <v-icon color="indigo">mdi-calendar-today</v-icon>
    </page-title>
    <v-icon>mdi-clock</v-icon> {{ new Date() | moment("YYYY-MM-DD hh:mm:ss")}}
    <weather city="seoul" cityTitle="서울"></weather>
  </div>
</template>

<script>
  

  export default {
    name: 'Home',
    
  }
</script>
