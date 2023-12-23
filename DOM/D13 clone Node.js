// clone node
// const ul = document.querySelector('.todo-list')
// const li = document.createElement('li')
// li.textContent = "NEW TODO"
// const li2 = li.cloneNode(true); // deep cloning
// ul.append(li) 
// ul.prepend(li2)






// some old methods to support poor IE 
// appendChild
// insertBefore(html, where)
// replaceChild
// removeChild

// const ul = document.querySelector('.todo-list')
// const li = document.createElement('li')
// li.textContent = "NEW TODO"
// const referenceNode = document.querySelector('.todo-list li')
// ul.appendChild(li)
// ul.insertBefore(li, referenceNode)

const ul = document.querySelector('.todo-list')
const li = document.createElement('li')
const referenceNode = document.querySelector('.todo-list li')
li.textContent = "NEW TODO"
// ul.replaceChild(li, referenceNode)
ul.removeChild(referenceNode)