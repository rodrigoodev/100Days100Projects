<template>
  <div class="menu">
    <div>Minha conta</div>
    <nav>Menu<i class="fas fa-chevron-down"></i></nav>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style lang="scss" scoped>
.menu {
  background: #18acc4;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  i {
    margin-left: 8px;
  }
}
</style>
