import {createElement} from '../mock/utils.js';

const createTripBoardTemplate = () => {
  return `<section class='trip-events'>
  </section>`;
};

export default class TripBoard {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createTripBoardTemplate();
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}
