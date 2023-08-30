function generateCombinations(array, k) {
  if (k === 0) {
    return [[]]; // Return an array with an empty combination
  }

  if (array.length === 0 || k > array.length) {
    return []; // Return an empty array if not possible to form combinations
  }

  const firstElement = array[0];
  const restOfArray = array.slice(1);

  const combinationsWithoutFirst = generateCombinations(restOfArray, k);
  const combinationsWithFirst = generateCombinations(restOfArray, k - 1).map(
    (combination) => [firstElement, ...combination]
  );

  return [...combinationsWithoutFirst, ...combinationsWithFirst];
}

const inputArray = [1, 2, 3, 4];
const k = 2;
console.log(generateCombinations(inputArray, k));
