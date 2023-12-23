// Primitive data type and reference data type


//primitive data type
let num1 = 7; // It will store in stack
let num2 = num1;
console.log("Value of num1 is ", num1);
console.log("Value of num2 is ", num2);

num1++;
console.log("Value of num1 is ", num1);
console.log("Value of num2 is ", num2);

//reference data type
let array1 = ["item1","item2"];
let array2 = array1;
console.log(array1); //Array store in heap 
console.log(array2);

// Note: Entire array will store in the heap and a pointer which is pointing the array in the heap is store in the stack. 
// array1 and array2 is pointing the same array in heap

array1.push("item3");
console.log(array1);
console.log(array2);