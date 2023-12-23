// for loop in array
let friut = ["apple","Mango","grapes","Banana"];

for(let i=0;i<friut.length;i++)
{
    console.log(friut[i].toUpperCase());
}

// while loop 
const array1 = ["itemA", 'itemB'];
let i = 0;
const array2 = ["item"];
while(i<array1.length)
{
    array2.push(array1[i].toUpperCase());
    i++;
}
console.log(array2);


// for in | for of loop in array

const myfruits = ["apple","Mango","Grapes"];
for (let fruit of myfruits){
    //This loop will give (friut = value at index)
    console.log(fruit);
}


//for in loop 
for(let fruit in myfruits)
{
     //this loop give integer value(friut = index)
    console.log(myfruits[fruit]);
}