// Functions in JavaScript
// We can declare a function us 'function' keyword

// Function declaration
function singHBD()
{
    console.log("Happy Birthday to You....");
}

singHBD(); // function calling

function sum(a,b){
    return a+b;
}

a=5;
b=7;
console.log( sum(a,b));

// create a function to check even or odd
function IsEven(n)
{
    if(n%2===0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(IsEven(25));

// create a fuction which take input as a string and return its first character
function firstChar(str){
    return str[0];
}
console.log(firstChar("Deepak"));


// create a function which takes input array & target and return index of that target if target not found then return -1
function arrayfun(arr, target)
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]===target)
        {
            return i;
        }
    }
    return -1;
}
const my1 = [1,2,3,4,5,6,7,9,8,75];
let ele = 5;
console.log(arrayfun(my1, ele));






// Note : We can assign a function to a variable or constant

//Function expression
const isOdd = function(n){
    return n%2===1;
}
let ans = isOdd(158);
console.log(ans);








// Arrow Function

const sumThreeNumbers = (a,b,c) => {
    return a+b+c;
}
ans = sumThreeNumbers(15,26,64);
console.log(ans);

// Note : If our funtion is taking only one argument as input then we can revove the paranthesis from the arrow funtion 


//hoisting : We can call funtion before the inilizing the funtion
hello();

function hello(){
    console.log("Hello World!");
}

// Note : Hoisting is work only with the Function declaration(normal funtion), It will not work with Arrow funtion and function expression


// -----------------------------------------------------------------------
console.log(myVar); // undefined
// var myVar = "hello World";
console.log(myVar); // Hello World

console.log(myVar); // Error
// let myVar = "hello World";
console.log(myVar); // Error

console.log(myVar); // Error
// const myVar = "hello World";
console.log(myVar); // Error
