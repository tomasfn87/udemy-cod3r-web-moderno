const { sortObjectArrByProps } = require("@nighly/sort-object-array-by-property");

let input = process.argv;
let props = []
if (input.length > 2) {
  props = input[2].split(",")
} else {
  props = ["a", "b", "c", "d"]
}
if (input.length > 3) {
  reverse = input[3]
} else {
  reverse = ""
}


const numberObjArr = [
  { a: 10, b: 12 },
  { b: 20 },
  { a: 10, b: 31, c: 2, d: 1 },
  { c: 12 },
  { a: 11, c: 10 },
  { c: 13 },
  { a: 12, b: 11, c: 14, d: 22 },
  { c: 21 },
  { b: 33 },
  { d: 5 },
  { a: 2, b: 21, c: 0 },
  { a: 12, b: 3, c: 4 },
  { a: 6, b: 3, c: 1 },
  { b: 23, c: 6 },
  { a: 14, b: 31, c: 3 },
  { a: 1, b: 2, c: 6 },
  { b: 13, d: 1 },
  { b: 3, d: 2 },
  { b: 1, c: 41 },
  { a: 22, b: 5, c: 3 },
  { a: 1, b: 1, c: 3, d: 9 },
  { a: 14, b: 21, c: 5 },
  { a: 12, b: 2, c: 3 },
  { b: 11, c: 2 },
  { a: 11, b: 2, c: 8 },
  { a: 5, b: 1, c: 4 },
  { a: 31, b: 3, c: 5 },
  { a: 4, b: 13, c: 5 },
  { a: 8, b: 2, c: 9 },
  { b: 11, c: 33 },
  { a: 14, b: 2, c: 4 },
  { a: 5, b: 3, c: 1 },
  { b: 41, c: 3 },
  { a: 16, b: 11, c: 1 },
  { a: 14, b: 3, c: 2 },
  { b: 11, c: 9 },
  { b: 11, c: 9, d: 10 },
  { b: 11, c: 9, d: 9 },
  { b: 8, d: 7 },
  { a: 3, b: 3, c: 3 },
  { a: 4, b: 20, c: 2 },
  { a: 6, b: 2, c: 1 },
  { a: 9 }
]

console.log("objProps =", props, "|  reverse =", reverse, "->", sortObjectArrByProps(numberObjArr, props, reverse))
