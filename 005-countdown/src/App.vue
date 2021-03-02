<template>
  <v-app>
    <div class="background">
    </div>
      <div class="countdown">
        <h1>Ano Novo s2</h1>
        <div class="countdown__container">
          <Circular :value="dias" :bar="daysBar" texto="Dias" />
          <Circular :value="horas" :bar="hoursBar" texto="Horas" />
          <Circular :value="minutos" :bar="minutesBar" texto="Minutos" />
          <Circular :value="segundos" :bar="secondsBar" texto="Segundos" />
        </div>
      </div>
  </v-app>
</template>

<script>
import Circular from "@/components/Circular";
export default {
  name: "App",

  components: {
    Circular,
  },

  data: () => ({
    newYear: "1 Jan 2022",
    value: 50,
    days: 30,
    daysBar: 100,
    hours: 24,
    hoursBar: 100,
    minutes: 60,
    minutesBar: 100,
    seconds: 60,
    secondsBar: 100,
  }),
  computed: {
    dias() {
      return this.formatTime(this.days);
    },
    horas() {
      return this.formatTime(this.hours);
    },
    minutos() {
      return this.formatTime(this.minutes);
    },
    segundos() {
      return this.formatTime(this.seconds);
    },
  },
  methods: {
    formatTime(value) {
      let time = value;
      return time < 10 ? `0${time}` : time;
    },
    countdown() {
      const newYearDate = new Date(this.newYear);
      const currentDate = new Date();

      const totalSeconds = (newYearDate - currentDate) / 1000;

      this.days = Math.floor(totalSeconds / 3600 / 24);
      this.hours = Math.floor(totalSeconds / 3600) % 24;
      this.minutes = Math.floor(totalSeconds / 60) % 60;
      this.seconds = Math.floor(totalSeconds) % 60;

      this.daysBar = Math.floor((100 * this.days) / 365);
      this.hoursBar = Math.floor((100 * this.hours) / 24);
      this.minutesBar = Math.floor((100 * this.minutes) / 60);
      this.secondsBar = Math.floor((100 * this.seconds) / 60);
    },
  },
  created() {
    this.countdown();

    setInterval(this.countdown, 1000);
  },
};
</script>

<style scoped>
.background{
  background-size: cover;
  background-position: center center;
  background-image: url('https://previews.123rf.com/images/djem/djem1510/djem151000011/46852799-abstract-particles-connection-on-the-white-background.jpg');
  width: 100%;
  min-height: 100vh;
  opacity: 0.3;
  position: fixed;
}
.countdown h1 {
  text-align: center;
  margin: 20px 0 40px 0;
}
.countdown__container {
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
}


</style>
