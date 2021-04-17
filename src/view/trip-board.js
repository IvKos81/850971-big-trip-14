import AbstractView from '../mock/abstract.js';

const createTripBoardTemplate = () => {
  return `<section class='trip-events'>
  </section>`;
};

export default class TripBoard extends AbstractView {
  getTemplate() {
    return createTripBoardTemplate();
  }
}
