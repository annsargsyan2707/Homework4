const flattenArray = (nestedArray) => {
  const result = [];
  nestedArray.forEach((val) => {
    if (Array.isArray(val)) {
      result.push(...flattenArray(val));
    } else {
      result.push(val);
    }
  });
  return result;
};
console.log(flattenArray([1, 2, [1, 4, [5]]]));
