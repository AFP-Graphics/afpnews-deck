<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import CheckConnection from '@/mixins/checkConnection'

export default {
  name: 'App',
  mixins: [
    CheckConnection
  ]
}
</script>

<style lang="scss" src="@/assets/scss/main.scss"></style>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";
  #app {
    height: 100%;
  }
</style>
