let num = 8527;
let sumOfDigits = (num) => {
  let newNum = num;
  let res = 0;
  if (newNum <= 0) return 0;

  res += newNum % 10;
  newNum = Math.floor(newNum / 10);

  return res + sumOfDigits(newNum);
};
const res = sumOfDigits(num);
console.log(res);
