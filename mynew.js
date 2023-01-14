/**
 * new 的特点
 * 1. 创建一个空对象，对象原型指向构造函数prototype
 * 2. 执行构造函数，函数内部this指向空对象
 * 3. 返回对象，如果函数内部 return 一个引用类型，则返回引用类型
 *
 */

function mynew(fn, ...rest) {
  const obj = Object.create(fn.prototype);
  const result = fn.apply(obj, rest);
  if (typeof result === "object" && result !== null) {
    return result;
  }
  return obj;
}

function Cat(name) {
  this.name = name;
}

Cat.prototype.say = function () {
  console.log(`my name is ${this.name}`);
};

let cat = mynew(Cat, "ff");
cat.say();
console.log(cat);

let cat2 = new Cat("hh");
cat2.say();
console.log(cat2);
