const card = document.querySelector('.card');
const container = document.querySelector('.container')

//items
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const purcharse = document.querySelector('.purcharse')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')

container.addEventListener('mousemove', (e) => {
    console.log("feijao")
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
})

container.addEventListener("mouseenter" , e => {
    card.style.transition = 'none'
    title.style.transform = "translateZ(150px)"
    sneaker.style.transform = "translateZ(150px) rotate(-45deg)"
    purcharse.style.transform = "translateZ(100px)"
    description.style.transform = "translateZ(150px)"
    sizes.style.transform = "translateZ(150px)"
})

container.addEventListener("mouseleave" , e => {
    card.style.transition = 'all 0.5s ease'
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';

    title.style.transform = "translateZ(0px)"
    sneaker.style.transform = "translateZ(0px)  rotate(0deg)"
    purcharse.style.transform = "translateZ(0px)"
    description.style.transform = "translateZ(0px)"
    sizes.style.transform = "translateZ(0px)"
})