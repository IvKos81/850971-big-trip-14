import {createElement} from '../mock/utils.js';

const createTripFiltersTemplate = (everything, future, past) => {
  return `<form class="trip-filters" action="#" method="get">
  <div class="trip-filters__filter">
    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
    <label class="trip-filters__filter-label" for="filter-everything">Everything (${everything})</label>
  </div>

  <div class="trip-filters__filter">
    <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
    <label class="trip-filters__filter-label" for="filter-future">Future (${future})</label>
  </div>

  <div class="trip-filters__filter">
    <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
    <label class="trip-filters__filter-label" for="filter-past">Past (${past})</label>
  </div>

  <button class="visually-hidden" type="submit">Accept filter</button>
</form>`;
};

export default class Filters {
  constructor(everything, future, past) {
    this._everything = everything;
    this._future = future;
    this._past = past;
    this._element = null;
  }
  getTemplate() {
    return createTripFiltersTemplate(this._everything, this._future, this._past);
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
