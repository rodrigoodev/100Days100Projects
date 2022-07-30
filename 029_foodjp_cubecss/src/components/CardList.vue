<template>
  <div class="most-popular">
    <h2>Mais populares</h2>
    <div class="most-popular__list">
      <CardItem image="image3" title="Ramen de Frango" price="30" />
      <CardItem image="image4" title="Ramen Apimentado" price="30" />
      <CardItem image="image5" title="Ramen Tradicional" price="30" />
    </div>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem.vue";
export default {
  name: "CardList",
  components: { CardItem },
};
</script>

<style lang="scss">
h2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 59px;
  /* identical to box height */

  color: #292929;
  text-align: center;
  margin-top: 100px;
}

.most-popular {
  width: 1250px;
  margin: 100px auto;
}

.most-popular__list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  gap: 16px;
}
</style>
