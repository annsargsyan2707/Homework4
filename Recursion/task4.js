const array = [1, 2, 3, 4];
const arraySum = (arr, k = 0) => {
  if (k === arr.length - 1) return arr[k];
  return arr[k] + arraySum(arr, k + 1);
};
const res = arraySum(array);
console.log(res);
