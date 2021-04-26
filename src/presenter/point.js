
import {RenderPosition} from '../mock/data.js';
import {renderElement, replace, remove} from '../mock/render.js';

import TripEventView from '../view/trip-events-item.js';
import TripEventEditView from '../view/event-edit.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class RoutePoint {
  constructor(pointListContainer, changeData, changeMode) {

    this._pointListContainer = pointListContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._tripEventComponent = null;
    this._tripEventEditComponent = null;
    this._mode = Mode.DEFAULT;

    this._handleFavouriteClick = this._handleFavouriteClick.bind(this);
    this._onEscDownHandler = this._onEscDownHandler.bind(this);
    this._handleEditClick = this._handleEditClick.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  init(point) {

    this._point = point;

    const previousTripEventComponent = this._tripEventComponent;
    const previousTripEventEditComponent = this._tripEventEditComponent;

    this._tripEventComponent = new TripEventView(point);
    this._tripEventEditComponent = new TripEventEditView(point);

    this._tripEventComponent.setEditClickHandler(this._handleEditClick);
    this._tripEventComponent.setFavouriteClickHandler(this._handleFavouriteClick);
    this._tripEventEditComponent.setFormSubmitHandler(this._handleFormSubmit);
    this._tripEventEditComponent.setClickHandler(this._handleClick);

    if (previousTripEventComponent === null || previousTripEventEditComponent === null) {
      renderElement (this._pointListContainer, this._tripEventComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      replace(this._tripEventComponent, previousTripEventComponent);
    }

    if (this._mode === Mode.EDITING) {
      replace(this._tripEventEditComponent, previousTripEventEditComponent);
    }

    remove(previousTripEventComponent);
    remove(previousTripEventEditComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._formToTripPoint();
    }
  }

  destroy() {
    remove(this._tripEventComponent);
    remove(this._tripEventEditComponent);
  }

  //метода замены пункта поездки на форму
  _tripPointToForm() {
    replace(this._tripEventEditComponent, this._tripEventComponent);
    document.addEventListener('keydown', this._onEscDownHandler);
    this._changeMode();
    this._mode = Mode.EDITING;
  }

  //метод замена формы на пункт поездки
  _formToTripPoint() {
    replace(this._tripEventComponent, this._tripEventEditComponent);
    document.removeEventListener('keydown', this._onEscDownHandler);
    this._mode = Mode.DEFAULT;
  }


  //метод обработки кнопки избранное
  _handleFavouriteClick() {
    this._changeData(
      Object.assign({}, this._point, {isFavourite: !this._point.isFavourite}),
    );
  }

  // метод обработки события по Esc
  _onEscDownHandler(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this._formToTripPoint();
    }
  }

  // замена пункта поездки на форму для редактирования по клику
  _handleEditClick() {
    this._tripPointToForm();
  }

  // замена формы для редактирования на пункт поездки по Save
  _handleFormSubmit(point) {
    this._changeData(point);
    this._formToTripPoint();
  }

  // замена формы для редактирования на пункт поездки по клику на стрелку
  _handleClick() {
    this._formToTripPoint();
  }
}

