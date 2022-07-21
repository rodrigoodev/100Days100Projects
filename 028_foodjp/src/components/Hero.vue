<template>
  <div>
    <div>
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

<style></style>
