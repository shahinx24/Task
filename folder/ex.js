let obj1 = { a: 1, b: { c: 2 } };
let obj2 = structuredClone(obj1);

obj2.b.c = 99;

console.log(obj1.b.c); // still 2 → original unchanged
console.log(obj2.b.c);