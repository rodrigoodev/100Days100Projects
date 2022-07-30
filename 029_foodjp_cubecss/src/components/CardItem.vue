<template>
  <div class="most-popular__item">
    <img
      class="most-popular__item-img"
      :src="require(`@/assets/img/${image}.png`)"
      alt="janta1"
    />
    <div class="most-popular__item-title">
      <h3>{{ title }}</h3>
      <p class="most-popular__item-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p class="most-popular__item-price">R$ {{ price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    title: String,
    image: String,
    price: Number,
  },
};
</script>

<style lang="scss">
.most-popular__item {
  background: #f3f3f3;
  border-radius: 32px;
  width: 380px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  padding: 8px;

  &-desc {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    /* or 29px */

    text-align: center;
    margin-top: 16px;
    color: #616161;
  }

  &-img {
    width: 291px;
    height: 291px;
    margin-top: -150px;
  }

  &-price {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    color: #292929;
    margin-top: 32px;
    text-align: center;
  }

  h3 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */
    text-align: center;
    color: #292929;
    margin-top: 50px;
  }
}
</style>
