<template>
  <div class="floating-text">
    Desafio
    <a href="https://github.com/RodrigoRGRB/100Days100Projects" target="_blank"
      >#100Days100Projects</a
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.floating-text {
  background-color: #001f61;
  border-radius: 10px 10px 0 0;
  color: #fff;
  padding: 7px 15px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  a {
    color: #ff7500;
    text-decoration: none;
  }
}
</style>
