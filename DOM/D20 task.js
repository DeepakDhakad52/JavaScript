// Need to change background to yellow when clicked on the button and change text color to gray

const allButtons = document.querySelectorAll('button')

allButtons.forEach((button)=>{
    button.addEventListener('click', function(){
        button.style.backgroundColor = "yellow";
        button.style.color = "gray"
    })
})