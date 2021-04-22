import {RenderPosition, SortType} from '../mock/data.js';
import {renderElement} from '../mock/render.js';

import NoEventMessageView from '../view/no-event-message.js';
import SortView from '../view/trip-sort.js';
import TripEventListView from '../view/trip-events-list.js';
import {updateItem, sortPointPriceDown} from '../mock/utils.js';
import RoutePointPresenter from './point.js';

export default class Trip {
  constructor(tripContainer) {
    this._tripContainer = tripContainer;

    this._routePointPresenter = {};

    this._currentSortType = SortType.DAY;

    this._handlePointChange = this._handlePointChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleSortTypeChange = this._handleModeChange.bind(this);

    this._sortComponent = new SortView();
    this._tripEventsListComponent = new TripEventListView();
    this._noEventMessageComponent = new NoEventMessageView();
  }

  // инициализация отрисовки
  init(tripPoints) {

    this._tripPoints = tripPoints.slice();

    this._sourcedTripPoints = tripPoints.slice();

    this._renderTripRoute();
  }

  // метод сортировки списка пунктов
  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }
    this._sortPoints(sortType);
  }

  // метод сброса форм редактирования
  _handleModeChange() {
    Object
      .values(this._routePointPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  //метод обновления пункта
  _handlePointChange(updatedPoint) {
    this._tripPoints = updateItem(this._tripPoints, updatedPoint);
    this._sourcedTripPoints = updateItem(this._sourcedTripPoints, updatedPoint);
    this._routePointPresenter[updatedPoint.id].init(updatedPoint);
  }

  _sortPoints(sortType) {
    switch(sortType) {
      case SortType.PRICE: this._tripPoints.sort(sortPointPriceDown); break;
      default: this._tripPoints = this._sourcedTripPoints.slice();
    }

    this._currentSortType = sortType;

    this._clearPoints();
    this._renderPoints(0, this._tripPoints.length);
  }

  //метод отрисовки сортировки
  _renderSort() {
    renderElement(this._tripContainer, this._sortComponent, RenderPosition.BEFOREEND);
    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  //метод отрисовки пункта
  _renderPoint(tripPoint) {
    const pointPresenter = new RoutePointPresenter(this._tripEventsListComponent, this._handlePointChange, this._handleModeChange);
    pointPresenter.init(tripPoint);

    this._routePointPresenter[tripPoint.id] = pointPresenter;
  }

  // метод отрисовки всего списка пунктов
  _renderPoints(from, to) {
    this._tripPoints.slice(from, to).forEach((tripPoint) => this._renderPoint(tripPoint));
  }

  //метод очистки всего списка пунктов
  _clearPoints() {
    Object
      .values(this._routePointPresenter)
      .forEach((presenter) => presenter.destroy());
    this._routePointPresenter = {};
  }

  //метод отрисовки контейнера для списка пунктов
  _renderEventsListContainer() {
    renderElement(this._tripContainer, this._tripEventsListComponent, RenderPosition.BEFOREEND);
  }

  // метод отрисовки начального сообщения
  _renderNoPoints() {
    renderElement(this._tripContainer, this._noEventMessageComponent, RenderPosition.AFTERBEGIN);
  }

  //метод отрисовки всего маршрута с сортировкой
  _renderTripRoute() {
    if (this._tripPoints.length === 0) {
      this._renderNoPoints();
      return;
    }

    //отрисовка сортировки;
    this._renderSort();

    //отрисовка контейнера списка для пунктов поездки
    this._renderEventsListContainer();

    // отрисовка пунктов поездки
    this._renderPoints(0, this._tripPoints.length);
  }
}

