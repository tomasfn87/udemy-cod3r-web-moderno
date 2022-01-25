function shortest<Type extends { length: number }>(x:Type, y:Type) {
    if (x.length <= y.length) return x;
    return y;
}

console.log(shortest([1,2], [1,2,3]));
// console.log(short<st(10, 100); // error
console.log(shortest("10", "100"));
// console.log(short<st({a:1,b:2}, {c:3})); // error
console.log(shortest( [ [], [] ], [ [], [], [] ]));
