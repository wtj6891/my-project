<template>
  <div id="app">
    <navigation></navigation>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import navigation from '@/components/navigation.vue'

export default {
    name: 'app',
    components: {
      navigation: navigation
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  .content {
    display: flex;
    justify-content: center;
  }
</style>
