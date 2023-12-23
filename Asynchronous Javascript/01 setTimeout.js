// synchronous Programming vs Asynchronous programming
// synchronous Programming
// Javascript is a synchronous programming language and single threaded

// console.log('start');

// for (let i = 0; i < 10000; i++) {
//     console.log('inside loop');
// }

// console.log('end');





// setTimeout(function, time)
// console.log('start');
// function hello(){
//     console.log('Hello World');
// }
// setTimeout(hello, 1000); // function , time -> Delayed
// Note : setTimeout is browser's functionality, It will moniter the time and return the callback function to the callback queue. After adding callback function in the queue, event loop will moniter the callstack to execute callback function
// console.log('end');


// console.log('start');
// function hello(){
//     console.log('Hello World');
// }
// setTimeout(hello, 0); 
// for (let i = 0; i < 1000; i++) {
//     console.log('.....');
    
// }
// console.log('end');



console.log('start');
function hello(){
    console.log('Hello World');
}
const id = setTimeout(hello, 0); 

for (let i = 0; i < 1000; i++) {
    console.log('.....');
}

console.log(id);
console.log('clear setTimeout()');
clearTimeout(id);  // It will clear the 'id' of setTimeout means it will not run 
console.log('end');