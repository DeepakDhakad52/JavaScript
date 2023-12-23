// Array destructuring

const myarray = ["value1",'value2','value3'];
// let my1 = myarray[0];
// let my2 = myarray[1];
// console.log(my1);
// console.log(my2);

let [a,b]  = myarray; // First element of myarray is store in a and second value of myarray will store in b
console.log(a);
console.log(b);

let [a1,,a2] = myarray; //In this line, second element will skipped and the third element will store in a2
console.log(a1);
console.log(a2);
