const NUMBER_OF_ROUTE_POINTS = 15;

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        title: 'Upgrade to a business class',
        price: 120,
      },
      {
        title: 'Choose the radio station',
        price: 60,
      },
      {
        title: 'Book arrival time',
        price: 50,
      },
    ],
  },{
    type: 'bus',
    offers: [
      {
        title: 'Upgrade to a comfort class',
        price: 75,
      },
      {
        title: 'Add meal',
        price: 30,
      },
      {
        title: 'Add water',
        price: 3,
      },
      {
        title: 'Add coffee',
        price: 6,
      },
      {
        title: 'Add tea',
        price: 5,
      },
    ],
  },{
    type: 'train',
    offers: [
      {
        title: 'Upgrade to a first class',
        price: 100,
      }, {
        title: 'Add meal',
        price: 20,
      },{
        title: 'Add luggage',
        price: 40,
      },
      {
        title: 'Add water',
        price: 3,
      },
      {
        title: 'Add coffee',
        price: 6,
      },
      {
        title: 'Add tea',
        price: 5,
      },
    ],
  },{
    type: 'ship',
    offers: [
      {
        title: 'Upgrade to a first class',
        price: 100,
      }, {
        title: 'Upgrade to a premium class',
        price: 500,
      },{
        title: 'Add luggage',
        price: 40,
      },{
        title: 'Add meal',
        price: 20,
      },{
        title: 'Add alchohol drinks',
        price: 10,
      },{
        title: 'Add water',
        price: 3,
      },
      {
        title: 'Add coffee',
        price: 6,
      },
      {
        title: 'Add tea',
        price: 5,
      },
    ],
  },{
    type: 'transport',
    offers: [
      {
        title: 'Add  hand luggage',
        price: 20,
      },
      {
        title: 'Add small case',
        price: 30,
      },
      {
        title: 'Add medium case',
        price: 40,
      },
      {
        title: 'Add large case',
        price: 50,
      },
    ],
  },{
    type: 'drive',
    offers: [
      {
        title: 'Upgrade to a econom class',
        price: 40,
      }, {
        title: 'Upgrade to a comfort class',
        price: 80,
      },{
        title: 'Upgrade to a business class',
        price: 200,
      },{
        title: 'Add insurance',
        price: 25,
      },{
        title: 'Add premium insurance',
        price: 50,
      },{
        title: 'Add unlimited mileage',
        price: 200,
      },
    ],
  },{
    type: 'flight',
    offers: [
      {
        title: 'Upgrade to a comfort class',
        price: 100,
      }, {
        title: 'Upgrade to a business class',
        price: 200,
      },{
        title: 'Choose seats',
        price: 20,
      },{
        title: 'Add  hand luggage',
        price: 20,
      },
      {
        title: 'Add small case',
        price: 30,
      },
      {
        title: 'Add medium case',
        price: 40,
      },
      {
        title: 'Add large case',
        price: 50,
      },
      {
        title: 'Add any extra same size item',
        price: 25,
      },
    ],
  },{
    type: 'check-in',
    offers: [
      {
        title: 'Choose advance check-in',
        price: 20,
      },
      {
        title: 'Choose online check-in',
        price: 5,
      },
      {
        title: 'Choose late-in check-in',
        price: 30,
      },
    ],
  },{
    type: 'sightseeing',
    offers: [
      {
        title: 'Choose advance ticket',
        price: 50,
      },
      {
        title: 'Choose audioguide',
        price: 10,
      },
      {
        title: 'Choose binocular',
        price: 25,
      },
      {
        title: 'Choose earphones ticket',
        price: 5,
      },
      {
        title: 'Choose map',
        price: 5,
      },
      {
        title: 'Choose extra bottle of water',
        price: 2,
      },
    ],
  },{
    type: 'restaurant',
    offers: [
      {
        title: 'Book a table',
        price: 5,
      }, {
        title: 'Book table on open terrace',
        price: 20,
      },{
        title: 'Book a breakfast',
        price: 10,
      },{
        title: 'Book a lunch',
        price: 250,
      },{
        title: 'Book a dinner',
        price: 50,
      },{
        title: 'Add dessert',
        price: 15,
      },{
        title: 'Add special meal',
        price: 40,
      },{
        title: 'Add premium cocktail',
        price: 15,
      },{
        title: 'Add premium vine',
        price: 50,
      },
    ],
  },
];

export {mockOffers, NUMBER_OF_ROUTE_POINTS};
