<template>
  <div id="app">
    <div class="container">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from ".//components/Header";
export default {
  components: {
    Header
  },
};
</script>

<style>
nav {
  padding: 30px;
}
</style>
