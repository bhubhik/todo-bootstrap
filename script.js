let todo = document.querySelector('input');
let submit = document.querySelector('.submit-btn');
let todoContainer = document.querySelector('.todo-container');

let addTodo = () => {
  if (todo.value) {
    let makeLi = document.createElement('li');
    makeLi.classList.add(
      'bg-primary',
      'text-center',
      'text-white',
      'rounded',
      'mt-4',
      'p-2'
    );
    makeLi.appendChild(document.createTextNode(todo.value));
    todoContainer.appendChild(makeLi);
    todo.value = '';

    makeLi.onclick = function () {
      this.parentNode.removeChild(this);
    };
  } else {
    alert('List cannot be empty');
  }
};
