const todoForm = document.querySelector('.form-todo');
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector('.todo-list');

todoForm.addEventListener('submit', (e)=>{
    e.preventDefault(); // It will prevent reloading of page
    //console.log(todoInput.value); // It will the value of input field
    let newLi = '';
    if(todoInput.value !== ''){
       newLi = document.createElement("li");
    }
    const newLiInnerHTML = `<span>${todoInput.value}</span>
    <div class="todo-bottons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
    </div>`;
    newLi.innerHTML = newLiInnerHTML;
    todoList.append(newLi)
    todoInput.value = '';
})

todoList.addEventListener('click',(e)=>{
    if (e.target.classList.contains('done')) {
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through"
        liSpan.style.color = "green"
    }
    if (e.target.classList.contains('remove')) {
        const targetLi = e.target.parentNode.parentNode;
        targetLi.remove();
    }
})