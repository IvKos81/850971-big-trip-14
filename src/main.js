import {createTripInfoTemplate} from './view/trip-info.js';
import {createTripInfoCostTemplate} from './view/trip-info-cost.js';
import {createTripNavigationTemplate} from './view/trip-navigation.js';
import {createTripFiltersTemplate} from './view/trip-filters.js';
import {createTripSortTemplate} from './view/trip-sort.js';
import {createTripEventsListTemplate} from './view/trip-events-list.js';
import {createTripEventsItemTemplate} from './view/trip-events-item.js';
import {createEventAddNewFormTemplate} from './view/event-add-new.js';
import {createEventEditFormTemplate} from './view/event-edit.js';
import {createEventAddNewNoDestinationTemplate} from './view/event-add-new-nodestination.js';
import {createEventAddNewNoOffersTemplate} from './view/even-add-new-nooffer.js';

const NUMBER_OF_ITEMS = 3;

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
render(tripFilters, createTripFiltersTemplate(), 'beforeend');

//отрисовка сортировки;

const tripEvents = document.querySelector('.trip-events');
render(tripEvents, createTripSortTemplate(), 'beforeend');

//отрисовка пунктов поездки;

render(tripEvents, createTripEventsListTemplate(), 'beforeend');

const tripList = tripEvents.querySelector('.trip-events__list');
for (let i = 0; i < NUMBER_OF_ITEMS; i++) {
  render(tripList, createTripEventsItemTemplate(), 'beforeend');
}

//отрисовка формы создания пункта поездки;

render(tripList, createEventAddNewFormTemplate(), 'afterbegin');


//отрисовка формы редактирования пункта поездки;

render(tripList, createEventEditFormTemplate(), 'beforeend');


//отрисовка формы создания пункта поездки без пункта назначения;

render(tripList, createEventAddNewNoDestinationTemplate(), 'beforeend');

//отрисовка формы создания пункта поездки без вариантов;

render(tripList, createEventAddNewNoOffersTemplate(), 'beforeend');
