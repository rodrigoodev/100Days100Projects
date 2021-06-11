function handlerClick(theme){
    changeTheme(document.body, document.body.className, theme);
}

function changeTheme(elemento, antiga, nova) {
    elemento.classList.remove(antiga);
    elemento.classList.add(nova);
}