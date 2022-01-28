

function sortObjectArrByProp<Type>(objArr:Type[], objProp:string, reverse:string='s'):Type[] {
  let sortedObjectArray:Type[] = [];
  let values:Type[] = [];
  let indices:number[] = [];

  objArr.map((obj:{} | any, index:number):void => {
    values.push(obj[objProp]);
    indices.push(index);
  });

  for (let i=1; i < values.length; i++) {
    for (let j=0; j < values.length - i; j++) {
      if (values[j] > values[j+1]) {
        [values[j], values[j+1]] = [values[j+1], values[j]];
        [indices[j], indices[j+1]] = [indices[j+1], indices[j]];
      }
    }
  }

  for (let k of indices) {
    sortedObjectArray.push(objArr[k]);
  }
  reverse === 'r'.toLowerCase() && sortedObjectArray.reverse();
  return sortedObjectArray;
}

const objArr:{a:string, b:string}[] = [
  { a: "7", b: "5" },
  { a: "9", b: "2" },
  { a: "1", b: "7" },
  { a: "4", b: "1" },
  { a: "6", b: "3" },
  { a: "5", b: "4" },
  { a: "2", b: "8" },
  { a: "3", b: "6" },
  { a: "8", b: "9" }
]

console.log(` * Object Array {}[] -> objArr = [
  { a: "7", b: "5" },
  { a: "9", b: "2" },
  { a: "1", b: "7" },
  { a: "4", b: "1" },
  { a: "6", b: "3" },
  { a: "5", b: "4" },
  { a: "2", b: "8" },
  { a: "3", b: "6" },
  { a: "8", b: "9" }
]`)

console.log(` * STANDARD #1: sortObjectArrByProp(objArr, "a")
 * RESULT: `)
console.log(sortObjectArrByProp(objArr, "a"));

console.log(` * STANDARD #2: sortObjectArrByProp(objArr, "b")
 * RESULT: `)
console.log(sortObjectArrByProp(objArr, "b"));

console.log(` * REVERSED: sortObjectArrByProp(objArr, "a", "r")
 * RESULT: `)
console.log(sortObjectArrByProp(objArr, "a", "r"));
