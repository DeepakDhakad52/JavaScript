// get multiple elements using getElements by class name
// get multiple elements using querySelectorAll

const navItem = document.getElementsByClassName('nav-item');
console.log(navItem); // Array like object (HTMLCollection)

const navItems = document.querySelectorAll('.nav-item');
console.log(navItems);
console.log(navItems[2]);