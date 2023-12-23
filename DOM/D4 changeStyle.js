// chaning the styles of elements
const mainHeading = document.querySelector('#main-heading'); // You can also use CSS selectors to select an element
console.log(mainHeading.style); // style object

mainHeading.style.color = "blue";
// Note : If you want to work with property like background-color then '-' is not allowed in the javascript, for that you can you backgroundColor(camelCase)

mainHeading.style.backgroundColor = "gray";
mainHeading.style.border = "2px solid red";
