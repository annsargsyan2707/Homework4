const sortedArray = [1, 2, 5, 7, 8, 11];
let n = 5;
const binarySearch = (arr, el, start = 0, end = arr.length - 1) => {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === el) return mid;
  if (arr[mid] > el) return binarySearch(arr, el, (start = 0), mid - 1);
  return binarySearch(arr, el, mid + 1, end);
};
console.log(binarySearch(sortedArray, 2));
