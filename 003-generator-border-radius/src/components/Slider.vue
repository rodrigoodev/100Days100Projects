<template>
  <div class="containerS">
    <h3 class="pl-0 containerS__titulo">
      {{ title }}
    </h3>
    <div class="containerS__slider">
      <v-slider
        class="containerS__slider__slider"
        v-model="valueSlider"
        @input="$emit('update:valueSlider', valueSlider);"
        thumb-label
        dark
        max="100"
        min="0"
      >
        <template v-slot:thumb-label="{ value }">
          <span style="color: black; font-weight: bold;">{{ value }}</span>
        </template>
      </v-slider>
      <v-text-field
        class="containerS__slider__text"
        v-model="valueSlider"
        @keyup="$emit('update:valueSlider', valueSlider);"
        append-icon="mdi-rounded-corner"
        dark
        dense
        outlined
        type="number"
        min="0"
        max="100"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    valueSlider: Number,
  },
  data: () => ({}),
//   watch: {
//     sliderAll(newValue) {
//       this.$emit("inputAll", newValue);
//     },
 // },
};
</script>

<style lang="scss" scoped>
.containerS {
  display: flex;
  flex-direction: column;
  width: 300px;

  &__titulo {
    color: white;
    margin-left: 5px;
  }

  &__slider {
    display: flex;
    justify-content: center;
    align-items: center;
    &__slider {
    }
    &__text {
      text-transform: none;
      flex: 1;
      max-width: 100px;
    }
  }
}

@media only screen and (max-width: 400px) {
    .containerS {
        margin:0 auto ;
        &__titulo {
    margin-left: 0px;
  }
  }
}
</style>
