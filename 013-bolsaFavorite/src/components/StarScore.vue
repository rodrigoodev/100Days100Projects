<template>
  <div class="content_star">
    <p>{{ score }}</p>
    <div class="stars-outer">
      <div class="stars-inner" :style="{ width: fillStar }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["score"],
  data: () => ({
    totalStar: 5,
  }),
  computed: {
    fillStar() {
      let starPercentage = (this.score / this.totalStar) * 100;
      const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

      return starPercentageRounded;
    },
  },
};
</script>

<style scoped>
.content_star {
  display: flex;
  margin: 20px 0px;
  justify-content: center;
  align-items: center;
}
p {
  font-size: 1.2em;
  font-weight: bold;
  margin-right: 15px;
}
.stars-outer {
  display: inline-block;
  position: relative;
  font-family: FontAwesome;
}

.stars-outer::before {
  content: "\f006    \f006    \f006    \f006    \f006";
  color: #f8ce0b;
}

.stars-inner {
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
}

.stars-inner::before {
  content: "\f005    \f005    \f005    \f005    \f005";
  color: #f8ce0b;
}
</style>
