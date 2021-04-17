import {RenderPosition} from './data.js';
import Abstract from './abstract.js';

// функция отрисовки созданного элемента;

const renderElement = (container, child, place) => {

  if (container instanceof Abstract) {
    container = container.getElement();
  }

  if (child instanceof Abstract) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN : container.prepend(child); break;
    case RenderPosition.BEFOREEND : container.append(child); break;
  }
};

// функция для рендера элементов страницы (потом должна уйти);

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// замена дочерного элемента в компоненте

const replace = (newChild, oldChild) => {
  if (oldChild instanceof Abstract) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof Abstract) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error('Can\'t replace unexisting elements');
  }

  parent.replaceChild(newChild, oldChild);
};

export {renderElement, renderTemplate, replace};
