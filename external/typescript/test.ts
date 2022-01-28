const prop = 'a'

let d1 = [
    {a: "2"},
    {a: "3"},
    {a: "1"}
]
console.log(d1);

let d2 = d1.map(i => i[prop]);

console.log(d2);

function mapValues(arr: any[], prop: string | number) {
    return arr.map(item => item[prop])
}

console.log(mapValues(d1, 'a'));