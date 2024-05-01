var a = 5;
var b = 3;

//Bitwise AND
console.log(a & b);

let c = a.toString(2).padStart(8, 0);
console.log(c);

let d = b.toString(2).padStart(8, 0);
console.log(d);

let e = 16 >> 2;
console.log(e);

let f = 20 << 2;
console.log(f);

let g = 10;
console.log(~g);
