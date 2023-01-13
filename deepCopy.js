// 1. 解决循环引用
// 2. 函数的复制

function deepCopy(objOrArr) {
  const map = new WeakMap();
  const ret = Array.isArray(objOrArr) ? [] : {};
  map.set(objOrArr, ret);
  for (let key in objOrArr) {
    const value = objOrArr[key];
    if (map.has(value)) {
      ret[key] = map.get(value);
    } else if (typeof value !== "object" || value === null) {
      ret[key] = value;
    } else if (typeof value === "function") {
      ret[key] = value.bind(null);
    } else {
      ret[key] = deepCopy(value);
      map.set(value, ret[key]);
    }
  }
  return ret;
}

const obj = { a: 1, b: { c: 3, d: [1, 2, 3] }, e: "1234" };
const arr = [1, { a: 2, b: 3 }, [1, 2, 3], "4"];
console.log(obj);
console.log(deepCopy(obj) === obj);
console.log(deepCopy(arr));
console.log(deepCopy(arr) === arr);

let obj2 = { a: 1, b: { c: 2 }, d: 3 };
obj2.e = obj2;
console.log(deepCopy(obj2));
