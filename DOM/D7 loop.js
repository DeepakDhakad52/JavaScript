// array like object --> indexing, lenght property

// simple for loop
// for of loop
// forEach loop
// Note : we can't use forEach method/loop to iterate through HTMLCollection

// let navItems = document.getElementsByTagName('a');

// for(let i=0; i<navItems.length; i++)
// {
    //     const navItem = navItems[i];
    //     navItem.style.backgroundColor = "#000000"
    //     navItem.style.color = 'red'
    // }
    
    // for(let navItem of navItems){
        //     navItem.style.backgroundColor = "#000000"
        //     navItem.style.color = 'red'
        // }
        
        // navItems.forEach(navItem => { // It will give error
        //     navItem.style.backgroundColor = "#000000"
        //     navItem.style.color = 'red'
        // });
        
        // Note : To use forEach loop in HTMLCollection then we can change HTMLCollection to the Array
        
        // navItems = Array.from(navItems); // it will change HMTLCollection to Array
        // navItems.forEach(navItem => { // Now the forEach loop will run perfectly
    // navItem.style.backgroundColor = "#000000"
    // navItem.style.color = 'red'
// });




// NodeList : We can use all loops on NodeList
let navItems = document.querySelectorAll('a');
// simple for loop
// for of loop
// forEach loop
// for(let i=0; i<navItems.length; i++)
// {
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#000000"
//     navItem.style.color = 'red'
// }

// for(let navItem of navItems){
//         navItem.style.backgroundColor = "#000000"
//         navItem.style.color = 'red'
//     }

// navItems.forEach(navItem => { 
//     navItem.style.backgroundColor = "#000000"
//     navItem.style.color = 'red'
// });