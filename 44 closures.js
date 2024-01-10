// closures : It is space to store elements or variable when a function is returns a function.

// Whenwever a function is retured by a function it will return with some additional information(variables), that information is knows as closuer.

function myFun(){
    let firstName = 'Deepak'
    let lastName = 'Dhakad'
    return () => {
        console.log(firstName, lastName);
    }
}

let fullName = myFun(); // myFun will return arrow function with firstName and lastName too.
fullName(); // Deepak Dhakad ---> This will come from its lexical environment (parent), and it is closure.





// Write a function that accept an number as power and it will return a function which return power of given number.
// let powerFunction = (power) => {
//     return (number) => {
//         return number ** power;
//     }
// }

// We can reduce this function to arrow function
let powerFunction = power => number => number**power;

let findCube = powerFunction(3);
let ans = findCube(5)
console.log(ans);






// Write a function that can only call once in life.
let myFunction = () => {
    let isCalled = false;
    return () => {
        if(!isCalled){
            isCalled = true
            console.log("Hi, You called me...");
        } else {
            console.log('You have already called me');
        }
    }
}

let fx = myFunction();
fx() // Hi, you called me...
fx() // You have already called me