import AbstractView from '../mock/abstract.js';

const createTripNoEventsMessageTemplate = () => {
  return `<div class='trip-events__msg>
  <p class='trip-events__message'>Please add new event.</p>
  </div>`;
};

export default class NoEventMessage extends AbstractView {
  getTemplate() {
    return createTripNoEventsMessageTemplate();
  }
}
