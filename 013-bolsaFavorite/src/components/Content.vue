<template>
  <div class="container">
    <div class="container__title">
      <h2>Bolsas favoritas</h2>
      <p>
        Adicione bolsas de cursos e faculdades do seu interesse e receba
        atualizações com as melhores ofertas disponíveis.
      </p>
    </div>
    <div class="container__filter">
      <ul>
        <li
          v-for="item in headerSemestre"
          :key="item.id"
          :class="{ active: item.isActive }"
          @click="active(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="container__containerCards">
      <div
        class="container__containerCards__card"
        @click="isModalAddCourseOpen = true"
      >
        <div class="container__containerCards__card__plusCircle">
          <i class="fas fa-plus"></i>
        </div>
        <p class="container__containerCards__card__title">Adicionar bolsa</p>
        <p class="container__containerCards__card__label">
          Clique aqui para adicionar bolsas de cursos do seu interesse
        </p>
      </div>

      <CardFavorite
        v-for="course in favoriteCourseFiltered"
        :key="course.id"
        :course="course"
        @deleteCourse="deleteCourse"
      />
    </div>
    <Modal
      :isModalAddCourseOpen="isModalAddCourseOpen"
      @closeModalAddCourse="closeModalAddCourse"
      @coursesToFavorite="addCourseToFavorite"
    />
  </div>
</template>

<script>
import Modal from "./Modal";
import CardFavorite from "./CardFavorite";

export default {
  components: { Modal, CardFavorite },
  data: () => ({
    isModalAddCourseOpen: false,
    filter: "all",
    headerSemestre: [
      {
        id: 1,
        name: "Todos os semestres",
        isActive: true,
        enrollment_semester: "all",
      },
      {
        id: 2,
        name: "2º semestre de 2019",
        isActive: false,
        enrollment_semester: "2019.2",
      },
      {
        id: 3,
        name: "1º semestre de 2020",
        isActive: false,
        enrollment_semester: "2020.1",
      },
    ],
    favoriteCourse: [],
  }),
  computed: {
    favoriteCourseFiltered() {
      return this.orderBySemester();
    },
  },
  methods: {
    deleteCourse(id) {
      let indice = this.favoriteCourse.indexOf(id);
      this.favoriteCourse.splice(indice, 1);
    },
    closeModalAddCourse() {
      this.isModalAddCourseOpen = false;
    },
    addCourseToFavorite(courses) {
      let newFavoriteList = [];
      let idsInFavorite = this.favoriteCourse.map((item) => item.id);

      courses.map((item) => {
        if (idsInFavorite.indexOf(item.id) < 0)
          return newFavoriteList.push(item);
      });

      this.favoriteCourse = [...this.favoriteCourse, ...newFavoriteList];
    },
    orderBySemester() {
      let filtered = [];
      if (this.filter == "all") {
        let allFilters = this.headerSemestre.map(
          (item) => item.enrollment_semester
        );
        filtered = this.favoriteCourse.filter(
          (item) => allFilters.indexOf(item.enrollment_semester) >= 0
        );
      } else {
        filtered = this.favoriteCourse.filter(
          (item) => item.enrollment_semester == this.filter
        );
      }
      return filtered || [];
    },
    active(item) {
      this.desactiveAll();
      item.isActive = true;
      this.filter = item.enrollment_semester;
      this.orderBySemester();
    },
    desactiveAll() {
      this.headerSemestre.forEach((item) => (item.isActive = false));
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0px 20px;
  &__title {
    color: #1f2d30;
    h2 {
      font-size: 2.2em;
    }
    p {
      margin: 10px 0 0;
      font-size: 1.2em;
      line-height: 1.4em;
    }
  }
  &__filter {
    margin-top: 20px;
    ul {
      border: 1px solid #007a8d;
      border-radius: 8px;
      list-style-type: none;
      li:first-child {
        border-radius: 6px 6px 0px 0px;
      }
      li {
        padding: 15px;
        text-align: center;
        border-bottom: 1px solid #007a8d;
        font-weight: bolder;
        color: #007a8d;
      }
      li:last-child {
        border-bottom: none;
      }
      .active {
        background-color: #007a8d;
        color: white;
      }
    }
  }
  &__containerCards {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    &__card {
      margin: 20px 0px;
      background-color: white;
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
      width: 100%;
      text-align: center;
      border-radius: 6px;
      padding: 40px;
      color: #1f2d30;

      &__plusCircle {
        color: #18acc4;
        width: 120px;
        height: 120px;
        padding: 24px 11px;
        margin: 0px auto;
        font-size: 60px;
        border: 6px solid #18acc4;
        border-radius: 50%;
      }
      &__title {
        margin: 20px 0 0 0;
        font-size: 1.8em;
        font-weight: bold;
      }
      &__label {
        font-size: 1.2em;
        line-height: 1.4em;
        margin-top: 6px;
        color: #1f2d30;
      }
    }
  }
}
</style>
