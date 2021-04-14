import dayjs from 'dayjs';

import {getRandomIntegerNumber} from './utils.js';
import {mockOffers} from './mockdata.js';


// генератор типа пункта назначения

const generateMockRouteType = () => {
  const mockType = ['taxi', 'bus', 'train', 'ship', 'transport', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

  const randomTypeIndex = getRandomIntegerNumber(0, mockType.length-1);

  return mockType[randomTypeIndex];
};

//генератор названия пункта назначения

const generateMockRouteDestinationName = () => {
  const mockDestinationName = ['Geneva', 'Berlin', 'Paris', 'Prague', 'Bratislava', 'Vienna', 'Calais', 'Amsterdam', 'Barcelona', 'Madrid', 'Rome', 'Florence', 'Krakow'];

  const randomDestinationIndex = getRandomIntegerNumber(0, mockDestinationName.length-1);

  return mockDestinationName[randomDestinationIndex];
};

// генератор описания пункта назначения;

const generateMockRouteDestinationDescription = () => {
  const mockDestinationDescription = ['Nice city located in the centre of country.', 'Broad central streets offers rich night life for tourists.', 'There are several point of view in a different parts of city.', 'There is a big green park on the bank of local river ', 'Here you can find a huge amount of places of interest.'];

  const randomDestinationDescriptionIndex = getRandomIntegerNumber(0, mockDestinationDescription.length-1);

  return mockDestinationDescription[randomDestinationDescriptionIndex];
};

// генератор фотоленты пункта назначения

const generateMockPhotos = () => {
  const mockPhotoDescription = ['Lorem, ipsum dolor sit amet consectetur adipisicing elit.', 'Error, quos dicta repudiandae, ipsam vel eum maiores quasi et amet perferendis blanditiis ad expedita officiis.', 'Fugiat debitis minima ad rerum, sit hic earum natus voluptate consectetur ratione et!', 'Obcaecati cum nemo dolorum commodi, fuga earum quibusdam, incidunt tempora maxime odit dignissimos.', 'Quasi officiis consectetur nostrum.', 'Illo temporibus unde laboriosam blanditiis enim nobis minima.'];
  const mockPhotoNumber = getRandomIntegerNumber(0,50);
  const mockPhoto =
    {src: 'http://picsum.photos/248/152?r='+`${mockPhotoNumber}`, description: mockPhotoDescription[getRandomIntegerNumber(0, mockPhotoDescription.length-1)]};
  return mockPhoto;
};

const generateMockPhotoGallery = () => {
  return new Array(getRandomIntegerNumber(1,6)).fill(null).map(() => {return generateMockPhotos();});
};

// генератор списка дополнительных опций

const generateMockOffers = (array, typePoint) => {

  for (let i=0; i<array.length; i++) {
    if (array[i].type === typePoint) {
      return (array[i].offers);
    }
  }

  return '';
};

// генератор выбора звездочки

const generateIsFavourite = () => {
  return getRandomIntegerNumber(0,1);
};

//генератор даты

const generateMockDateFrom = () => {
  return dayjs(getRandomIntegerNumber(dayjs('06-05-2021'), dayjs('07-05-2021')));
};

// генератор точки маршрута

const generateMockRoutePoint = () => {

  const dateStart = generateMockDateFrom();
  const routeType = generateMockRouteType();
  const finish = Boolean(getRandomIntegerNumber(0,2));

  return {
    destination: {
      description: generateMockRouteDestinationDescription(),
      name: generateMockRouteDestinationName(),
      pictures: generateMockPhotoGallery(),
    },
    offer: {
      type: routeType,
      offers: generateMockOffers(mockOffers, routeType),
    },
    price: getRandomIntegerNumber(10, 200),
    isFavourite: generateIsFavourite(),
    dateFrom: dateStart,
    dateTo: dateStart.add(getRandomIntegerNumber(60000,1.8E+7),'ms'),
    isFinished: finish,
    inFuture: !finish,
  };
};

export {generateMockRoutePoint};
