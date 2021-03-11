<template>
  <v-app>
    <div class="container">
      <v-card class="container__card" v-show="mostrarRespostas">
        <div class="container__header">
          <h1>{{ pergunta.pergunta }}</h1>
          <v-radio-group v-model="respostaUsuario">
            <v-radio
              v-for="n in pergunta.alternativas"
              :key="n"
              :label="`${n}`"
              :value="n"
            ></v-radio>
          </v-radio-group>
        </div>
        <v-btn color="primary" x-large class="container__button" @click="verificarResposta()">
          Proxima Pergunta
        </v-btn>
      </v-card>
       <v-card class="container__card container__parabens" v-show="!mostrarRespostas" v-html="respostaFinal">
       
      </v-card>
    </div>
   
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    mostrarRespostas: true,
    indice: 0,
    indiceTotal: 0,
    totalAcertos: 0,
    respostaUsuario: "",
    pergunta: {},
    perguntas: [
      {
        id: 1,
        pergunta: "Falando de marketing digital, o que é cta?",
        alternativas: ["Controle tatico Aereo", "Chamada Tatica Aerea", "Centro de transporte aves", "Call To Action"],
        resposta: "Call To Action",
      },
      {
        id: 2,
        pergunta: "Em marketing digital o que é Persona?",
        alternativas: ["O cliente ideal", "Marca de roupa", "Personagem de desenho animado", "Marca de perfume"],
        resposta: "O cliente ideal",
      },
      {
        id: 3,
        pergunta: "O que é afiliado",
        alternativas: ["Nome de filme", "Quem vende os proprios produtos", "Filho de outro pai", "Quem vende produtos de outra pessoa"],
        resposta: "Quem vende produtos de outra pessoa",
      },
    ],
  }),
  computed: {
    respostaFinal(){
      
         return this.totalAcertos == 0 ? `Pelo seu teste, percebemos que não conhece sobre marketing digital, venha neste perfil para aprender mais sobre <a href="https://msha.ke/jeislammkt/" target="_Blank">Quero aprender marketing digital</a><br><span style='font-size:100px;'>&#9757;</span>` : 
         `Parabéns!!! você acertou ${this.totalAcertos} de ${this.indiceTotal} <p style="font-size:100px">&#128540;</p>`
     
    }
  },
  methods: {
    verificarResposta() {
      if (this.respostaUsuario && this.respostaUsuario != "") {
        if (this.respostaUsuario == this.pergunta.resposta) {
          this.totalAcertos += 1;
        } else {
          console.log("error");
        }

        this.indice += 1;

        if (this.indice < this.indiceTotal)
          this.pergunta = this.perguntas[this.indice];
        else {
          console.log("Total acertos: " + this.totalAcertos);
          this.mostrarRespostas = false 
        }
      } else {
        alert("Selecione algo");
      }
    },
    loadQuiz() {
      this.pergunta = this.perguntas[0];
      this.indiceTotal = this.perguntas.length;
    },
  },
  created() {
    this.loadQuiz();
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
}
.container__card{
  min-width: 500px;
  max-width: 500px;
  margin: 0 auto;
  align-self: center;
}
.container__header {
  padding: 40px 40px 10px 40px;
}

.container__header h1{
  font-size:1.5em;
  margin-bottom:20px;
}

.container__button{
  width: 100%;
  height: 20px;
  border-radius: 0;
}

.container__parabens{
  width: 450px;
  text-align: center;
  padding:10px;
}
</style>
