/* eslint-disable no-unused-vars */
import dayjs from 'dayjs';

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

// функции сортировки пунктов по цене

const sortPointPriceDown = (pointA, pointB) => {
  return pointB.price - pointA.price;
};

// функции сортировки пунктов по длительности события

const sortPointTimeDurationUp = (pointA, pointB) => {
  const durationA = dayjs(pointA.dateTo, 'ms').diff(pointA.dateFrom, 'ms');
  const durationB = dayjs(pointB.dateTo, 'ms').diff(pointB.dateFrom, 'ms');
  return durationB-durationA;
};

export {getRandomIntegerNumber, createElement, updateItem, sortPointPriceDown, sortPointTimeDurationUp};
