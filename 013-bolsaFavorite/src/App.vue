<template>
  <div id="app">
    <Header />
    <Menu />
    <Navigator />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import Navigator from "./components/Navigator.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Menu,
    Footer,
    Navigator,
    Content,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #fbfbfb;
  font-family: sans-serif;
}

</style>
