import {createTripInfoTemplate} from './view/trip-info.js';
import {createTripInfoCostTemplate} from './view/trip-info-cost.js';
import {createTripNavigationTemplate} from './view/trip-navigation.js';
import {createTripFiltersTemplate} from './view/trip-filters.js';
import {createTripSortTemplate} from './view/trip-sort.js';
import {createTripEventsListTemplate} from './view/trip-events-list.js';
import {createTripEventsItemTemplate} from './view/trip-events-item.js';
import {createEventAddNewFormTemplate} from './view/event-add-new.js';
// import {createEventEditFormTemplate} from './view/event-edit.js';
// import {createEventAddNewNoDestinationTemplate} from './view/event-add-new-nodestination.js';
// import {createEventAddNewNoOffersTemplate} from './view/even-add-new-nooffer.js';
import {generateMockRoutePoint} from './mock/mock.js';
import {generateFilterEverything, generateFilterPast, generateFilterFuture} from './mock/filter.js'
import {generateMockRoutePoint} from './mock/mock.js';

const NUMBER_OF_ROUTE_POINTS = 15;

const points = new Array(NUMBER_OF_ROUTE_POINTS).fill().map(() => {return generateMockRoutePoint();});

const everythingFilter = generateFilterEverything(points);
const futureFilter = generateFilterFuture(points);
const pastFilter = generateFilterPast(points);

// функция для рендера элементов страницы;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMain = document.querySelector('.trip-main');

// отрисовка инфо;

render(tripMain, createTripInfoTemplate(), 'afterbegin');

// отрисовка цены;

const tripInfo = tripMain.querySelector('.trip-main__trip-info');
render(tripInfo, createTripInfoCostTemplate(), 'beforeend');

//отрисовка меню;

const tripNavigation = tripMain.querySelector('.trip-controls__navigation');
render(tripNavigation, createTripNavigationTemplate(), 'beforeend');

// отрисовка фильтров;

const tripFilters = tripMain.querySelector('.trip-controls__filters');
render(tripFilters, createTripFiltersTemplate(everythingFilter, futureFilter, pastFilter), 'beforeend');

//отрисовка сортировки;

const tripEvents = document.querySelector('.trip-events');
render(tripEvents, createTripSortTemplate(), 'beforeend');

//отрисовка пунктов поездки;

render(tripEvents, createTripEventsListTemplate(), 'beforeend');

const tripList = tripEvents.querySelector('.trip-events__list');

for (let i=0; i<points.length; i++) {

  if (i!==0) {
    render(tripList, createTripEventsItemTemplate(points[i]), 'beforeend');
  } else {
    render(tripList, createEventAddNewFormTemplate(points[i]), 'afterbegin');
  }

}

// //отрисовка формы редактирования пункта поездки;

// render(tripList, createEventEditFormTemplate(), 'beforeend');

// //отрисовка формы создания пункта поездки без пункта назначения;

// render(tripList, createEventAddNewNoDestinationTemplate(), 'beforeend');

// //отрисовка формы создания пункта поездки без офферов;

// render(tripList, createEventAddNewNoOffersTemplate(), 'beforeend');

// кнопка добавить пункт назначения;

// const buttonAddNewPoint = document.querySelector('.trip-main__event-add-btn');
// buttonAddNewPoint.addEventListener('click',() => {

//   //отрисовка формы создания пункта поездки;
//   render(tripList, createEventAddNewFormTemplate(), 'afterbegin');
//   buttonAddNewPoint.setAttribute('disabled','disabled');

// });
