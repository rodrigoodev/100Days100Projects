<template>
  <div class="card">
    <div class="card__university">
      <div class="card__university__logo">
        <img :src="course.university.logo_url" />
      </div>
      <p class="card__university__name">
        {{ course.university.name }}
      </p>
      <p class="card__university__course">
        {{ course.course.name }}
      </p>
      <div class="card__university__stars">
        <StarScore :score="course.university.score" />
      </div>
    </div>
    <hr class="card__divisor" />
    <div class="card__courseTime">
      <div>
        <p>{{ course.course.kind }}</p>
        <i class="fas fa-circle"></i>
        <p>{{ course.course.shift }}</p>
      </div>
      <p class="card__courseTime__start">
        Início das aulas em: <span>{{ course.start_date }}</span>
      </p>
    </div>
    <hr class="card__divisor" />
    <div class="card__price">
      <p>Mensailidades com o Quero Bolsa:</p>
      <p class="card__price__fullPrice">{{ course.full_price | reais }}</p>
      <p class="card__price__discount">
        <span>{{ course.price_with_discount | reais }}</span> /mês
      </p>
    </div>
    <div class="card__action">
      <button class="button" @click="deleteCourse(course.id)">Excluir</button>
      <button class="button" :class="course.enabled ? 'main' : 'disabled'">
        {{ course.enabled ? "Ver oferta" : "Indisponivel" }}
      </button>
    </div>
  </div>
</template>

<script>
import MixinsGlobal from "@/mixins";
import StarScore from "./StarScore";
export default {
  props: ["course"],
  mixins: [MixinsGlobal],
  components: { StarScore },
  methods: {
    deleteCourse(id) {
      this.$emit("deleteCourse", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 20px 0px;
  background-color: white;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  text-align: center;
  border-radius: 6px;
  padding: 40px;

  &__university {
    &__name {
      margin-top: 20px;
      text-transform: uppercase;
      font-weight: bold;
    }
    &__course {
      margin-top: 10px;
      font-size: 1em;
      font-weight: bold;
      color: #007a8d;
    }
  }
  &__courseTime {
    margin: 20px 0;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      text-decoration: uppercase;
      i {
        font-size: 3px;
        margin: 0 10px;
      }
    }
    &__start {
      font-size: 0.9em;
      margin-top: 10px;
      color: rgba(31, 45, 48, 0.9);
      span {
        font-size: 1rem;
      }
    }
  }
  &__price {
    margin-top: 20px;
    p:first-child {
      font-weight: bold;
    }
    &__fullPrice {
      margin: 20px 0 0 0;
      text-decoration: line-through;
      color: rgba(31, 45, 48, 0.9);
    }
    &__discount {
      color: rgba(31, 45, 48, 0.9);
      margin: 5px;
      span {
        color: #0fa866;
        font-weight: bold;
        font-size: 1.4em;
      }
    }
  }

  &__action {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    .main {
      padding: 10px 30px;
    }
  }
}

hr {
  border-top: 2px solid rgba(31, 45, 48, 0.1);
}

.button {
  background: white;
  border: 1px solid #007a8d;
  padding: 20px;
  font-size: 1em;
  border-radius: 4px;
  color: #007a8d;
  font-weight: bolder;
}

.main {
  background: #fdcb13;
  border-color: #fdcb13;
  color: #1f2d30;
}

.disabled {
  background: rgba(31, 45, 48, 0.3);
  border-color: rgba(31, 45, 48, 0.3);
  color: rgba(31, 45, 48, 0.7);
}

// .card {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 20px 0;
//   width: 100%;
//   border-top: 2px solid rgba(31, 45, 48, 0.2);

//   &__logoUniversity {
//     width: 30%;
//     img {
//       max-width: 100%;
//     }
//   }

//   &__course {
//     width: 50%;
//     display: block;
//     font-size: 1.2em;

//     &__name {
//       color: #18acc4;
//       font-weight: bolder;
//     }

//     &__level {
//       font-weight: normal;
//       margin-top: 4px;
//     }
//     &__discount {
//       margin-top: 20px;
//       font-weight: bolder;
//       color: #1f2d30;

//       span {
//         color: #0fa866;
//         font-weight: bolder;
//       }
//     }
//     &__price {
//       color: #0fa866;
//       margin-top: 4px;
//       font-weight: bolder;
//     }
//   }
// }
</style>
