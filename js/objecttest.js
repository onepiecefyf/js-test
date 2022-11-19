var person = {};
person.name = "张三";
person.age = 22;
person.addr = "北京市";
person.sayHello = function () {
  console.log("hello");
};

console.log(person.sayHello);

console.log("------------");

console.log(person.sayHello());
