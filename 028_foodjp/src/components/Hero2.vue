<template>
  <div class="hero">
    <div class="hero__img">
      <img src="@/assets/img/image2.png" alt="" />
    </div>
    <div class="hero__text">
      <h1>Feita de forma Tradicional</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a href="#">Ler mais sobre o modo de preparo </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero2",
};
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  max-width: 1250px;
  margin: 100px auto 0 auto;
  align-items: center;
  justify-content: space-between;

  &__text {
    width: 500px;
  }

  &__img {
    width: 500px;
  }
}

a {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  text-decoration-line: underline;

  color: #da2535;
  margin-top: 40px;
  display: block;
}

h1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 59px;
  color: #292929;
}

button {
  background: #da2535;
  border-radius: 10px;
  margin-top: 63px;
  width: 300px;
  height: 60px;
  color: #fbfbfb;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  border: none;
}

p {
  margin-top: 24px;
  width: 500px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  color: #292929;
}
</style>
