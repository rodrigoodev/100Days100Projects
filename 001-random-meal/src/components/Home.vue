<template>
  <div class="container">
    <h1 class="container__text">Sentindo fome?</h1>
    <h2>Pegue uma receita clicando no botão abaixo</h2>
    <v-btn
      :loading="loading"
      :disabled="loading"
      color="blue"
      class="ma-4 white--text container__btn"
      @click="handlerGetMeal"
    >
      Pegue uma Receita
      <v-icon right dark depressed>
        mdi-food
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    meal: [],
  }),
  methods: {
    handlerGetMeal() {
    this.loading = true;
      try {
        const baseURI = "https://www.themealdb.com/api/json/v1/1/random.php";
        this.$http.get(baseURI).then((result) => {
          this.meal = result.data;
            this.$emit("getMeal", this.meal);
        });
        
      }catch(error){
          console.log(error)
      }finally{
          this.loading = false
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: auto;
  max-width: 900px;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__text {
    text-align: center;
  }
  &__btn {
    max-width: 200px;
    text-transform: none;
  }
}
</style>
