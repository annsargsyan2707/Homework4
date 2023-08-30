function countOccurrences(arr, value, index = 0) {
  if (index === arr.length) {
    return 0;
  }
  const element = arr[index];
  const count = countOccurrences(arr, value, index + 1);

  return element === value ? 1 + count : count;
}

const numbers = [2, 3, 4, 2, 5, 2, 6, 2];
console.log(countOccurrences(numbers, 2));
