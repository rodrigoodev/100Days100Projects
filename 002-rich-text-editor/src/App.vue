<template>
  <v-app>
    <div class="wrapper">
      <v-row justify="center">
        <!--  <v-dialog
          v-model="dialog"
          persistent
          transition="dialog-top-transition"
          max-width="600px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
               Open Dialog
             </v-btn>
          </template>
          <v-card class="modal">
            <h3 class="modal__title">Link Externo</h3>
            <v-text-field
              v-model="urlExterna"
              class="modal__text-field"
              label="URL:"
              outlined
              autofocus
              clearable
            ></v-text-field>
            <div class="modal__action">
              <v-btn
                depressed
                color="error"
                outlined
                class="mr-2"
                @click="limpar"
              >
                Cancelar</v-btn
              >
              <v-btn depressed color="primary" @click="funcaoExecutar"
                >Inserir</v-btn
              >
            </div>
          </v-card>
        </v-dialog> -->
      </v-row>
      <v-container class="container">
        <div class="container__editor">
          <div class="container__editor__menu">
            <v-tooltip
              bottom
              v-for="(btn, index) in buttons"
              :key="index"
              open-delay="1500"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  icon
                  color="black"
                  @click="btn.funcao"
                >
                  <v-icon>{{ btn.icon }}</v-icon>
                </v-btn>
              </template>
              <span>{{ btn.desc }}</span>
            </v-tooltip>
          </div>
          <div id="container__editor__editable" class="container__editor__editable" contenteditable="true">
            {{ ranges }}Header Bold Italic Codigo Citacao Underline Alinhamento
            Link Desafio image <br />
          </div>
        </div>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    var self = this;

    return {
      urlExterna: "",
      ranges: null,
      dialog: false,
      fontSize: 3,
      buttons: [
        {
          cmd: "bold",
          icon: "mdi-format-bold",
          desc: "Deixa o texto selecionado em Negrito",
          funcao: () => {
            self.execCommand("bold");
          },
        },
        {
          cmd: "italic",
          icon: "mdi-format-italic",
          desc: "Deixa o texto selecionado em Itálico",
          funcao: () => {
            self.execCommand("italic", false, null);
          },
        },
        {
          cmd: "underline",
          icon: "mdi-format-underline",
          desc: "Deixa o texto selecionado com Underline",
          funcao: () => {
            self.execCommand("underline", false, null);
          },
        },
        {
          cmd: "fontSize",
          icon: "mdi-format-font-size-increase",
          desc: "Aumenta a fonte do texto selecionado",
          funcao: () => {
            self.setFont("fontSize", true);
          },
        },
        {
          cmd: "fontSize",
          icon: "mdi-format-font-size-decrease",
          desc: "Diminui a fonte do texto selecionado",
          funcao: () => {
            self.setFont("fontSize", false);
          },
        },
        {
          cmd: "insertHTML",
          icon: "mdi-image-plus",
          desc: "Insere uma imagem",
          funcao: () => {
            var link = prompt("Entre com a URL da imagem:", "http://");
            if (link) {
              var img = "<img src='" + link + "' width='400'>";
              this.execCommand("insertHTML", img);
            }
          },
        },
        {
          cmd: "insertLink",
          icon: "mdi-link-plus",
          desc: "Insere um link ao texto selecionado",
          funcao: () => {
            var link = prompt("Entre com a URL:", "http://");
            if (link) {
              document.execCommand("createLink", false, link);
            }
          },
        },
        {
          cmd: "foreColor",
          icon: "mdi-format-color-text",
          desc: "Insere um link ao texto selecionado",
          funcao: () => {
            var link = prompt("Entre com uma cor em hexadecimal:", "#CC00CC");
            if (link) {
              document.execCommand("foreColor", false, link);
            }
          },
        },
        {
          cmd: "justifyCenter",
          icon: "mdi-format-align-center",
          desc: "Centralizar",
          funcao: () => {
            self.execCommand("justifyCenter", false, null);
          },
        },
        {
          cmd: "justifyFull",
          icon: "mdi-format-align-justify",
          desc: "Justificar",
          funcao: () => {
            self.execCommand("justifyFull", false, null);
          },
        },
        {
          cmd: "justifyLeft",
          icon: "mdi-format-align-left",
          desc: "Alinhamento a esquerda",
          funcao: () => {
            self.execCommand("justifyLeft", false, null);
          },
        },
        {
          cmd: "justifyRight",
          icon: "mdi-format-align-right",
          desc: "Alinhamento a direita",
          funcao: () => {
            self.execCommand("justifyRight", false, null);
          },
        },
        {
          cmd: "insertOrderedList",
          icon: "mdi-format-list-numbered",
          desc: "Criar lista ordenada",
          funcao: () => {
            self.execCommand("insertOrderedList", false, null);
          },
        },
        {
          cmd: "insertUnorderedList",
          icon: "mdi-format-list-bulleted",
          desc: "Criar lista não-ordenada",
          funcao: () => {
            self.execCommand("insertUnorderedList", false, null);
          },
        },
        {
          cmd: "print",
          icon: "mdi-printer",
          desc: "Imprimir documento",
          funcao: () => {
            self.print();
          },
        },
      ],
    };
  },
  methods: {
    limpar() {
      this.urlExterna = "";
      this.dialog = false;
    },
    //functions of button
    setFont(cmd, value) {
      this.fontSize = value ? this.fontSize + 1 : this.fontSize - 1;
      let number = this.limitNumberWithinRange(this.fontSize);
      this.execCommand(cmd, number);
    },
    // openModal(funcao) {
    //   this.saveSelection();
    //   self.funcaoExecutar = funcao
    //   this.dialog = true;
    // },
    // saveSelection() {
    //   console.log("chamando save selection")
    //   if (window.getSelection) {
    //     var sel = window.getSelection();
    //     if (sel.getRangeAt && sel.rangeCount) {
    //       var ranges = [];
    //       for (var i = 0, len = sel.rangeCount; i < len; ++i) {
    //         ranges.push(sel.getRangeAt(i));
    //       }
    //       self.ranges = ranges;
    //     }
    //   } else if (document.selection && document.selection.createRange) {
    //     self.ranges = document.selection.createRange();
    //   }
    //   //this.ranges =  null;
    //   console.log(self.ranges)
    // },
    // restoreSelection() {
    //   console.log('chamando restore')
    //   if (self.ranges) {
    //     if (window.getSelection) {
    //       var sel = window.getSelection();
    //       sel.removeAllRanges();
    //       for (var i = 0, len = self.ranges.length; i < len; ++i) {
    //         sel.addRange(self.ranges[i]);
    //       }
    //     } else if (document.selection && self.ranges.select) {
    //       self.ranges.select();
    //     }
    //   }
    // },
    print() {
      this.$htmlToPaper('container__editor__editable')
    },
    execCommand(command, value = null) {
      document.execCommand(command, false, value);
    },
    //Helper functions
    limitNumberWithinRange(num, min = 1, max = 7) {
      const MIN = min || 1;
      const MAX = max || 7;
      const parsed = parseInt(num);
      return Math.min(Math.max(parsed, MIN), MAX);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: #edeced;
  height: 100%;
}
.container {
  &__editor {
    background: white;
    margin: 100px auto;
    padding: 20px;
    max-width: 750px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    &__editable {
      min-height: 300px;
      height: auto;
      max-width: 600px;
      margin: 20px 10px;
    }
  }
}

.modal {
  padding: 20px;
  &__title {
    margin-bottom: 20px;
  }
  &__action {
    display: flex;
    justify-content: flex-end;
  }
}

[contenteditable] {
  outline: 0px solid transparent;
}
</style>
