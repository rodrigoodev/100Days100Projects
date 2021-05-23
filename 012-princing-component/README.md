# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](https://github.com/RodrigoGabrielRB/100Days100Projects/blob/main/012-princing-component/design/desktop-preview.jpg?raw=true)

Here is my app

### Links

- Live Site URL: [100days](http://rodrigorgrb.com.br/100days/012/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

Here, i created the logic to open and close the acordion menu
```js
isAnual = !isAnual
        
  let lista = document.querySelectorAll(".card");
  
  if(isAnual){
    lista[0].childNodes[3].innerHTML = "R$ 199.99";
    lista[1].childNodes[3].innerHTML = "R$ 249.99";
    lista[2].childNodes[3].innerHTML = "R$ 399.99";
  }else{
    lista[0].childNodes[3].innerHTML = "R$ 19.99";
    lista[1].childNodes[3].innerHTML = "R$ 24.99";
    lista[2].childNodes[3].innerHTML = "R$ 39.99";
  }
```

### Continued development

Yeah, in this project, i have pendents things to do, for example mobile site, the actual site is not responsive


## Author

- Website - [http://rodrigorgrb.com.br](http://rodrigorgrb.com.br)
- Frontend Mentor - [@RodrigoGabrielRB](https://www.frontendmentor.io/profile/RodrigoGabrielRB)




