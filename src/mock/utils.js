import {RenderPosition} from './data.js';

// генератор случайных данных

const getRandomIntegerNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

//функция создания элемента;

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};

// функция отрисовки созданного элемента;

const renderElement = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN : container.prepend(element); break;
    case RenderPosition.BEFOREEND : container.append(element); break;
  }
};

// функция для рендера элементов страницы (потом должна уйти);

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export {getRandomIntegerNumber, renderTemplate, createElement, renderElement};
