// Promise : It represent the future value means currently we don't about the value what is it but it will come in future

console.log("start");
const bucket = ['coffee', 'chips', 'vegetables', 'saalt', 'rice'];

const friedRice = new Promise((resolve, reject)=>{
    if(bucket.includes('vegetables') && bucket.includes('rice') && bucket.includes('salt'))
    {
        resolve("Fried Rice");
    }
        else {
        reject(new Error("Could Not complete"));
    }
})

// produce

//consume : It will be done by the browser
// how to consume
// friedRice.then((myFriedRice) => {
//     console.log(myFriedRice);
// }, (error)=>{
//     console.log(error);
// })

friedRice.then((myFriedRice) => {
    console.log(myFriedRice);
}).catch((error)=>{console.log(error);})

setTimeout(()=>{console.log("setTimeout()");},0)

for(let i=0; i<100; i++){
    console.log(i);
}

console.log("End");

// Note : Promises are store in the Microtast QUEUE 
// then and catch methods will store in the microtask QUEUE

// Proirity of microtask QUEUE is more the Callback QUEUE