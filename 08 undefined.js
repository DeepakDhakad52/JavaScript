// If you declare an variable but not initialize it, then it will be undefined.

//undefined
let firstName;
console.log(typeof firstName);

firstName = "deepak";
console.log(typeof firstName, firstName);

// null
let myVar = null;
console.log(typeof myVar); //object (It is a bug in javaScript)

//BigInt
let num = 123;
console.log(Number.MAX_SAFE_INTEGER); // It will give the Biggest integer
num = BigInt(1231465856247896389635896358960);
num = 1231465856247896389635896358960n;

console.log(num);

// Note: All the mathematical operation on BigInt only perform with BigInt. Else it will give error.

