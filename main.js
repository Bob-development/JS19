import { Component } from "./core/Component";
import { render } from "./core/render";

import './common/style.css';

const app = document.querySelector('#app');

const appsWrapperInside = new Component({
  tagName : 'div',
  className : 'appsWrapperInside'
}).toHtml()

render(appsWrapperInside, app);

//MAKE 2 INPUTS
const firstNameInput = new Component({
  tagName : 'input',
  className : 'input--first_name',
  placeholder : 'Enter ur name here...'
}).toHtml()

render(firstNameInput, appsWrapperInside);

//SHOW VALUE IN CONSOLE
firstNameInput.addEventListener("keyup", (e) => {
  console.log(e.target.value);
})

const secondNameInput = new Component({
  tagName : 'input',
  className : 'input--second_name',
  placeholder : 'Enter ur surname here...'
}).toHtml()

render(secondNameInput, appsWrapperInside);

//SHOW VALUE IN CONSOLE
secondNameInput.addEventListener("keyup", (e) => {
  console.log(e.target.value);
})

//MAKE A BTN TO SEND FOR US OBJ
const sendButton = new Component({
  tagName : 'button',
  id : 'button--send',
  textContent : 'SEND!'
}).toHtml()

render(sendButton, appsWrapperInside);

sendButton.addEventListener("click", (e) => {
  const user = {
    name : firstNameInput.value,
    surname : secondNameInput.value,
    wasSended : true
  }

  return console.log(user);
})