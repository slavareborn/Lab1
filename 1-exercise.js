const inc1 = (n) => ++n;
const inc2 = (num) => ++num.n;

//first realization
const a = 5; const b = inc1(a); console.dir({a, b});
//second realization
const obj = { n: 5 }; inc2(obj); console.dir(obj);