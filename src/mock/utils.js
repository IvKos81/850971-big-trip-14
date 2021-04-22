
// генератор случайных данных

const getRandomIntegerNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

//функция создания элемента;

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};

// функция обновления элемента

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1),
  ];
};

// функция расчета веса для сортировки элемента

const getWeightForSortByPrice = (priceA, priceB) => {
  if (priceA === priceB) {
    return 0;
  }
  if (priceA > priceB) {
    return 1;
  }
  if (priceA < priceB) {
    return -1;
  }
};

// функции сортировки пунктов по цене

const sortPointPriceUp = (priceA, priceB) => {
  const weight = getWeightForSortByPrice(priceA.price, priceB.price);
  if (weight !== null) {
    return weight;
  }
  return priceA.price - priceB.price;
};

const sortPointPriceDown = (priceA, priceB) => {
  const weight = getWeightForSortByPrice(priceA.price, priceB.price);
  if (weight !== null) {
    return weight;
  }
  return priceB.price - priceA.price;
};

export {getRandomIntegerNumber, createElement, updateItem,sortPointPriceUp, sortPointPriceDown};
