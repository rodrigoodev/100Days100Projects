<template>
  <div class="comments">
    <h2>Comentários</h2>
    <div class="comment-list">
      <div class="comment">
        <div class="comment-header">
          <div class="comment-header-avatar">
            <img src="https://i.pravatar.cc/100" alt="" />
          </div>
          <div class="comment-header-info">
            <div class="comment-header-info-name">
              <span>Daniele Almeida</span>
            </div>
          </div>
        </div>
        <div class="comment-star">
          <span class="fa fa-star checked" />
          <span class="fa fa-star checked" />
          <span class="fa fa-star checked" />
          <span class="fa fa-star" />
          <span class="fa fa-star" />
        </div>
        <div class="comment-body">
          <p>Ótimo serviço! Encantada com a qualidade dos pratos.</p>
        </div>
      </div>
      <div class="comment">
        <div class="comment-header">
          <div class="comment-header-avatar">
            <img src="https://i.pravatar.cc/100" alt="" />
          </div>
          <div class="comment-header-info">
            <div class="comment-header-info-name">
              <span>Daniele Almeida</span>
            </div>
          </div>
        </div>
        <div class="comment-star">
          <span class="fa fa-star checked" />
          <span class="fa fa-star checked" />
          <span class="fa fa-star checked" />
          <span class="fa fa-star" />
          <span class="fa fa-star" />
        </div>
        <div class="comment-body">
          <p>Ótimo serviço! Encantada com a qualidade dos pratos.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comments",
};
</script>

<style lang="scss">
.comments {
  width: 1250px;
  margin: 0 auto;
  h2 {
    text-align: left;
  }
}

.comment-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
}

.comment {
  width: 604px;

  background: #f3f3f3;
  border-radius: 16px;
  padding: 40px;
}

.comment-header-avatar img {
  border-radius: 50%;
}

.comment-header-info-name span {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 123%;
  /* or 39px */

  color: #292929;
  margin-top: 24px;
  display: block;
}

.comment-body p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  margin-top: 16px;
  /* or 38px */

  color: #616161;
}

.comment-list {
  margin-top: 50px;
}

.checked {
  color: orange;
}
</style>
