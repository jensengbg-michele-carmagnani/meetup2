<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>


export default {
  beforeMount() {
    this.$store.dispatch("fetchEvents");
  },
  created(){
    this.$store.dispatch('fetchEvents2')
  }
};
</script>

<style lang="scss">

      @import "./scss/main";
</style>
