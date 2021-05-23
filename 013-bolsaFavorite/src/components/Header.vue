<template>
  <div class="header">
    <div class="header__help">
      <i class="far fa-question-circle"></i>
      <p>Ajuda</p>
    </div>
    <div class="header__logo">
      <img src="../assets/images/logo-querobolsa.svg" />
    </div>
    <div class="header__profile">
      <i class="far fa-user-circle"></i>
      <p>Conta</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px;
    color: #007a8d;
    i {
      color: #007a8d;
      font-size: 1.8em;
    }
    p {
      margin-top: 5px;
    }
  }

  &__help {
    width: 20%;
    border-right: 4px solid #fbfbfb;
  }
  &__logo {
    width: 60%;

    img {
      width: 60%;
    }
  }
  &__profile {
    width: 20%;
    border-left: 4px solid #fbfbfb;
  }
}
</style>
