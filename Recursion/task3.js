const power = (num, pow) => {
  if (pow === 0) return 1;
  if (pow === 1) return num;
  if (pow === -1) return 1 / num;

  return pow > 0 ? num * power(num, pow - 1) : (1 / num) * power(num, pow + 1);
};
let num = 2;
let pow = -2;
let result = power(num, pow);
console.log(result);
