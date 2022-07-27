<template>
  <div id="app">
    <Header />
    <Hero />
    <Hero2 />
    <CardList />
    <Comments />
    <footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Hero2 from "@/components/Hero2.vue";
import CardList from "@/components/CardList.vue";
import Comments from "@/components/Comments.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    Hero2,
    CardList,
    Comments,
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

footer {
  margin-top: 400px;
  background: #292929;
  width: 100%;
  height: 300px;
}
</style>
