function myInstanceOf(ins, fn) {
  let __proto__ = Object.getPrototypeOf(ins);
  while (__proto__) {
    if (__proto__ === fn.prototype) {
      return true;
    } else {
      __proto__ = Object.getPrototypeOf(__proto__);
    }
  }
  return false;
}

function Cat() {}

let cat = new Cat();

console.log(myInstanceOf(cat, Cat));
console.log(myInstanceOf(cat, Object));
console.log(myInstanceOf(cat, Array));
