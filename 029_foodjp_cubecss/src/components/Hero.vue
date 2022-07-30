<template>
  <div class="hero">
    <div class="hero__text">
      <h1>Comida Oriental</h1>
      <p>
        A culinária Japonesa é bastante equilibrada, sendo muito rica em peixes
        (ômega 3), vegetais, massas e ingredientes frescos.
      </p>
      <button>Cardápio</button>
    </div>

    <div>
      <ImageJapa />
    </div>
  </div>
</template>

<script>
import ImageJapa from "./food/Japa1.vue";
export default {
  name: "Hero",
  components: {
    ImageJapa,
  },
};
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  max-width: 1250px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  margin-top: 110px;
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
  width: 520px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  color: #292929;
}
</style>
