import AbstractView from '../mock/abstract.js';

const createTripInfoCostTemplate = () => {
  return `<p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
</p>`;
};

export default class TripPrice extends AbstractView {
  getTemplate() {
    return createTripInfoCostTemplate();
  }
}


