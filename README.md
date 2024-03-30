# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources][#useful-resources)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

<img width="584" alt="Desktop-design" src="https://github.com/juanpablobracco/Newsletter-sign-up-form-with-success-message/assets/64668332/938a388e-5347-458f-ae99-e2361008f26c">
<img width="590" alt="Desktop-error-design" src="https://github.com/juanpablobracco/Newsletter-sign-up-form-with-success-message/assets/64668332/d0fa360c-2134-4487-8001-98505ec54997">
<img width="593" alt="Desktop-continue" src="https://github.com/juanpablobracco/Newsletter-sign-up-form-with-success-message/assets/64668332/b026f061-3c95-4ffa-8328-be78323ff2b4">

<img width="185" alt="Movil-design" src="https://github.com/juanpablobracco/Newsletter-sign-up-form-with-success-message/assets/64668332/700f392d-01c2-41b1-8dab-66748be72ad0">

### Links

- Live Site URL: (https://newsletter-sign-up-form-sigma.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### Useful resources and programming procces

#### Maqueteado:

  - Styling desktop and mobil layout.
- js:
  - form listener handler => document.getElementById('form').addEventListener('submit', (Event) => {}.
  - regular expretion to compare emails => https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation.
  - Change innerText to error message.

- 1 _ g3neral div

#### JS:
 - regular expretion to compare emails => https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation.
   
  Test your REGEX code: => https://regex101.com
  
  REGEX => https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  (...) We get a more practical implementation of RFC 2822 if we omit the syntax using double quotes and square brackets. It will still match 99.99% of all email addresses in actual use today.
  REGEX: 
  [a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?

#### LIST STYLE
  https://developer.mozilla.org/en-US/docs/Web/CSS/list-style 
