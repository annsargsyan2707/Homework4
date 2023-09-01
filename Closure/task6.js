const memoiz = (cb) => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log(cache[n] + " cached");

      return cache[n];
    }
    return (cache[n] = cb(n));
  };
};
const fib = memoiz((n) => {
  console.log(n + "calculated");
  return n === 0 || n === 1 ? n : fib(n - 1) + fib(n - 2);
});
const memoizedFib = memoiz(fib);
console.log(memoizedFib(10));
console.log(memoizedFib(10));
