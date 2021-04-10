//import {generateFilterEverything, generateFilterPast, generateFilterFuture} from './mock/filter.js';
//import {points} from './main.js';


//оригинальный код

// const createTripFiltersTemplate = () => {
//   return `<form class="trip-filters" action="#" method="get">
//   <div class="trip-filters__filter">
//     <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
//     <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
//   </div>

//   <div class="trip-filters__filter">
//     <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
//     <label class="trip-filters__filter-label" for="filter-future">Future</label>
//   </div>

//   <div class="trip-filters__filter">
//     <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
//     <label class="trip-filters__filter-label" for="filter-past">Past</label>
//   </div>

//   <button class="visually-hidden" type="submit">Accept filter</button>
// </form>`;
// };

// export {createTripFiltersTemplate};


//черновой код

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

export {createTripFiltersTemplate};
