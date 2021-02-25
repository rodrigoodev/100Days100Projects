<template>
  <v-app>
    <div  class="container">
      <div class="container__sliders">
        <Slider :title="allCorner.title" :valueSlider.sync="allCorner.value" />
        <Slider
          :title="topLeftCorner.title"
          :valueSlider.sync="topLeftCorner.value"
        />
        <Slider
          :title="topRightCorner.title"
          :valueSlider.sync="topRightCorner.value"
        />
        <Slider
          :title="bottomLeftCorner.title"
          :valueSlider.sync="bottomLeftCorner.value"
        />
        <Slider
          :title="bottomRightCorner.title"
          :valueSlider.sync="bottomRightCorner.value"
        />
      </div>
      <div class="container__view">
        <div
          class="container__view__div"
          :style="
            `border-radius: ${topLeftCorner.value}% ${topRightCorner.value}% ${bottomRightCorner.value}% ${bottomLeftCorner.value}%;`
          "
        ></div>
        <div class="container__view__divCopy">
<pre><div id="copyText">
<span class="color--purple">.class-div</span> {
  <span style="color: #81b3f1">-webkit-border-radius:</span> {{ topLeftCorner.value }}% {{ topRightCorner.value }}% {{ bottomRightCorner.value }}% {{ bottomLeftCorner.value }}%; 
  <span style="color: #81b3f1">-moz-border-radius:</span>{{ topLeftCorner.value }}% {{ topRightCorner.value }}% {{ bottomRightCorner.value }}% {{ bottomLeftCorner.value }}%;
  <span style="color: #81b3f1">border-radius:</span> {{ topLeftCorner.value }}% {{ topRightCorner.value }}% {{ bottomRightCorner.value }}% {{ bottomLeftCorner.value }}%;
}
</div></pre>
        </div>
       <v-btn elevation="2" style="margin-bottom: 100px"  @click="copyCss()">COPY</v-btn>
      </div>
    </div>
    <v-snackbar
    color="teal"
      v-model="snackbar"
    >
      Texto Copiado
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
//import { EventBus } from './event-bus.js';
export default {
  name: "App",

  components: {
    Footer,
    Slider,
  },

  data: () => ({
    snackbar: false,
    allCorner: { title: "All corners", value: 0 },
    topLeftCorner: { title: "Top left", value: 0 },
    topRightCorner: { title: "Top right", value: 0 },
    bottomLeftCorner: { title: "Bottom left", value: 0 },
    bottomRightCorner: { title: "Bottom right", value: 0 },
  }),
  watch: {
    "allCorner.value"() {
      console.log("mudando");
      this.topLeftCorner.value = this.allCorner.value;
      this.topRightCorner.value = this.allCorner.value;
      this.bottomLeftCorner.value = this.allCorner.value;
      this.bottomRightCorner.value = this.allCorner.value;
    },
  },
  methods:{
    copyCss(){
      let containerid = 'copyText'
      var range = ''
      if (document.selection) {
     range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
     range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    this.snackbar = true;
  }
    }
  }
};
</script>
<style lang="scss" scoped>
.color--purple{
  color:#af90e8;
}
.color--blue{
  color: #81b3f1;
}
.container {
  padding-top: 15px;
  background: #1e1e1e;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  &__view {
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__div {
      width: 350px;
      height: 250px;
      margin: 0 0 40px 0;
      background: white;
    }
    &__divCopy {
      width: 420px;
      padding: 10px;
      color: white;
    }
  }
  &__sliders {
    width: 450px;
  }
}

@media only screen and (max-width: 400px) {
 .container {
   flex-direction: column;
   height: auto;
   width: 100%;
   &__view {
    width: 100%;
    &__div {
      width: 90%;
      margin: 0;
    }
    &__divCopy {
       width: 100%;
       
    }
  }
  &__sliders {
    width: 100%;
    margin: 0 auto;
  }
 }
}
</style>
