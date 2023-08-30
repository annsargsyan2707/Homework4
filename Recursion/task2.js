const fibonachiSecuens = (n) => {
  if (n < 2) return n;
  return fibonachiSecuens(n - 1) + fibonachiSecuens(n - 2);
};
let n = 5;
console.log(fibonachiSecuens(n));
