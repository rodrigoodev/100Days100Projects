<template>
  <div id="app">
    <Header />
    <Hero />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
  },
};
</script>

<style lang="scss">
@import "./assets/css/reset.css";
@import "./assets/css/variables.css";

h1 {
  font-family: "Inter", sans-serif;
}

body {
  background-color: #fbfbfb;
}
</style>
