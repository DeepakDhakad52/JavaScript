// static list vs Live list

// querySelectorAll will give us static list
// getElementBySomething will give us live list

// static list
// const listItems = document.querySelectorAll('.todo-list li');
// const sixthli = document.createElement('li')
// sixthli.textContent = 'item 6'
// const ul = document.querySelector('.todo-list')
// ul.append(sixthli)
// console.log(listItems);


// live list
const ul = document.querySelector('.todo-list')
const listItems = ul.getElementsByTagName('li');

const sixthli = document.createElement('li')
sixthli.textContent = 'item 6'

ul.append(sixthli)
console.log(listItems);






// How to get the dimensions of element
// height, width
const line = document.querySelector('.line')
const info = line.getBoundingClientRect();
// const info = line.getBoundingClientRect().height;
console.log(info);