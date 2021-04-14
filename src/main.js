import {RenderPosition} from './mock/data.js';
import {renderElement} from './mock/utils.js';

import {NUMBER_OF_ROUTE_POINTS} from './mock/mockdata.js';
import {generateMockRoutePoint} from './mock/mock.js';
import {generateFilterEverything, generateFilterPast, generateFilterFuture} from './mock/filter.js';

import TripInfoView from './view/trip-info.js';
import TripPriceView from './view/trip-info-cost.js';
import TripNavigationView from './view/trip-navigation.js';
import FiltersView from './view/trip-filters.js';
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

//отрисовка сортировки;

const tripEvents = document.querySelector('.trip-events');
renderElement(tripEvents, new SortView().getElement(), RenderPosition.BEFOREEND);

//отрисовка контейнера списка для пунктов поездки

const tripEventsListComponent = new TripEventListView();
renderElement(tripEvents, tripEventsListComponent.getElement(), RenderPosition.BEFOREEND);

// функция для отрисовка пунктов поездки;

const renderTripEventItem = (tripListElement, point) => {

  const tripEventComponent = new TripEventView(point);
  const tripEventEditComponent = new TripEventEditView(point);

  // замена пункта поездки на форму для редактирования

  const tripPointToForm = () => {
    tripListElement.replaceChild(tripEventEditComponent.getElement(), tripEventComponent.getElement());
  };

  const formToTripPoint = () => {
    tripListElement.replaceChild( tripEventComponent.getElement(), tripEventEditComponent.getElement());
  };

  tripEventComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', (evt) => {
    evt.preventDefault();
    tripPointToForm();
  });

  tripEventEditComponent.getElement().querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    formToTripPoint();
  });

  renderElement (tripListElement, tripEventComponent.getElement(), RenderPosition.BEFOREEND);
};

// отрисовка пунктов поездки

for (let i=0; i<points.length; i++) {
  renderTripEventItem(tripEventsListComponent.getElement(), points[i]);
}
