let obj = { a: 1 };
let arr = [1, 2, 3, null, null, obj, obj, 5, 5, 6, 7];

// 可以去除重复的基本数据类型和复杂类型
// 1.使用Set
function removeDuplicate(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicate(arr));

// 2. 使用filter
function removeDuplicate2(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}
console.log(removeDuplicate2(arr));

// 3. 在原数组上操作
function removeDuplicate3(arr) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) {
      set.add(arr[i]);
    } else {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}
console.log(removeDuplicate3(arr));

// 4. 数组内有相同对象去重
const arr2 = [1, 2, 3, { a: 1 }, { a: 1 }, [1, 2, 3], [1, 2, 3], "a", "a"];
function removeDuplicate4(arr) {
  let set = new Set();
  return arr.filter((v) => {
    if (typeof v === "object" && v !== null) {
      v = JSON.stringify(v);
    }
    if (set.has(v)) return false;
    set.add(v);
    return true;
  });
}
console.log(removeDuplicate4(arr2));

// 根据对象相同字段去重
const arr3 = [
  { id: 1, value: "vue" },
  { id: 2, value: "vue" },
  { id: 3, value: "react" },
];

function removeDuplicate5(arr) {
  const set = new Set();
  return arr.filter((v) => {
    if (set.has(v.value)) {
      return false;
    }
    set.add(v.value);
    return true;
  });
}
console.log(removeDuplicate5(arr3));
