// Event Object

// const firstButton = document.querySelector('#one')
// firstButton.addEventListener('click', function(){
//     console.log(this);
// })

// js Engine ----- line by line execution
// browser ------- js Engine + extra features
// browser-------- js engine + webAPI
// Whenever i will apply addEventLister on element then,
// Browser will be aware from the event when it will perform

// Brower --- 2 kaam karega
// 1) callback function browser js engine ko dega
// 2) callback function ke sath jo event perform hua h uski information bhi js engine ko dega 
// This information will be in the form of object, which we will receive

const firstButton = document.querySelector('#one')
firstButton.addEventListener('click', function(event){
    console.log(event);
})

const allButtons = document.querySelectorAll('button')
for (const button of allButtons) {
    button.addEventListener('click', function(e){
        console.log(e.currentTarget);
    })
}