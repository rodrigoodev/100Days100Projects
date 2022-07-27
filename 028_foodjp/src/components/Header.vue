<template>
  <header class="header">
    <div class="header__logo">
      <Logo />
    </div>
    <div class="header__menu">
      <ul class="header__menu-list">
        <li class="header__menu-item">
          <a href="#" class="header__link">Inicio</a>
        </li>
        <li class="header__menu-item">
          <a href="#" class="header__link">Cardápio</a>
        </li>
        <li class="header__menu-item">
          <a href="#" class="header__link">Sobre</a>
        </li>
      </ul>
    </div>
    <div>
      <button class="header__button">Entrar</button>
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

<style lang="scss" scoped>
.header {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  align-items: center;

  &__menu-list {
    display: flex;
    gap: 91px;
  }

  &__link {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #292929;

    &:hover {
      text-decoration: underline;
    }
  }

  &__button {
    width: 188px;
    height: 49px;
    border-radius: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #292929;
    border: 2px solid #292929;
    background-color: transparent;
    transition: 0.5s;

    &:hover {
      background-color: #292929;
      color: #fbfbfb;
    }
  }
}
</style>
