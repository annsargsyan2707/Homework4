function privateVariable(num) {
  let privateNum = num;
  return {
    get() {
      return privateNum;
    },
    set(n) {
      privateNum = n;
    },
  };
}

const secretValue = privateVariable(42);
console.log(secretValue.get());
secretValue.set(100);
console.log(secretValue.get());
