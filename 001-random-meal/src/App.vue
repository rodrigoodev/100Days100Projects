<template>
  <v-app>
    <Home @getMeal="getMeal" />
    <Receita v-show="meal" :meal="meal"/>
    <Footer />
  </v-app>
</template>

<script>
import Home from "@/components/Home";
import Receita from "@/components/Receita"
import Footer from "@/components/Footer"
export default {
  name: "App",

  components: {
    Home,Receita,Footer
  },

  data: () => ({
    meal: null,
  }),
  methods: {
    getMeal(meal) {
      if(meal.meals){
        this.meal = meal.meals[0];
      }else{
        this.meal = null
      }
    },
  }
};
</script>
