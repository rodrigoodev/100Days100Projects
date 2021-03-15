const checkbox = document.getElementById('checkbox');
const texto = document.getElementById("texto");
let lighter = true;

checkbox.addEventListener('change', () => {
    //change theme
    document.body.classList.toggle('dark')
    lighter = !lighter;

    if(lighter){
        texto.innerText = "Mode dark OFF"
    }else{
        texto.innerText = "Mode dark ON"
    }   
    
})