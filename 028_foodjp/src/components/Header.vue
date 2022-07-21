<template>
  <header class="header">
    <div class="header__logo">
      <Logo />
    </div>
    <div class="header__menu">
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Cardápio</a></li>
        <li><a href="#">Sobre</a></li>
      </ul>
    </div>
    <div>
      <button>Entrar</button>
    </div>
  </header>
</template>

<script>
import Logo from "../components/Logo.vue";
export default {
  name: "Header",
  components: {
    Logo,
  },
};
</script>

<style scoped></style>
