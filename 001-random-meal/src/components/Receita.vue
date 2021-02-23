<template>
  <v-card class="container">
    
    <v-img class="container__image" :src="image"></v-img>

    <v-card-title>{{ receita }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="stars"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          {{stars}}
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        {{text__categoria__pais__drink}}
      </div>

      <div>
        {{ modoPreparo }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Ingredientes</v-card-title>

    <ul class="mx-4">
      <li v-for="(item, index) in ingridientes" :key="`${index}${item}`">{{ item }}</li>
    </ul>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tags</v-card-title>

    <v-card-text>
      <v-chip-group active-class="deep-purple accent-4 white--text" column>
        <v-chip v-for="(item, index) in tags" :key="`${index}${item}`">{{
          item
        }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <p>obs: Caso não consiga ver o video clique aqui
      <a :href="linkYoutube" target="_blank">Video</a></p>
      <iframe
        class="container__video"
        :src="`https://www.youtube.com/embed/${linkYoutube.slice(-11)}`"
      >
      </iframe>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["meal"],
  data: () => ({
    ingridientes: [],
    tags: [],
    image: "",
    receita: "",
    categoria: "",
    pais: "",
    drink: "",
    modoPreparo: "",
    linkYoutube: "",
    stars: 0
  }),
  watch:{
      meal(){
        this.getIngridientes();
        this.getTags();
        this.getImage();
        this.getReceita();
        this.getCategory();
        this.getPais();
        this.getDrink();
        this.getModoPreparo();
        this.getLinkYoutube();
        this.getRandomNumber();
      }
  },
  computed:{
      text__categoria__pais__drink(){
          return `${this.categoria} • ${this.pais}, ${this.drink}`
      }
  },
  methods: {
    getIngridientes() {
      if (this.meal) {
        let ingridientes = [];
        let ingridiente = "";
        for (let x = 1; x <= 20; x++) {
          if (
            this.meal[`strIngredient${x}`] &&
            this.meal[`strIngredient${x}`] !== "" &&
            this.meal[`strIngredient${x}`] !== undefined
          ) {
            ingridiente =
              this.meal[`strIngredient${x}`] +
              " - " +
              this.meal[`strMeasure${x}`];
            ingridientes.push(ingridiente);
          }
        }
        this.ingridientes = ingridientes;
      }
    },
    getTags() {
      if (this.meal) {
        if (this.meal.strTags) {
          let tags = this.meal.strTags;
          let tratamentoTags = [];
          if (tags.length > 0) {
            if (tags.includes(",")) {
              tratamentoTags = tags.split(",");
            } else {
              tratamentoTags.push(tags);
            }

            this.tags = tratamentoTags;
          }
        }
      }
    },
    getImage() {
      if (this.meal) {
        this.image = this.meal.strMealThumb ? this.meal.strMealThumb : "";
      }
    },
    getReceita() {
      if (this.meal) {
        this.receita = this.meal.strMeal ? this.meal.strMeal : "";
      }
    },
    getCategory() {
      if (this.meal) {
        this.categoria = this.meal.strCategory ? this.meal.strCategory : "";
      }
    },
    getPais() {
      if (this.meal) {
        this.pais = this.meal.strArea ? this.meal.strArea : "";
      }
    },
    getDrink() {
      if (this.meal) {
        this.pais = this.meal.strDrinkAlternate
          ? this.meal.strDrinkAlternate
          : "";
      }
    },
    getModoPreparo() {
      if (this.meal) {
        this.modoPreparo = this.meal.strInstructions
          ? this.meal.strInstructions
          : "";
      }
    },
    getLinkYoutube() {
      if (this.meal) {
        this.linkYoutube = this.meal.strYoutube ? this.meal.strYoutube : "";
      }
    },
    getRandomNumber(){
        this.stars = Number((Math.random() * (0 - 5) + 5).toFixed(1))
    }
  },
  mounted() {
    this.getIngridientes();
    this.getTags();
    this.getImage();
    this.getReceita();
    this.getCategory();
    this.getPais();
    this.getDrink();
    this.getModoPreparo();
    this.getLinkYoutube();
    this.getRandomNumber();
  },
};
</script>

<style lang="scss" scoped>
.container{
  max-width: 900px;
  &__image{
    max-height: 500px;
  }
  &__video{
    width: 800px;
    height: 500px;
  }
}

@media only screen and (max-width: 400px) {
 .container__video {
  width: 300px;
  height: 300px;
 }

 .container__image{
    max-height: 500px;
  }
}
</style>
