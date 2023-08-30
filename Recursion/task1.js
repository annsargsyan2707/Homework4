function calculateTheFactorial(number) {
  if (number === 1 || number === 2) return number;
  return number * calculateTheFactorial(number - 1);
}
const result = calculateTheFactorial(4);
console.log(result);
