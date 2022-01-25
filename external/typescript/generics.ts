function firstValue<Type>(arr:Type[]):Type {
  return arr[0];
}

console.log(firstValue([1, 2, 3]));

console.log(firstValue(["a", "b", "c"]));

console.log(firstValue([
  {value: "A"},
  {value: "B"},
  {value: "C"}
]));

console.log(firstValue([true, false, false]));

console.log(firstValue([["A", "a"],  ["B", "b"], ["C", "c"]]));

console.log(firstValue([[1, 2],  [3, 4], [5, 6]]));

const objectWithFunction = [
  {
    value: 100,
    doubleValue() { 
      return this.value * 2
    }
  },
  {
    value: 100,
    doubleValue() {
      return this.value * 2
    }
  },
  {
    value: 100,
    doubleValue() {
      return this.value * 2
    }
  }
];

console.log(firstValue(objectWithFunction));

console.log(objectWithFunction[0].doubleValue());

const functionArr = [
  {
    doubleValue(n:number):number {
      return n * 2;
    }
  },
  {
    doubleValue(n:number):number {
      return n * 2;
    }
  },
  {
    doubleValue(n:number):number {
      return n * 2;
    }
  }
];

console.log(firstValue(functionArr));
console.log(functionArr[0].doubleValue(100));
