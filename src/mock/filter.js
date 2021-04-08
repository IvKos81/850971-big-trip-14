// функции генерации фильтров

// фильтр общий
const generateFilterEverything = (tasks) => {
  const countEverything = tasks.length;
  return countEverything;
};

// фильтр посещенных пунктов
const generateFilterPast = (tasks) => {
  let countIsFinished = 0;
  for (let i=0; i<tasks.length; i++) {
    if (tasks[i].isFinished === true) {
      countIsFinished++;
    }
  }
  return countIsFinished;
};

// фильтр непосещенных пунктов
const generateFilterFuture = (tasks) => {
  let countInFuture = 0;
  for (let i=0; i<tasks.length; i++) {
    if (tasks[i].inFuture === true) {
      countInFuture++;
    }
  }
  return countInFuture;
};

export {generateFilterEverything, generateFilterPast, generateFilterFuture};
