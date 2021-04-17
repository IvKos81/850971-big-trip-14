import {RenderPosition} from './mock/data.js';
import {renderElement, replace} from './mock/render.js';

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
renderElement(tripMain, new TripInfoView(), RenderPosition.AFTERBEGIN);

// отрисовка цены;

const tripInfo = tripMain.querySelector('.trip-main__trip-info');
renderElement(tripInfo, new TripPriceView(), RenderPosition.BEFOREEND);


//отрисовка меню;

const tripNavigation = tripMain.querySelector('.trip-controls__navigation');
renderElement(tripNavigation, new TripNavigationView(), RenderPosition.BEFOREEND);


// отрисовка фильтров;

const tripFilters = tripMain.querySelector('.trip-controls__filters');
renderElement(tripFilters, new FiltersView(everythingFilter, futureFilter, pastFilter), RenderPosition.BEFOREEND);

// функция для отрисовка пунктов поездки;

const renderTripEventItem = (tripListElement, point) => {

  const tripEventComponent = new TripEventView(point);
  const tripEventEditComponent = new TripEventEditView(point);

  // функции для замены пункта поездки на форму для редактирования

  const tripPointToForm = () => {
    replace(tripEventEditComponent, tripEventComponent);
  };

  const formToTripPoint = () => {
    replace( tripEventComponent, tripEventEditComponent);
  };

  // обработчики событий

  const onEscDown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      formToTripPoint();
      document.removeEventListener('keydown', onEscDown);
    }
  };

  // замена пункта поездки на форму для редактирования по клику

  tripEventComponent.setEditClickHandler(() => {
    tripPointToForm();
    document.addEventListener('keydown', onEscDown);
  });

  // замена формы для редактирования на пункт поездки по Save

  tripEventEditComponent.setFormSubmitHandler(() => {
    formToTripPoint();
    document.removeEventListener('keydown', onEscDown);
  });

  // замена формы для редактирования на пункт поездки по Esc

  tripEventEditComponent.setOnEscKeyDownHandler(() => {
    formToTripPoint();
    document.removeEventListener('keydown', onEscDown);
  });

  // замена формы для редактирования на пункт поездки по клику на стрелку

  tripEventEditComponent.setClickHandler(() => {
    formToTripPoint();
    document.removeEventListener('keydown', onEscDown);
  });

  renderElement (tripListElement, tripEventComponent, RenderPosition.BEFOREEND);
};

// отрисовка сообщения, если нет пунктов поездки

const tripEvents = document.querySelector('.trip-events');

if (points.length === 0) {renderElement(tripEvents, new NoEventMessageView(), RenderPosition.AFTERBEGIN);
} else {

  //отрисовка сортировки;

  renderElement(tripEvents, new SortView(), RenderPosition.BEFOREEND);

  //отрисовка контейнера списка для пунктов поездки

  const tripEventsListComponent = new TripEventListView();
  renderElement(tripEvents, tripEventsListComponent, RenderPosition.BEFOREEND);

  // отрисовка пунктов поездки

  for (let i=0; i<points.length; i++) {
    renderTripEventItem(tripEventsListComponent, points[i]);
  }
}

