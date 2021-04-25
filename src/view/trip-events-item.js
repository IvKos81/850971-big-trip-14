// eslint-disable-next-line no-unused-vars
import dayjs from 'dayjs';
import AbstractView from '../mock/abstract.js';
import {showDurationEvent} from '../mock/utils.js';

const createTripEventsItemTemplate = (point) => {
  const {destination, offer, price, isFavourite, dateFrom, dateTo} = point;

  const active = isFavourite ? 'event__favorite-btn event__favorite-btn--active' : 'event__favorite-btn';

  const eventDuration = Math.floor((dateTo - dateFrom)/60000);
  const eventDurationHours = Math.floor(eventDuration/60);
  const eventDurationMinutes = eventDuration - eventDurationHours*60;

  const createOffersList = (off) => {
    const offersList = off.offersSelected.map((offer) => `
      <li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </li>
    `).join('');
    return offersList;
  };

  return `<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="${dateFrom}">${dateFrom.format('MMM D')}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${offer.type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${offer.type} ${destination.name}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${dateFrom}">${dateFrom.format('hh:mm')}</time>
        &mdash;
        <time class="event__end-time" datetime="${dateTo}">${dateTo.format('hh:mm')}</time>
      </p>
      <p class="event__duration">${showDurationEvent(eventDuration, eventDurationHours, eventDurationMinutes)}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${price}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${createOffersList(offer)}
    </ul>
    <button class="event__favorite-btn event__favorite-btn${active}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`;
};

export default class TripEvent extends AbstractView {
  constructor(point) {
    super();
    this._point = point;
    this._editClickHandler = this._editClickHandler.bind(this);
    this._favouriteClickHandler = this._favouriteClickHandler.bind(this);
  }
  getTemplate() {
    return createTripEventsItemTemplate(this._point);
  }

  _favouriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favouriteClick();
  }

  _editClickHandler(evt) {
    evt.preventDefault();
    this._callback.editClick();
  }

  setEditClickHandler(callback) {
    this._callback.editClick = callback;
    this.getElement().querySelector('.event__rollup-btn').addEventListener('click', this._editClickHandler);
  }

  setFavouriteClickHandler(callback) {
    this._callback.favouriteClick = callback;
    this.getElement().querySelector('.event__favorite-btn').addEventListener('click', this._favouriteClickHandler);
  }
}
