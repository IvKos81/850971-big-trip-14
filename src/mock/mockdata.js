import {getRandomIntegerNumber} from './utils.js';

const NUMBER_OF_ROUTE_POINTS = 15;


const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 1,
        title: 'Upgrade to a business class',
        price: 120,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id: 2,
        title: 'Choose the radio station',
        price: 60,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id: 3,
        title: 'Book arrival time',
        price: 50,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
    ],
  },{
    type: 'bus',
    offers: [
      {
        id: 1,
        title: 'Upgrade to a comfort class',
        price: 75,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id: 2,
        title: 'Add meal',
        price: 30,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id: 3,
        title: 'Add water',
        price: 3,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id: 4,
        title: 'Add coffee',
        price: 6,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id: 5,
        title: 'Add tea',
        price: 5,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
    ],
  },{
    type: 'train',
    offers: [
      {
        id: 1,
        title: 'Upgrade to a first class',
        price: 100,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      }, {
        id: 2,
        title: 'Add meal',
        price: 20,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },{
        id: 3,
        title: 'Add luggage',
        price: 40,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id: 4,
        title: 'Add water',
        price: 3,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id: 5,
        title: 'Add coffee',
        price: 6,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id: 6,
        title: 'Add tea',
        price: 5,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
    ],
  },{
    type: 'ship',
    offers: [
      {
        id: 1,
        title: 'Upgrade to a first class',
        price: 100,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      }, {
        id: 2,
        title: 'Upgrade to a premium class',
        price: 500,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },{
        id: 3,
        title: 'Add luggage',
        price: 40,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },{
        id: 4,
        title: 'Add meal',
        price: 20,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },{
        id: 5,
        title: 'Add alchohol drinks',
        price: 10,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },{
        id: 6,
        title: 'Add water',
        price: 3,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id: 7,
        title: 'Add coffee',
        price: 6,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id: 8,
        title: 'Add tea',
        price: 5,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
    ],
  },{
    type: 'transport',
    offers: [
      {
        id : 1,
        title: 'Add  hand luggage',
        price: 20,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id : 2,
        title: 'Add small case',
        price: 30,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id : 3,
        title: 'Add medium case',
        price: 40,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id : 4,
        title: 'Add large case',
        price: 50,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
    ],
  },{
    type: 'drive',
    offers: [
      {
        id : 1,
        title: 'Upgrade to a econom class',
        price: 40,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      }, {
        id : 2,
        title: 'Upgrade to a comfort class',
        price: 80,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },{
        id : 3,
        title: 'Upgrade to a business class',
        price: 200,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },{
        id : 4,
        title: 'Add insurance',
        price: 25,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },{
        id : 5,
        title: 'Add premium insurance',
        price: 50,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },{
        id : 6,
        title: 'Add unlimited mileage',
        price: 200,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
    ],
  },{
    type: 'flight',
    offers: [
      {
        id : 1,
        title: 'Upgrade to a comfort class',
        price: 100,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      }, {
        id : 2,
        title: 'Upgrade to a business class',
        price: 200,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },{
        id : 3,
        title: 'Choose seats',
        price: 20,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },{
        id : 4,
        title: 'Add  hand luggage',
        price: 20,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id : 5,
        title: 'Add small case',
        price: 30,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id : 6,
        title: 'Add medium case',
        price: 40,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id : 7,
        title: 'Add large case',
        price: 50,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id : 8,
        title: 'Add any extra same size item',
        price: 25,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
    ],
  },{
    type: 'check-in',
    offers: [
      {
        id : 1,
        title: 'Choose advance check-in',
        price: 20,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id : 2,
        title: 'Choose online check-in',
        price: 5,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id : 3,
        title: 'Choose late-in check-in',
        price: 30,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
    ],
  },{
    type: 'sightseeing',
    offers: [
      {
        id : 1,
        title: 'Choose advance ticket',
        price: 50,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id : 2,
        title: 'Choose audioguide',
        price: 10,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id : 3,
        title: 'Choose binocular',
        price: 25,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id : 4,
        title: 'Choose earphones ticket',
        price: 5,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id : 5,
        title: 'Choose map',
        price: 5,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
      {
        id : 6,
        title: 'Choose extra bottle of water',
        price: 2,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
    ],
  },{
    type: 'restaurant',
    offers: [
      {
        id : 1,
        title: 'Book a table',
        price: 5,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      }, {
        id : 2,
        title: 'Book table on open terrace',
        price: 20,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },{
        id : 3,
        title: 'Book a breakfast',
        price: 10,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },{
        id : 4,
        title: 'Book a lunch',
        price: 250,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },{
        id : 5,
        title: 'Book a dinner',
        price: 50,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },{
        id : 6,
        title: 'Add dessert',
        price: 15,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },{
        id : 7,
        title: 'Add special meal',
        price: 40,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },{
        id : 8,
        title: 'Add premium cocktail',
        price: 15,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },{
        id : 9,
        title: 'Add premium vine',
        price: 50,
        isSelected: Boolean(getRandomIntegerNumber(0,2)),
      },
    ],
  },
];

export {mockOffers, NUMBER_OF_ROUTE_POINTS};
