export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomFloat = (min, max) => {
  return Math.random() * (min- max) + max;
}
