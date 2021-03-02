<template>
  <div class="container__circular">
    <v-progress-circular color="primary" :rotate="-90" :size="150" :width="15" :value="bar">
      <span class="container__circular__value">{{ value }}</span>
    </v-progress-circular>
    <p class="container__circular__text">{{ texto }}</p>
  </div>
</template>

<script>
export default {
  props: ["value", "texto", "bar"],
  data: () => {
    return {};
  },
};
</script>

<style scoped>
.container__circular{
    display: flex;
    flex-direction: column;
    align-items: center;
}


.container__circular__value{
    font-size:2.5em;
    font-weight: bold;
}

.container__circular__text{
    font-size: 1.5em;
    font-weight: bold;
    margin: 10px 0 0 0;
}
</style>
