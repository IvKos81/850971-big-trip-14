import {RenderPosition} from './mock/data.js';
import {renderElement} from './mock/utils.js';

import {NUMBER_OF_ROUTE_POINTS} from './mock/mockdata.js';
import {generateMockRoutePoint} from './mock/mock.js';
import {generateFilterEverything, generateFilterPast, generateFilterFuture} from './mock/filter.js';

import TripInfoView from './view/trip-info.js';
import TripPriceView from './view/trip-info-cost.js';
import TripNavigationView from './view/trip-navigation.js';
import FiltersView from './view/trip-filters.js';
import NoEventMessageView from './view/no-event-message.js';
import SortView from './view/trip-sort.js';
import TripEventListView from './view/trip-events-list.js';
import TripEventView from './view/trip-events-item.js';
import TripEventEditView from './view/event-edit.js';

// генерация моковых точек маршрута

const points = new Array(NUMBER_OF_ROUTE_POINTS).fill().map(() => generateMockRoutePoint());

//генерация данных для моковых фильтров

const everythingFilter = generateFilterEverything(points);
const futureFilter = generateFilterFuture(points);
const pastFilter = generateFilterPast(points);

// отрисовка инфо;

const tripMain = document.querySelector('.trip-main');
renderElement(tripMain, new TripInfoView().getElement(), RenderPosition.AFTERBEGIN);

// отрисовка цены;

const tripInfo = tripMain.querySelector('.trip-main__trip-info');
renderElement(tripInfo, new TripPriceView().getElement(), RenderPosition.BEFOREEND);


//отрисовка меню;

const tripNavigation = tripMain.querySelector('.trip-controls__navigation');
renderElement(tripNavigation, new TripNavigationView().getElement(), RenderPosition.BEFOREEND);


// отрисовка фильтров;

const tripFilters = tripMain.querySelector('.trip-controls__filters');
renderElement(tripFilters, new FiltersView(everythingFilter, futureFilter, pastFilter).getElement(), RenderPosition.BEFOREEND);

// функция для отрисовка пунктов поездки;

const renderTripEventItem = (tripListElement, point) => {

  const tripEventComponent = new TripEventView(point);
  const tripEventEditComponent = new TripEventEditView(point);

  // функции для замены пункта поездки на форму для редактирования

  const tripPointToForm = () => {
    tripListElement.replaceChild(tripEventEditComponent.getElement(), tripEventComponent.getElement());
  };

  const formToTripPoint = () => {
    tripListElement.replaceChild( tripEventComponent.getElement(), tripEventEditComponent.getElement());
  };

  // обработчики событий

  const onEscDown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      formToTripPoint();}
    document.removeEventListener('keydown', onEscDown);
  };

  const onArrowButtonClick = (evt) => {
    evt.preventDefault();
    formToTripPoint();
    document.removeEventListener('keydown', onEscDown);
  };

  // замена пункта поездки на форму для редактирования по клику

  tripEventComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', (evt) => {
    evt.preventDefault();
    tripPointToForm();
    document.addEventListener('keydown', onEscDown);
  });

  // замена формы для редактирования на пункт поездки по Save

  tripEventEditComponent.getElement().querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    formToTripPoint();
    document.removeEventListener('keydown', onEscDown);
  });

  // замена формы для редактирования на пункт поездки по Esc

  tripEventEditComponent.getElement().querySelector('form').addEventListener('keydown', onEscDown);

  // замена формы для редактирования на пункт поездки по клику на стрелку

  tripEventEditComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', onArrowButtonClick);

  renderElement (tripListElement, tripEventComponent.getElement(), RenderPosition.BEFOREEND);
};


const tripEvents = document.querySelector('.trip-events');

if (points.length === 0) {renderElement(tripEvents, new NoEventMessageView().getElement(), RenderPosition.   AFTERBEGIN);
} else {

  //отрисовка сортировки;

  renderElement(tripEvents, new SortView().getElement(), RenderPosition.BEFOREEND);

  //отрисовка контейнера списка для пунктов поездки

  const tripEventsListComponent = new TripEventListView();
  renderElement(tripEvents, tripEventsListComponent.getElement(), RenderPosition.BEFOREEND);

  // отрисовка пунктов поездки

  for (let i=0; i<points.length; i++) {
    renderTripEventItem(tripEventsListComponent.getElement(), points[i]);
  }
}

