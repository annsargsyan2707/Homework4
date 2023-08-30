function creatPerson(name, age) {
  const obj = {
    firstname: name,
    year: age,
  };

  return {
    getName() {
      return obj.firstname;
    },
    getAge() {
      return obj.year;
    },
    setName(n) {
      obj.firstname = n;
    },
    setAge(num) {
      obj.year = num;
    },
  };
}
const person = creatPerson("Alice", 30);
console.log(person);
console.log(person.getAge());
console.log(person.getName());
person.setName("bob");
person.setAge(24);
console.log(person.getAge());
