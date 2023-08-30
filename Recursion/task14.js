function subsetSum(arr, n, sum) {
  if (sum === 0) return true;
  if (n <= 0) return false;
  if (arr[n - 1] > sum) {
    return subsetSum(arr, n - 1, sum);
  }
  return subsetSum(arr, n - 1, sum - arr[n - 1]) || subsetSum(arr, n - 1, sum);
}
const arr = [1, 2, 3, 4];
const sum = 16;
const n = arr.length;
if (subsetSum(arr, n, sum) === true) {
  console.log("True");
} else console.log("False");
