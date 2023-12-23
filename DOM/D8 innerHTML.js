// innerHTML : Elements or content inside a HTML element is innerHTML.

const line = document.querySelector(".line");
console.log(line.innerHTML);

line.innerHTML += "<p> This is Credit Score </p>";
console.log(line.innerHTML);