# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

![](https://github.com/RodrigoGabrielRB/100Days100Projects/blob/main/011-FAQ-challenge/faq-accordion-card-main/design/desktop-design.jpg?raw=true)

Here is my app

### Links

- Solution URL: [Add solution URL here](https://github.com/RodrigoGabrielRB/100Days100Projects/tree/main/011-FAQ-challenge/faq-accordion-card-main)
- Live Site URL: [100days](http://rodrigorgrb.com.br/100days/011/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

Here, i created the logic to open and close the acordion menu
```js
if (lastActive.innerHTML == e.target.innerHTML) {
  abrir(e.target)
} else {
  fechar(lastActive);
  abrir( e.target)
}
```

### Continued development

Yeah, in this project, i have pendents things to do, for example mobile site, the actual site is not responsive


## Author

- Website - [http://rodrigorgrb.com.br](http://rodrigorgrb.com.br)
- Frontend Mentor - [@RodrigoGabrielRB](https://www.frontendmentor.io/profile/RodrigoGabrielRB)





