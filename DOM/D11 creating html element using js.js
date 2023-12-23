// Add new HTML elements to page


// innerHTML to add html element
// const todoList = document.querySelector(".todo-list")
// console.log(todoList.innerHTML);

// todoList.innerHTML += "<li> Todo 2 </li>"


// When you should use it , when you should not
// There is a perform issue 


// If you have html element and don't add something, you just want to change its innerHTML then you can use it







// document.createElement()
// append
// prepend
// remove

const newTodoItem = document.createElement('li');
console.log(newTodoItem);
// const newTodoItemHText = document.createTextNode("Todo 2")
newTodoItem.textContent = "Todo 2"
// newTodoItem.append(newTodoItemHText)
const todoList = document.querySelector(".todo-list")
todoList.append(newTodoItem) // append will add to the last 


// prepend
// todoList.prepend(newTodoItem) // It will add item to the first position


// remove : It is used to revome html element
const todo1 = document.querySelector('.todo-list li')
todo1.remove(); // It will remove todo1
console.log(todo1);



// before 
const newtodo = document.createElement('li');
newtodo.textContent = "Deepak"
todoList.before(newtodo)


// after
const newtodo1 = document.createElement('li');
newtodo1.textContent = "Deepak"
todoList.after(newtodo1)
