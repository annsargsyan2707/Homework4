const partial = (cb, num) => {
  let n = num;
  return function (n1, n2, num) {
    return add(n1, n2, n);
  };
};
function add(a, b, c) {
  return a + b + c;
}
const add5 = partial(add, 5);
console.log(add5(10, 20));
