<template>
  <div class="modal" v-show="isModalAddCourseOpen">
    <div class="modal__x" @click="closeModalAddCourse">
      <i class="fas fa-times"></i>
    </div>
    <div class="modal__content">
      <div class="modal__content__title">
        <h2>Adicionar bolsa</h2>
        <p>Filtre e adicione as bolsas de seu interesse.</p>
      </div>
      <div class="modal__content__filter">
        <p>Selecione sua cidade</p>
        <select v-model="filter.city" @change="changeCity">
          <option v-for="(city, index) in allCities" :key="index">
            {{ city }}
          </option>
        </select>
      </div>
      <div class="modal__content__filter">
        <p>Selecione o curso de sua preferência</p>
        <select v-model="filter.course" @change="filteredCourse">
          <option v-for="(city, index) in allCourseFilteredByCity" :key="index">
            {{ city }}
          </option>
        </select>
      </div>
      <div class="modal__content__filter">
        <p>Como você quer estudar?</p>
        <div class="modal__content__filter__checkboxes">
          <div>
            <label class="chk">
              <input
                type="checkbox"
                v-model="filter.presencial"
                @change="filteredCourse"
                name="Presencial"
              />
              <span><i class="fas fa-check"></i></span>
            </label>
            <span class="labelName">Presencial</span>
          </div>

          <div>
            <label class="chk">
              <input
                type="checkbox"
                @change="filteredCourse"
                v-model="filter.ead"
                name="A distancia"
              />
              <span><i class="fas fa-check"></i></span>
            </label>
            <span class="labelName">A distância</span>
          </div>
        </div>
      </div>
      <div class="modal__content__filter">
        <p>Até quando pode pagar?</p>
        <span class="moneyToPaid">R$ {{ filter.moneyToPaid }}</span>
        <input
          type="range"
          @input="filteredCourse"
          v-model="filter.moneyToPaid"
          min="1"
          max="10000"
        />
      </div>
      <div class="modal__content__orderBy">
        <div>Resultado:</div>
        <div>
          <p>Ordernar Por:</p>
          <span @click="orderByFaculdade"
            >Nome da Faculdade
            <i
              class="fas"
              @click="orderByFaculdade"
              :class="orderBy ? 'fa-chevron-down' : 'fa-chevron-up'"
            ></i
          ></span>
        </div>
      </div>
      <div class="modal__content__list">
        <div
          class="modal__content__list__item"
          v-for="(course, index) in courseFiltered"
          :key="index"
        >
          <CourseCard
            @changeSelectedCourse="changeSelectedCourse"
            :course="course"
            :removeAllcheckbox="triggerToRemoveCheckbox"
          />
        </div>
      </div>

      <div class="modal__content__action">
        <button class="button" @click="closeModalAddCourse">Cancelar</button>
        <button
          class="button"
          @click="addCourseToFavorite"
          :class="courseSelected.length > 0 ? 'main' : 'disabled'"
        >
          Adicionar bolsas(s)
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MixinsGlobal from "@/mixins";
import { telaService } from "../services";
import CourseCard from "./CourseCard.vue";
export default {
  mixins: [MixinsGlobal],
  name: "Modal",
  props: ["isModalAddCourseOpen"],
  components: { CourseCard },
  data: () => ({
    checkSelecionados: null,
    triggerToRemoveCheckbox: 0,
    teste: null,
    allCourse: [],
    moneyFilter: "",
    filter: {
      city: null,
      course: null,
      presencial: false,
      ead: false,
      moneyToPaid: 10000,
    },
    orderBy: true,
    allCities: null,
    allCourseFilteredByCity: null,
    courseFiltered: [],
    courseSelected: [],
  }),
  methods: {
    addCourseToFavorite() {
      if (this.courseSelected.length <= 0) return;

      let cursosSelecionados = [];
      let ponteiroCurso = null;
      this.courseSelected.forEach((item) => {
        ponteiroCurso = this.allCourse.filter((course) => {
          if (course.id == item) return { ...course };
        });
        cursosSelecionados.push(ponteiroCurso[0]);
      });

      this.$emit("coursesToFavorite", cursosSelecionados);
      this.closeModalAddCourse();
    },
    filteredCourse() {
      let filtered = this.allCourse.filter(
        (x) =>
          (x.campus.city == this.filter.city || this.filter.city == null) &&
          (x.course.name == this.filter.course || this.filter.course == null) &&
          (x.price_with_discount <= this.filter.moneyToPaid ||
            this.filter.moneyToPaid == null)
      );

      if (!this.filter.presencial || !this.filter.ead) {
        if (this.filter.presencial) {
          filtered = filtered.filter(
            (x) => x.course.kind.toUpperCase() == "Presencial".toUpperCase()
          );
        }

        if (this.filter.ead) {
          filtered = filtered.filter(
            (x) => x.course.kind.toUpperCase() == "EaD".toUpperCase()
          );
        }
      }

      this.courseFiltered = filtered;

      this.orderByUnivesity();
    },
    orderByUnivesity() {
      if (this.orderBy) {
        this.courseFiltered = this.courseFiltered.sort((a, b) =>
          a.university.name > b.university.name ? 1 : -1
        );
      } else {
        this.courseFiltered = this.courseFiltered.sort((a, b) =>
          a.university.name < b.university.name ? 1 : -1
        );
      }
    },
    closeModalAddCourse() {
      this.removeAllCheck();
      this.clearFilter();
      this.$emit("closeModalAddCourse", false);
    },
    clearFilter() {
      this.filter.city = null;
      this.filter.course = null;
      this.filter.presencial = false;
      this.filter.ead = false;
      this.filter.moneyToPaid = 10000;
      this.courseFiltered = this.allCourse;
      this.orderByUnivesity();
    },
    removeAllCheck() {
      this.triggerToRemoveCheckbox += 1;
      this.courseSelected = [];
    },
    changeSelectedCourse(course) {
      if (this.courseSelected.includes(course)) {
        let indice = this.courseSelected.indexOf(course);
        this.courseSelected.splice(indice, 1);
      } else {
        this.courseSelected.push(course);
      }
    },
    getAllCities() {
      const allCities = this.allCourse.map((item) => item.campus.city);

      this.allCities = allCities.filter((item, pos) => {
        return allCities.indexOf(item) == pos;
      });
    },
    changeCity() {
      this.getAllCourseByCity(this.filter.city);
    },
    getAllCourseByCity(city) {
      const allCourse = this.allCourse.filter(
        (item) => item.campus.city == city
      );

      const allOptionCourse = allCourse.map((item) => item.course.name);

      this.allCourseFilteredByCity = allOptionCourse.filter((item, pos) => {
        return allOptionCourse.indexOf(item) == pos;
      });

      this.filteredCourse();
    },
    orderByFaculdade() {
      this.orderBy = !this.orderBy;
      this.orderByUnivesity();
    },
    createIds() {
      const all = [...this.allCourse];
      this.allCourse = all.map((item, index) => ({ id: index, ...item }));
    },
  },
  async mounted() {
    try {
      this.allCourse = await telaService.getAllCourse();
      this.createIds();
      this.courseFiltered = this.allCourse;
      this.orderByUnivesity();
    } catch (error) {
      console.log(error);
    } finally {
      console.log("reset login");
    }

    this.getAllCities();
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(31, 45, 48, 0.88);
  &__x {
    color: white;
    text-align: right;
    padding: 10px 20px 10px 0;
    font-size: 2em;
  }
  &__content {
    width: 100%;
    padding: 24px;
    background-color: white;
    opacity: 1;

    &__action {
      display: flex;
      justify-content: space-between;
      border-top: 2px solid rgba(31, 45, 48, 0.2);
      padding-top: 30px;
    }
    &__list {
      margin-top: 30px;
    }
    &__title {
      p {
        margin-top: 5px;
      }
    }
    &__orderBy {
      font-weight: bold;
      font-size: 1em;
      display: flex;
      justify-content: space-between;

      div + div {
        text-align: right;

        span {
          margin-top: 12px;
          display: block;
          color: #18acc4;
        }
      }
    }
    &__filter {
      p {
        text-transform: uppercase;
        font-weight: bold;
        margin-top: 40px;
        font-size: 0.9em;
      }

      .moneyToPaid {
        display: block;
        font-size: 1.4em;
        margin: 2px;
        width: 100%;
        padding: 4px 0 0 0;
        margin: 0;
      }

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        width: 100%;
        height: 50px;
        font-size: 1.2em;
        padding: 8px;
        color: #1f2d30;
        border: 1px solid rgba(31, 45, 48, 0.2);
        border-radius: 6px;
        background: white;
        margin-top: 6px;

        background: url(../assets/images/ui/arrow-down.svg) no-repeat right;
        background-position-x: 96%;
        outline: none;
      }

      input[type="range"] {
        -webkit-appearance: none;
        margin: 30px 0;
        width: 100%;
      }

      input[type="range"]::-webkit-slider-runnable-track {
        width: 100%;
        height: 5px;
        background: #18acc4;
        border: none;
        border-radius: 3px;
      }

      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: 2px solid #18acc4;
        height: 32px;
        width: 32px;
        border-radius: 50%;
        background: white;
        margin-top: -16px;
      }

      input[type="range"]:focus {
        outline: none;
      }

      input[type="range"]:focus::-webkit-slider-runnable-track {
        background: #18acc4;
      }

      &__checkboxes {
        display: flex;
        padding: 30px 0 0;

        div {
          display: flex;
          align-items: center;
        }

        .labelName {
          font-size: 1.2em;
          margin-left: 10px;
        }

        div + div {
          margin-left: 16px;
        }
      }
    }
  }
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

.chk input {
  display: none;
}

.chk span {
  border-radius: 4px;
  width: 26px;
  height: 26px;
  display: block;
  background-color: #fff;
  border: 1px solid #ddd;
  margin-top: 2px;
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
}
</style>
