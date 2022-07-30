<template>
  <div id="app">
    <Header />
    <Hero />
    <Hero2 />
    <CardList />
    <Comments />
    <Maps />
    <div class="input-container">
      <i class="fa fa-map-marker icon" />
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <input
        class="input-field"
        type="text"
        placeholder="Localização para entrega"
        name="usrnm"
      />
      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
      <button class="button-search">Buscar</button>
    </div>
    <footer>
      <div class="footer-list">
        <div class="footer-list__item">
          <Logo />
        </div>
        <div class="footer-list__item">
          <h4 class="footer-list__item-title">Contato</h4>
          <p class="footer-list__item-text">+55 21 9999-9999</p>
          <p class="footer-list__item-text">email@gmail.com</p>
        </div>
        <div class="footer-list__item">
          <h4 class="footer-list__item-title">Contato</h4>
          <p class="footer-list__item-text">+55 21 9999-9999</p>
          <p class="footer-list__item-text">email@gmail.com</p>
        </div>
        <div class="footer-list__item">
          <h4 class="footer-list__item-title">Contato</h4>
          <p class="footer-list__item-text">+55 21 9999-9999</p>
          <p class="footer-list__item-text">email@gmail.com</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Hero2 from "@/components/Hero2.vue";
import CardList from "@/components/CardList.vue";
import Comments from "@/components/Comments.vue";
import Maps from "@/components/Maps.vue";
import Logo from "@/components/Logo.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    Hero2,
    CardList,
    Comments,
    Maps,
    Logo,
  },
};
</script>

<style lang="scss">
@import "./assets/css/reset.css";
@import "./assets/css/variables.css";

footer {
  width: 1250px;
  margin: 120px auto;
}

.footer-list {
  display: flex;
  gap: 100px;
}

.footer-list__item-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 123%;
  margin-bottom: 20px;
  /* or 39px */

  color: #292929;
}

.footer-list__item-text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  /* identical to box height, or 178% */

  letter-spacing: 0.015em;

  color: #616161;
}

.input-container {
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 15px;
}

.icon {
  padding: 30px 1px 30px 20px;
  color: red;
  font-size: 40px;
  text-align: center;
  border-top: 1px;
  border-left: 1px;
  border-bottom: 1px;
  border-right: 0px;
  border-color: black;
  border-style: solid;
}

.input-field {
  width: 100%;
  padding: 10px;
  outline: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 123%;
  color: #292929;
  border-top: 1px;
  border-left: 0px;
  border-bottom: 1px;
  border-right: 0px;
  border-color: black;
  border-style: solid;
}

.button-search {
  padding: 20px 80px;
  background: #da2535;
  color: white;
  border: none;
  cursor: pointer;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 123%;
  transition: 0.5s;

  &:hover {
    border: 1px solid #da2535;
    background: white;
    color: #da2535;
  }
}

h1 {
  font-family: "Inter", sans-serif;
}

body {
  background-color: #fbfbfb;
}
</style>
