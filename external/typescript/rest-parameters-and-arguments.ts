class BasicOps {
  numArr: number[];

  constructor(numArr:number[]) {
    this.numArr = numArr;
  }

  sum():number {
    let result = 0;
    if (this.numArr.length !== 0) {
      for (let i of this.numArr) {
        result += i;
      }
    } return result;
  }

  multiply():number {
    let result = 1;
    if (this.numArr.length !== 0) {
      for (let i of this.numArr) {
        result *= i;
      }
    } return result;
  }

  sumOfSquares():number {
    let result = this.numArr[0] ** 2;
    if (this.numArr.length > 1) {
      for (let i=1; i < this.numArr.length; i++) {
        result += this.numArr[i] ** 2;
      }
    } return result;
  }
}

let numberArr_1 = new BasicOps([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(numberArr_1.sum());

const getNumberArr = (x:number, ...y:number[] | []):number[] => {
  // this function receives a number n of arguments -> ...y
  let numberArr = [x];

  if (y.length !== 0) {
    for (let i of y) {
      numberArr.push(i);
    }
  }

  return numberArr;
}

let numberArr_2 = new BasicOps(getNumberArr(11, 22, 33, 44, 55, 66, 77, 88));
console.log(numberArr_2.sum());

numberArr_1.numArr.push(9);
console.log(`\nLista de Números: [${numberArr_1.numArr}]`);
console.log(`Soma: ${numberArr_1.sum()}`);
console.log(`Soma dos Quadrados: ${numberArr_1.sumOfSquares()}`);
console.log(`Multiplicação: ${numberArr_1.multiply()}`);

numberArr_2.numArr.push(99);
console.log(`\nLista de Números: [${numberArr_2.numArr}]`);
console.log(`Soma: ${numberArr_2.sum()}`);
console.log(`Soma dos Quadrados: ${numberArr_2.sumOfSquares()}`);
console.log(`Multiplicação: ${numberArr_2.multiply()}`);
