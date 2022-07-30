<template>
  <div class="maps-wrap">
    <h2>Localização</h2>
    <div class="maps" />
  </div>
</template>

<script>
export default {
  name: "Maps",
};
</script>

<style lang="scss">
.maps-wrap {
  width: 1250px;
  margin: 100px auto;
  h2 {
    text-align: left;
  }
}

.maps {
  width: 1250px;
  margin: 48px auto;
  height: 400px;
  background-color: red;
}
</style>
