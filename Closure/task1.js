function creatCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const counter = creatCounter();
console.log(counter());
console.log(counter());
console.log(counter());
