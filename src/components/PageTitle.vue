<template>
  <div>
      <!-- indigo : 배경색 지정, indigo--text : 글자색 지정 -->
      <h2 class="indigo--text darken-4">
          <v-icon size="1.5em" color="indigo darken-2">{{icon}}</v-icon>
          <!-- pageTitle의 위치 지정, 부모가 pagetitle줌 -->
          <slot></slot>
      </h2>
  </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: ['icon']
}
</script>

<style>

</style>