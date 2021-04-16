import {createElement} from '../mock/utils.js';

const createTripNoEventsMessageTemplate = () => {
  return `<div class='trip-events__msg>
  <p class='trip-events__message'>Please add new event.</p>
  </div>`;
};

export default class NoEventMessage {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createTripNoEventsMessageTemplate(this._point);
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
