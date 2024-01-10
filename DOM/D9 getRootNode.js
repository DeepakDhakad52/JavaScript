const rootNode = document.getRootNode();
console.log(rootNode);
console.log(rootNode.childNodes);

const htmlRootNode = rootNode.childNodes[0];
console.log(htmlRootNode.childNodes); //NodeList(3) [head, text, body]

const headElementNode = htmlRootNode.childNodes[0];
const textNode1 = htmlRootNode.childNodes[1];
const bodyNode = htmlRootNode.childNodes[2];
console.log(headElementNode);
console.log(textNode1);
console.log(bodyNode);

console.log(headElementNode.parentNode);
console.log(headElementNode.nextSibling); //It will give the next sibling of headElementNode
console.log(headElementNode.nextElementSibling); // It will give the next element not textNode


console.log(headElementNode.childNodes);


const heading = document.getElementById('main-heading');
const parentOfHeading = heading.parentNode;
parentOfHeading.style.backgroundColor = 'gray'

// IF you want to select the body tag directly then we can use body property directly

const body = document.body;
console.log(body);
body.style.backgroundColor = '#333'
body.style.color = '#efefef'


// If you want only the html element child node(not text node) then you can use children property
const mainHead = document.querySelector('.main-head');
console.log(mainHead.children);