import AbstractView from '../mock/abstract.js';

const createTripEventsListTemplate = () => {
  return `<ul class="trip-events__list">
</ul>`;
};

export default class TripEventList extends AbstractView {
  getTemplate() {
    return createTripEventsListTemplate();
  }
}

