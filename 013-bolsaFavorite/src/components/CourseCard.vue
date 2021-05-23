<template>
  <div class="card">
    <div class="card__checkbox">
      <label class="chk">
        <input type="checkbox" v-model="valor" @click="selectCouse(course)" />
        <span><i class="fas fa-check"></i></span>
      </label>
    </div>
    <div class="card__logoUniversity">
      <img :src="course.university.logo_url" />
    </div>
    <div class="card__course">
      <p class="card__course__name">{{ course.course.name }}</p>
      <p class="card__course__level">{{ course.course.level }}</p>
      <p class="card__course__discount">
        Bolsa de <span>{{ course.discount_percentage }}%</span>
      </p>
      <p class="card__course__price">
        {{ course.price_with_discount | reais }}/mês
      </p>
    </div>
  </div>
</template>

<script>
import MixinsGlobal from "@/mixins";
export default {
  mixins: [MixinsGlobal],
  props: ["course", "removeAllcheckbox"],
  data: () => ({
    valor: null,
  }),
  watch: {
    removeAllcheckbox: function () {
      this.removeSelect();
    },
  },
  methods: {
    selectCouse(course) {
      this.$emit("changeSelectedCourse", course.id);
    },
    removeSelect() {
      this.valor = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  width: 100%;
  border-top: 2px solid rgba(31, 45, 48, 0.2);

  &__logoUniversity {
    width: 30%;
    img {
      max-width: 100%;
    }
  }

  &__course {
    width: 50%;
    display: block;
    font-size: 1.2em;

    &__name {
      color: #18acc4;
      font-weight: bolder;
    }

    &__level {
      font-weight: normal;
      margin-top: 4px;
    }
    &__discount {
      margin-top: 20px;
      font-weight: bolder;
      color: #1f2d30;

      span {
        color: #0fa866;
        font-weight: bolder;
      }
    }
    &__price {
      color: #0fa866;
      margin-top: 4px;
      font-weight: bolder;
    }
  }
}

.chk input {
  display: none;
}

.chk span {
  border-radius: 4px;
  width: 26px;
  height: 26px;
  display: block;
  background-color: #fff;
  border: 1px solid #1f2d30;
}

.chk span i {
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  color: white;
  font-size: 0.8em;
  margin-top: 6px;
}

.chk input:checked + span {
  background-color: #18acc4;
  border: 1px solid #18acc4;
}
</style>
