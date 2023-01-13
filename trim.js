// 使用正则去实现

function trim(str) {
  return str.replace(/(^\s+)|(\s+$)/g, "");
}

let str = "\n \t 12345  \t";
consle.log(trim(str));
