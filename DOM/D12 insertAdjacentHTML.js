// element.insertAdjacentHTLM(where, html)
// beforebegin; (prepend)
// afterbegin; (prepend)
// beforeend; (append)
// afterend; (append)

const todoList = document.querySelector('.todo-list');
todoList.insertAdjacentHTML("beforebegin", "<li> toDO A</li>");

todoList.insertAdjacentHTML("afterbegin", "<li> toDO B</li>");

todoList.insertAdjacentHTML("beforeend", "<li> toDO C</li>");

todoList.insertAdjacentHTML("afterend", "<li> toDO D</li>");
