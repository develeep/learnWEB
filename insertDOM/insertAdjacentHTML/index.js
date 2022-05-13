const insert = ()=>{
  const list = document.querySelector('#todoList')
  const input = document.querySelector('#todoInput').value
  list.insertAdjacentHTML('afterbegin',`<p>${input}</p>`)
  
}

const btn = document.querySelector('#addTodoButton')
btn.addEventListener('click',insert)