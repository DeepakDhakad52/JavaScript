// change text
// textContent and innerText


// textContent
const mainHeading = document.getElementById('main-heading');
console.log(mainHeading.textContent); 
// mainHeading.textContent = "Ranging";

// Note : textContent property will give the entire text which is present in the html element whether it hidden too.

// innerText : innerText property only give the visible text of the html element

console.log(mainHeading.innerText); // Showing only the visible text
