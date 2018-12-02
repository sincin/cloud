<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  width: 7.5rem;
  margin: 0 auto;
}
</style>
<style>
  @import './assets/css/base.css'; /*引入公共样式*/
  @import './assets/css/common.css'; /*引入公共样式*/
</style>
