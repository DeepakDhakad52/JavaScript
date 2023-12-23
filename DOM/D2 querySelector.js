// query selector : It is used to select id, class, and any other element

const heading = document.querySelector("#main-heading");
console.log(heading);
console.dir(heading);


const line = document.querySelector(".line");
console.log(line);

// const navItem = document.querySelector(".nav-item"); // It will select only the first element of class 'nav-item'



// To select all element of the class :
const navItem = document.querySelectorAll(".nav-item"); // It will return a node list similar to array (but it is not an array)
console.log(navItem);
