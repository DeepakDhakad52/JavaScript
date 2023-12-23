// Function inside Function
const app = () =>{
    const myFunc = () =>{
        console.log("Hello from My Function!");
    }
    const addTwo = (a,b) =>{
        return a+b;
    }
     const mul = (a,b) => a*b;
    
     console.log("Inside app");
     console.log(addTwo(5,6));

     myFunc();
     console.log(addAll(3,4));
     console.log(mul(4,5));
     

}

app();

// Note : If want to run that functions we need to call them inside the app() function








//Lexical scope

// If the data member is not available in the scope of function then it will find that data member outside the function, that outside area is known as Lexical scope

let myvar = "value1";
function myApp(){
    // let myvar = "value1";

    function my1(){
        // let myvar = "value59"
        console.log("Inside my1", myvar);
        const my2 = () => {
            console.log("Inside my2", myvar);
        }
        my2();
    }
    
    console.log(myvar);
    my1();
}
myApp();






//block scope vs Function scope

//let and const are block scope
//var is function scope

{
    let firstName = "Deepak";
}
// console.log(firstName); // Error

{
    let firstName = "Deepak";
    console.log(firstName);
}

{
    var name = "Mohit";
}
console.log(name); // it will access from outside of the block











// default parameters

// function addTwo(a,b){
//     if(typeof b === "undefined")
//     {
//         b=0;
//     }
//     return a+b;
// }

// const ans = addTwo(4,5);
// console.log(ans);

function addTwo(a,b=0){
   
    return a+b;
}

const ans = addTwo(4,5); // Here we have set the default value of b is 0 and we are passing b=5 from the function calling, In this case the value of b will be updated

console.log(ans);










//rest parameter
function my4(a,b,...c)
{
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    // console.log(`c is ${c}`);
    console.log(`c is`, c);
}

my4(3,5,5,25,55,5);


//create a function to add random values
function addAll(...numbers){
    let total = 0;
    for(let number of numbers)
    {
        total = total + number;        
    }
    return total;
}

console.log(addAll(2,5,454,64,64,4));








//parameter destructuring

//we use parameter destructuring with objects
//We also use parameter destructuring in react

const person = {
    firstName : "Deepak",
    gender : "male"
};

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

function printDetails({firstName,gender}){
    console.log(firstName);
    console.log(gender);
}

printDetails(person);







//callback function

function myfun(callback)
{
    console.log(callback);
    // console.log(typeof a, Array.isArray(callback));
    if(typeof callback === "function")
    {
        callback(); //after passing a function we can use it.
    }
}

function myfun1(){
    console.log("hello from myfun1");
}

myfun([2544,45,484,84]); //array passing
myfun(15); //number passing
myfun("Deepak"); //string passing
myfun({firstName : "Deepak"}); //object passing
myfun(myfun1); //function passing






console.log("\n");


// Function returning Funtion

function F1() {
    return "abc"; // returning string
}

const answer = F1();
console.log(answer);



function fun(){
    function hello(){
        console.log("Hello!");
    }
    return hello; // Returning a function
}

const newFun = fun();
newFun();

