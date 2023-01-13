// 函数柯里化
// 在计算机科学中，柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。

function sum(a, b, c, d) {
  return a + b + c + d;
}

function curry(fn) {
  let args = [];
  return function _curry(...rest) {
    args = args.concat(rest);
    if (args.length < fn.length) {
      return _curry;
    } else {
      return fn(...args);
    }
  };
}

let newSum = curry(sum);
console.log(newSum(1)(2)(3)(4));
