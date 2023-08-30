function createCachingFunction() {
  const obj = {};
  return function (n) {
    if (obj[n] !== undefined) {
      return `cached ${obj[n]}`;
    } else {
      obj[n] = n * 2;
      return `calculated ${obj[n]}`;
    }
  };
}
const cachedCalculation = createCachingFunction();
console.log(cachedCalculation(5));
console.log(cachedCalculation(5));
