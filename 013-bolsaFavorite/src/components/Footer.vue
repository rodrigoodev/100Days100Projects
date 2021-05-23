<template>
  <footer class="footer">
    <div class="footer__cards">
      <div class="footer__cards__card">
        <i class="fab fa-whatsapp"></i>
        <div class="footer__cards__text">
          <p>0800 123 22222</p>
          <p>Segunda a sexta de 8h às 22h</p>
        </div>
      </div>
      <div class="footer__cards__card">
        <i class="far fa-comments"></i> <span>Chat</span>
      </div>
      <div class="footer__cards__card">
        <i class="far fa-envelope"></i> <span>E-mail</span>
      </div>
      <div class="footer__cards__card">
        <i class="far fa-question-circle"></i> <span>Ajuda</span>
      </div>
    </div>
    <div class="footer__madeIn">
      Feito com <i class="far fa-heart"></i> pela Quero Educação
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #18acc4;
  color: white;
  i {
    font-size: 2em;
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &__text {
      margin: 0 auto;
      p:first-child {
        font-weight: bold;
      }
    }
    &__card:first-child {
      padding: 30px 40px;
      flex-direction: row;
      width: 100%;
      margin-right: 0;
      margin-bottom: 8px;
    }
    &__card {
      background-color: #007a8d;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      width: 33%;
      span {
        margin-top: 10px;
        font-weight: bold;
      }
    }
  }
  &__madeIn {
    padding: 40px;
    text-align: center;
    i {
      font-size: 1em;
    }
  }
}
</style>
