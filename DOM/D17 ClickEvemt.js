// Adding event listener on the multiple buttons

const allButtons = document.querySelectorAll('button')

for (let button of allButtons) {
    button.addEventListener("click", function(){
        console.log(this.textContent);
    });
}

for(let i=0; i < allButtons.length; i++){
    allButtons[i].addEventListener("click", function(){
        console.log(this.textContent);
    });
}

allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this.textContent);
    });
})






// This file linked with ClickEvent.html