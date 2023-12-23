const mainButton = document.querySelector('#btn')
const body = document.querySelector('div');
console.log(body);

function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rendomColor = `rgb{${red},${green},${blue}}`;
    return rendomColor;
}

mainButton.addEventListener('click', ()=>{
    const randomColor = randomColorGenerator();
    body.style.background = randomColor;
    console.log(randomColor);
})