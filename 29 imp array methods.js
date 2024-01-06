// Important methods of Array

// forEach method
// map method
// filter method
// reduce method
// sort method
// find method
// every method
// some method
// fill method
// splice method


// forEach : This method will pass the index and value at that index as argument
const numbers = [1,2,3,4,5];

// function multipltBy2(number, index){
//     console.log(`Index is ${index} and ${number}*2 is ${number*2}`);
// }

// multipltBy2(numbers[0],0);
// multipltBy2(numbers[1],1);
// multipltBy2(numbers[2],2);

// for (let i = 0; i < numbers.length; i++) {
//     multipltBy2(numbers[i],i);

// }

// numbers.forEach(multipltBy2); // It will work same as above loop

numbers.forEach(function(number,index){
    console.log(`Index is ${index} and ${number}*2 is ${number*2}`);
});


const users = [
    {firstName : "Deepak", age : 20},
    {firstName : "Mohit", age : 22},
    {firstName : "Kapil", age : 21},
    {firstName : "Karam", age : 16}
];

users.forEach(function(user){
    console.log(user.firstName);
});

users.forEach((user) => {
    console.log(user.firstName);
})

for(let user of users){
    console.log(user.firstName);
}





// map method : This method will return a new array 
const num = [1,2,51,541,58,5,4];

const square = function(number){
    return number*number;
}

const sqaureNumber = num.map(square);
console.log(sqaureNumber);

// Note : If you are using map method then it is recomended to return the value from the function else it will store undefined value in the array





// filter Method : This method also returns a new array

const num1 = [1,2,3,4,5,6];

const isOdd = function(number){
    return number % 2 === 1;
}

let oddNum = num1.filter(isOdd);
console.log(oddNum);

// Note : If you are using filter method then your function must return boolean(true or false) value 
// As name of the method is filter, It will filter the array according to the condition and create a new array




// reduce method : This method return a single output
const num2 =[1,2,3,4,5];

let sum = num2.reduce((initialValue, currentValue) => {
    return initialValue + currentValue;
}, 0);

console.log(sum);

// initialValue, currentValue , return 
//      1           2           3
//      3           3           6
//      6           4           10
//      10          5           15







// sort method : It is used to sort string
// This method change the existing array it will not create a new array

const username = ["user1", "user5", "user9", "user8"];
console.log( username.sort());

const num3 = [49,44,848,84,841,5];
console.log(num3.sort((a,b) => a-b));

// 49, 44
// a-b ---> 4 (positive)
// a-b ---> positive(>0) then ---> b,a
// a-b ---> negative(<0) then ---> a,b

const products = [
    {productId : 1, productName : "p1", price : 300},
    {productId : 2, productName : "p2", price : 3000},
    {productId : 3, productName : "p3", price : 200},
    {productId : 4, productName : "p4", price : 8000},
    {productId : 5, productName : "p5", price : 500}
];

// lowToHigh
products.sort((a,b) => {
    return a.price - b.price;
});

console.log(products);
// Note : sort method does not create new array, it will change the existing array







// find method : This mrthod is used to find element in the array according to the given condition

const myArray = ["hello","cat", "doggy"];

function isLenght3(str){
    return str.length === 3;
}
// const ans1 = myArray.find(isLenght3);
const ans1 = myArray.find(str => str.length === 3)

console.log(ans1); // cat





// every method : It will return boolean as output if and only if when all the condition will true
const num4 = [2,4,6,8,10];

const ans2 = num4.every((number) => number%2==0);
console.log(ans2); // true

const userCart = [
    {productId : 1, productName : "mobile", price : 12000},
    {productId : 2, productName : "laptop", price : 22000},
    {productId : 3, productName : "tv", price : 15000}
];

const ans5 = userCart.every((cartItem) => cartItem.price < 30000);
console.log(ans5); // true

// Note : every method will return true when the given condition is true with all the elements of the array
// behavious of "every" method is similar to the && operator






// some method : It will return boolean as output. It is just opposite to every method

const num5 = [3,5,8,9];

// kya ek bhi aisa h jo even h (OR Operation)
//true

console.log(num5.some(number => number%2 === 0));

// Note : This method returns true if any of the condition is true, else it will return false.
// It will return false if and only if when all condition are false
// Behaviour of "some" method is similar to the || operator

// I want to check is there price of any item is greater than 100000.
const userCart1 = [
    {productId : 1, productName : "mobile", price : 12000},
    {productId : 2, productName : "laptop", price : 22000},
    {productId : 3, productName : "tv", price : 15000},
    {productId : 4, productName : "macbook", price : 250000}
];

console.log(userCart1.some(cartItem => cartItem.price > 10000)); //true





// fill method : It is used to fill elements in the array
// value , start , end

const myArray1 = new Array(10).fill(50);
console.log(myArray1);

const myArr = [1,2,3,4,5,6,7,8,9,10];
myArr.fill(0,2,5);  // value , start , end
console.log((myArr)); // [1, 2, 0, 0, 0, 6, 7, 8, 9, 10]





// splice method : It is used to delete or insert value from/in the array
// start, delete, insert

const myArray2 = ["item1","item2","item3"];

//delete
myArray2.splice(1,1); // startingIndex, numberOfElement (This method return the element which is deleted)
console.log(myArray2);

// insert
myArray2.splice(1,0,"inserted Item"); // start, delete, insert
console.log(myArray2);

// insert and delete
myArray2.splice(1,2,"item10", "item20");
console.log(myArray2); // ['item1', 'item10', 'item20']

// Note : splice method will change the original array
