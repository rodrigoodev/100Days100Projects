var acc = document.getElementsByClassName("accordion");
      var i;
      let lastActive = null;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", (e) => {
          if (lastActive == null) lastActive = e.target;

          if (lastActive.innerHTML == e.target.innerHTML) {
            abrir(e.target)
          } else {
            fechar(lastActive);
            abrir( e.target)
          }

          lastActive = e.target;

        });
      }
      function abrir(acordion){
        acordion.classList.toggle("active");
            var panel = acordion.nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
              panel.style.padding = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + 20 + "px";
              panel.style.padding = "0 0 20px 0";
            }
      }
      function fechar(acordion) {
        acordion.classList.remove("active");
        panel = acordion.nextElementSibling;
        panel.style.maxHeight = null;
        panel.style.padding = null;
      }