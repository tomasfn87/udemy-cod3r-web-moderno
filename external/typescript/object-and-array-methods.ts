class HandleObject {
  obj: object | any;

  constructor(obj: object) {
    this.obj = obj;
  }

  notArray():boolean {
    /* Returns true if it's not an array;
    /* Used in "getValues" to get an array's values directly instead of
    /  getting each key's value like in a non-array object. */
    return (
      Array.isArray(this.obj) ? false : true
    )
  }

  getKeys():string[] {
    // works both for objects and arrays;
    // array's keys are strings: "0", "1", "2"...
    let keys:string[] = [];
    for (let i in this.obj) {
      keys.push(i);
    }
    return keys;
  }

  getValues<Type>():Type[] {
    let values:Type[] = [];

    if (this.notArray()) {
    // for objects
      for (let i in this.obj) {
        values.push(this.obj[i]);
      }
    } else {
    // for arrays
      values = this.obj
    }
    return values;
  }
}

const a = [1, 3, 5];
const A = new HandleObject(a);
const b = {"a": 7, "b": 5, "c": 3};
const B = new HandleObject(b);

console.log('a =', a);
console.log('const A = new HandleObject(a)');
console.log('A.notArray() =', A.notArray());
console.log('A.getKeys() =', A.getKeys());
console.log('A.getValues() =', A.getValues());
console.log('\nb =', b);
console.log('const B = new HandleObject(b)');
console.log('B.notArray() =', B.notArray());
console.log('B.getKeys() =', B.getKeys());
console.log('B.getValues() =', B.getValues());
