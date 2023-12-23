// Promise resolve
// Promise Chaining


const myPromise = Promise.resolve(5);
// myPromise.then((value)=>{console.log(value)});
Promise.resolve(5).then((value)=>{console.log(value)});



// Note : then() method hamesha promise hi return karti h, Iska fayeda ye h ki hum promise ki chain create kar sakte h


// for example
function myFunction(){
    return new Promise((resolve, reject)=>{
        resolve("foo");
    })
}

myFunction()
    .then((value)=>{
        console.log(value);
        value += "bar";
        return value; // "It returning promise not string"
        return Promise.resolve(value); // Internal working of above statement
        // Agar hum kuchh return nahi karte h to bydefault undefined return hota h
    })
    .then((value)=>{
        console.log(value);
        value += "book";
        return value; // Returning a promise
        // We are not able to apply then() method on string
    })
    .then(value=>{
        console.log(value);
    })